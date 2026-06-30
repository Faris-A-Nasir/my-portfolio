import { useState } from "react";
import { aiResponses } from "../../data/portfolio";
import "./AIPlayground.css";

export default function AIPlayground() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: aiResponses.default },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes("project") || q.includes("built") || q.includes("work"))
      return aiResponses.answers.projects;
    if (q.includes("skill") || q.includes("tech") || q.includes("know") || q.includes("language"))
      return aiResponses.answers.skills;
    if (q.includes("service") || q.includes("offer") || q.includes("help"))
      return aiResponses.answers.services;
    if (q.includes("experience") || q.includes("job") || q.includes("work") || q.includes("intern"))
      return aiResponses.answers.experience;
    if (q.includes("contact") || q.includes("hire") || q.includes("email"))
      return "You can reach Faris at farisahmadnasir7@gmail.com or scroll down to the Contact section to send a message directly!";
    if (q.includes("education") || q.includes("university") || q.includes("degree") || q.includes("study"))
      return "Faris is completing his BS in Computer Science at Bahria University Islamabad (2022–2026). Relevant courses include Generative AI, AI, Cloud Computing, Data Structures & Algorithms, and Web Programming.";
    return "Great question! I can tell you about Faris's projects, skills, services, or experience. Try asking something like 'What projects has he built?' or 'What services does he offer?'";
  };

  const sendMessage = (text) => {
    const query = text || input.trim();
    if (!query) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(query);
      setMessages((prev) => [...prev, { role: "assistant", text: response }]);
      setTyping(false);
    }, 900);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="ai-section" id="ai">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-label">// ai playground</span>
          <h2>Ask My AI</h2>
          <p>Have questions about my work? Ask the AI assistant powered by my portfolio data.</p>
        </div>

        <div className="ai-layout reveal">
          {/* Suggestion chips */}
          <div className="ai-suggestions">
            {aiResponses.questions.map((q) => (
              <button
                key={q.key}
                className="ai-chip"
                onClick={() => sendMessage(q.q)}
              >
                {q.q}
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="ai-chat glass-card">
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-avatar">FA</div>
              <div>
                <div className="ai-name">Faris's AI Assistant</div>
                <div className="ai-status">
                  <span className="status-dot" /> Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="ai-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`ai-message ai-message--${msg.role}`}>
                  <div className="ai-bubble">{msg.text}</div>
                </div>
              ))}
              {typing && (
                <div className="ai-message ai-message--assistant">
                  <div className="ai-bubble ai-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="ai-input-row">
              <input
                type="text"
                className="ai-input"
                placeholder="Ask something about Faris..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
              />
              <button
                className="ai-send btn-primary"
                onClick={() => sendMessage()}
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}