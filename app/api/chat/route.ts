import { NextResponse } from 'next/server';
import { ApiError, GoogleGenAI } from '@google/genai';

// gemini-2.5-flash was retired for new API keys (404 NOT_FOUND).
// The lite model is a fallback for when the main one is overloaded (503).
const MODELS = ['gemini-3.8-flash', 'gemini-flash-lite-latest'];

const SYSTEM_INSTRUCTION =
  'You are an expert corporate compliance, legal, and regulatory AI assistant for TriWise Partners. Provide concise, highly professional answers. Leverage live web searches when answering questions about current laws, SEBI regulations, or MCA compliance updates.';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { reply: 'Configuration Error: GEMINI_API_KEY is missing from environment variables.' },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: 'Please provide a query.' }, { status: 400 });
    }

    const generate = async (model: string) => {
      try {
        return await ai.models.generateContent({
          model,
          contents: message,
          config: {
            tools: [{ googleSearch: {} }],
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
      } catch (error) {
        // Google Search grounding needs paid quota; fall back to a plain answer when it's unavailable.
        if (!(error instanceof ApiError) || error.status !== 429) throw error;
        console.warn(`Google Search grounding quota exceeded on ${model}, retrying without search.`);
        return await ai.models.generateContent({
          model,
          contents: message,
          config: { systemInstruction: SYSTEM_INSTRUCTION },
        });
      }
    };

    let response;
    for (const [i, model] of MODELS.entries()) {
      try {
        response = await generate(model);
        break;
      } catch (error) {
        const isLast = i === MODELS.length - 1;
        if (isLast || !(error instanceof ApiError) || error.status !== 503) throw error;
        console.warn(`${model} is overloaded, falling back to ${MODELS[i + 1]}.`);
      }
    }

    const botReply = response?.text || 'I could not generate a response at this time.';
    return NextResponse.json({ reply: botReply });

  } catch (error) {
    console.error('Gemini Chat API Error Details:', error);
    return NextResponse.json(
      { reply: `Server Error: ${error instanceof Error ? error.message : 'Check terminal logs for details.'}` },
      { status: 500 }
    );
  }
}
