import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const systemPrompt = `You are an expert AI Legal, Secretarial, and Financial Regulatory Assistant for "TriWise Partners", a premier multi-disciplinary firm based in India. 
    Your expertise covers:
    - Ministry of Corporate Affairs (MCA) and Companies Act, 2013 filings, board meetings, and compliance.
    - SEBI (LODR, ICDR, SAST, PIT) regulations for listed entities and capital markets.
    - NCLT litigation, mergers, amalgamations, and oppression & mismanagement (Sections 241-242).
    - Taxation (Income Tax, GST) and FEMA/RBI cross-border regulations.
    
    Keep answers concise, professional, accurate to Indian corporate law, and helpful. Always remind users to consult TriWise Partners directly for formal advisory or representation.`;

    // Smart simulation response handling for various Indian regulatory keywords
    let reply = `Thank you for your query regarding "${message}". Under Indian Corporate Law and MCA/SEBI frameworks, this requires careful structuring. For bespoke guidance tailored to your enterprise, please connect with our specialists at TriWise Partners via our contact form or call us directly.`;

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('nclt') || lowerMessage.includes('merger') || lowerMessage.includes('amalgamation')) {
      reply = `Under Sections 230–232 of the Companies Act, 2013, mergers, demergers, and amalgamations require systematic structuring, NCLT scheme approvals, and creditor/shareholder meetings. TriWise Partners provides comprehensive end-to-end NCLT representation and corporate restructuring support.`;
    } else if (lowerMessage.includes('sebi') || lowerMessage.includes('listing') || lowerMessage.includes('lodr')) {
      reply = `SEBI compliance involves continuous LODR disclosures, ICDR capital issuances, Takeover (SAST) codes, and Insider Trading (PIT) regulations. TriWise Partners assists listed entities and boards with robust regulatory governance and Secretarial Audits.`;
    } else if (lowerMessage.includes('fema') || lowerMessage.includes('rbi') || lowerMessage.includes('fdi')) {
      reply = `FDI structuring, cross-border remittances, and RBI filings are governed strictly under the Foreign Exchange Management Act (FEMA). Our advisory team handles comprehensive regulatory compliance for international transactions.`;
    } else if (lowerMessage.includes('mca') || lowerMessage.includes('company incorporation') || lowerMessage.includes('filing')) {
      reply = `MCA compliance under the Companies Act, 2013 involves timely ROC filings, maintaining statutory registers, conducting board/AGM meetings, and event-based disclosures (DIR-12, AOC-4, MGT-7). TriWise Partners handles full-spectrum corporate secretarial workflows.`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}