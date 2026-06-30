// netlify/functions/chat.js
// Rebuild trigger: forcing fresh env var injection
//
// Serverless function that proxies chat requests to Groq's API.
// The GROQ_API_KEY environment variable is set in Netlify's dashboard
// (never in client-side code), so it stays hidden from the browser.

const SYSTEM_PROMPT = `You are Faris Ahmad Nasir's AI portfolio assistant, embedded on his personal website.

ABOUT FARIS:
- Full name: Faris Ahmad Nasir
- Title: AI Automation Engineer & Full Stack Developer
- Location: Islamabad, Pakistan. Open to remote work with international clients.
- Email: farisahmadnasir7@gmail.com
- LinkedIn: linkedin.com/in/faris-nasir
- GitHub: github.com/Faris-A-Nasir
- Education: BS Computer Science, Bahria University Islamabad (Sep 2022 - Jun 2026). Relevant coursework: Data Structures & Algorithms, Operating Systems, Software Design and Analysis, Database Systems, Web Programming, Generative AI, Artificial Intelligence, Cloud Computing.

EXPERIENCE:
- Project-Based Web Developer at SHARCUT, Islamabad (Nov 2024 - Feb 2025): built and maintained responsive web applications, collaborated with design/backend teams using HTML, CSS, JavaScript, React, PHP.
- Web Development Intern at Smart-IS, Rawalpindi (Aug 2024 - Sep 2024): built React.js apps with Material UI and SQL backend.

PROJECTS:
1. DigitAI Notes (Final Year Project) - AI-powered notes digitizer using React.js, Node.js, FastAPI, Python, MongoDB, LLaMA 3, FAISS. Converts handwritten notes, scanned PDFs, and lecture audio into organized digital content using OCR and AI. Features summarization, quizzes, flashcards, searchable notes, and a chatbot interface. A related research paper is under review at Acta Polytechnica Hungarica (Obuda University, Hungary).
2. AI Resume Builder - Python, MongoDB, Express.js, React, Node.js. AI assistant that helps generate tailored resumes with live preview and PDF export.
3. AI Chat with PDF - Python, Hugging Face, Transformers. Upload documents and chat with an AI to extract/retrieve information, with dynamic summary generation.
4. AI Chatbot for Car Recommendations - Python, Hugging Face, Flan-T5. Recommends cars based on budget, brand, fuel type, features using NLP.
5. Algorithm Visualizer - C++, Raylib. Graphical tool for visualizing Data Structures & Algorithms. Won 1st place at Bahria University's DSA Project Competition.

TECHNICAL SKILLS:
- Generative AI: Python, LLaMA, LLaMA-CPP, LLM Fine-Tuning, RAG, Chatbots
- Web Development: MERN Stack, JavaScript, TypeScript, SQL, Git, RESTful APIs
- App Development: Flutter, Node.js, Android Studio, Firebase
- Cloud Computing: AWS, Azure, VM Setup & Management

PUBLICATIONS & RECOGNITION:
- Journal Article (under review, 2026): "DigitAI Notes: An AI-Powered Multi-Modal Notes Digitizer Integrating OCR, Speech-to-Text, and Large Language Models for Intelligent Study Material Generation" - Acta Polytechnica Hungarica, Obuda University, Hungary.
- Dataset published on Kaggle (2026): "IAM Handwritten Form Dataset with JSON File"
- 1st Place - DSA Project Competition, Bahria University (2023)
- 2nd Place - DLD Project Competition, Bahria University (2023): built a binary/4-digit digital calculator using ICs and 7-segment displays
- Hacktoberfest open-source contributor (2023)

SERVICES OFFERED:
- AI Automation (end-to-end pipelines using LLMs, RAG, n8n)
- Voice AI Agents (conversational agents for support/onboarding)
- Full Stack Development (React, Node.js, MongoDB, SQL)
- Workflow Optimization (API integrations, business process automation)

INSTRUCTIONS FOR HOW TO RESPOND:
- Answer ONLY questions related to Faris - his background, skills, projects, experience, education, services, or how to contact him.
- If asked something unrelated to Faris (general knowledge, coding help unrelated to him, other topics), politely redirect: explain you're focused on answering questions about Faris and his work.
- Be conversational, warm, and concise - aim for 2-4 sentences unless more detail is genuinely needed.
- If asked about pricing/rates, explain it depends on project scope and recommend reaching out via the Contact section for an accurate quote.
- Do not invent facts about Faris that aren't listed above. If you don't know something, say so honestly and suggest contacting him directly.
- Speak about Faris in third person (e.g. "Faris has built..." not "I have built...").`;

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  console.log("Function invoked. HTTP method:", event.httpMethod);

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    console.log("Rejected: not a POST request");
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    console.log("Raw event body:", event.body);

    let parsedBody;
    try {
      parsedBody = JSON.parse(event.body);
    } catch (parseErr) {
      console.log("JSON parse failed:", parseErr.message);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid JSON body", details: parseErr.message }),
      };
    }

    const { messages } = parsedBody;
    console.log("Parsed messages count:", messages ? messages.length : "undefined");

    if (!messages || !Array.isArray(messages)) {
      console.log("Rejected: messages missing or not an array");
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "messages array is required" }),
      };
    }

    const apiKey = process.env.GROQ_API_KEY;
    console.log("API key present:", !!apiKey, "Length:", apiKey ? apiKey.length : 0);

    if (!apiKey) {
      console.log("Rejected: GROQ_API_KEY not found in environment");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Server is missing GROQ_API_KEY configuration" }),
      };
    }

    console.log("Calling Groq API...");

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.6,
        max_tokens: 350,
      }),
    });

    console.log("Groq response status:", response.status);

    if (!response.ok) {
      const errText = await response.text();
      console.log("Groq API error body:", errText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "Groq API error", details: errText }),
      };
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    console.log("Success. Reply length:", reply.length);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.log("CAUGHT EXCEPTION:", err.message, err.stack);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error", details: err.message }),
    };
  }
};