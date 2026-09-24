import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini client securely with your environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: 'Please provide a query.' }, { status: 400 });
    }

    // Call Gemini 2.5 Flash with live Google Search grounding enabled
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        // This tool allows Gemini to query Google live for up-to-date compliance info
        tools: [{ googleSearch: {} }],
        systemInstruction: 'You are an expert corporate compliance, legal, and regulatory AI assistant for TriWise Partners. Provide concise, highly professional answers. Leverage live web searches when answering questions about current laws, SEBI regulations, or MCA compliance updates.',
      },
    });

    const botReply = response.text || 'I could not generate a response at this time.';

    return NextResponse.json({ reply: botReply });

  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    return NextResponse.json(
      { reply: 'Sorry, I encountered an error communicating with the AI assistant. Please try again later.' },
      { status: 500 }
    );
  }
}