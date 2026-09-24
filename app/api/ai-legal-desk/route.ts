import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'GEMINI_API_KEY is not configured' }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [{ text: `You are an elite corporate legal, secretarial, and tax AI assistant for the firm "TriWise Partners".
Provide a professional, structured preliminary response to the following query regarding Indian corporate law, MCA rules, SEBI regulations, or taxation.
Use Google Search grounding to pull verified real-time information from official sources if necessary. Keep it professional, concise, and advise formal consultation for critical filings.

Query: ${query}` }],
          }],
          tools: [{ googleSearch: {} }],
          generationConfig: { temperature: 0.2 },
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'Gemini API request failed');
    }

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated from Gemini.';

    return NextResponse.json({ success: true, answer });
  } catch (error: any) {
    console.error('Gemini AI Legal Desk Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}