// ============================================================
// data/chatbot.js — Frontend-only chatbot UI config
// The actual knowledge base and LLM logic now live server-side
// in netlify/functions/chat.js (keeps the API key hidden).
// ============================================================

export const botIdentity = {
  name: "Faris's AI Assistant",
  avatarInitials: "FA",
  greeting:
    "Hey! 👋 I'm Faris's AI assistant, powered by a real LLM. Ask me anything about his projects, skills, experience, or services!",
};

export const suggestedQuestions = [
  "What projects has Faris built?",
  "What technologies does he know?",
  "What services does he offer?",
  "Tell me about his experience.",
];