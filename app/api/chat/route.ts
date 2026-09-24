import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: 'Please provide a query.' }, { status: 400 });
    }

    let externalData = '';
    const lowerMessage = message.toLowerCase();

    // 1. Check if the query is technical/coding-related to fetch from GitHub API
    const isCodeOrRepoQuery = /code|github|script|python|repository|error|api|bug|linux/i.test(message);

    if (isCodeOrRepoQuery) {
      try {
        // Query GitHub public repositories/code search API
        const githubQuery = encodeURIComponent(message);
        const ghRes = await fetch(`https://api.github.com/search/repositories?q=${githubQuery}&per_page=3`, {
          headers: {
            'User-Agent': 'TriWise-Partners-AI-Bot',
            // Optional: If you have a GitHub token, add it here for higher rate limits:
            // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          }
        });
        
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          if (ghData.items && ghData.items.length > 0) {
            const topRepos = ghData.items.map((repo: any) => `- [${repo.full_name}](${repo.html_url}): ${repo.description || 'No description'}`).join('\n');
            externalData += `\n\n**Top GitHub References Found:**\n${topRepos}`;
          }
        }
      } catch (ghErr) {
        console.error('GitHub API fetch error:', ghErr);
      }
    } 

    // 2. Fetch live web info via Google Custom Search API (for general knowledge, SEBI, MCA, NCLT, etc.)
    const googleApiKey = process.env.GOOGLE_SEARCH_API_KEY;
    const searchEngineId = process.env.GOOGLE_CSE_ID;

    if (googleApiKey && searchEngineId) {
      try {
        const googleRes = await fetch(`https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${searchEngineId}&q=${encodeURIComponent(message)}`);
        if (googleRes.ok) {
          const googleData = await googleRes.json();
          if (googleData.items && googleData.items.length > 0) {
            const topResults = googleData.items.slice(0, 3).map((item: any) => `- [${item.title}](${item.link}): ${item.snippet}`).join('\n');
            externalData += `\n\n**Trusted Global Web Results (Google):**\n${topResults}`;
          }
        }
      } catch (gErr) {
        console.error('Google Search API error:', gErr);
      }
    }

    // 3. Construct the comprehensive response
    // (If you use an LLM like Gemini SDK on the backend, you can pass `externalData` as context to the model here).
    let botReply = `Here is what I found regarding "${message}":`;
    
    if (externalData) {
      botReply += externalData;
    } else {
      botReply += `\n\nI searched trusted public databases and global web archives, but found no direct matches. Please feel free to rephrase or connect with TriWise Partners directly via our contact form for specialized advisory.`;
    }

    return NextResponse.json({ reply: botReply });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { reply: 'Sorry, I encountered an error connecting to global trusted search streams.' },
      { status: 500 }
    );
  }
}