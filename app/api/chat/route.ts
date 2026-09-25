import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    console.log('GEMINI_API_KEY:', apiKey); // Debugging line to check if the API key is being read correctly

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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: 'You are an expert corporate compliance, legal, and regulatory AI assistant for TriWise Partners. Provide concise, highly professional answers. Leverage live web searches when answering questions about current laws, SEBI regulations, or MCA compliance updates.',
      },
    });

    const botReply = response.text || 'I could not generate a response at this time.';
    return NextResponse.json({ reply: botReply });

  } catch (error: any) {
    console.error('Gemini Chat API Error Details:', error);
    return NextResponse.json(
      { reply: `Server Error: ${error.message || 'Check terminal logs for details.'}` },
      { status: 500 }
    );
  }
}