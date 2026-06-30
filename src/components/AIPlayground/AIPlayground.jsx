import { useState, useRef, useEffect } from "react";
import { botIdentity, suggestedQuestions } from "../../data/chatbot";
import "./AIPlayground.css";

export default function AIPlayground() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: botIdentity.greeting },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(false);
  const messagesEndRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, typing]);

  const sendMessage = async (text) => {
    const query = (text || input).trim();
    if (!query || typing) return;

    const newUserMessage = { role: "user", text: query };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput("");
    setTyping(true);
    setError(false);

    try {
      // Build conversation history in the format the API expects
      const apiMessages = updatedMessages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));

      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch (err) {
      setError(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, I'm having trouble connecting right now. Please try again in a moment, or reach out to Faris directly via the Contact section.",
        },
      ]);
    } finally {
      setTyping(false);
    }
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
          <p>Have questions about my work? Ask the AI assistant — powered by a real LLM trained on my background.</p>
        </div>

        <div className="ai-layout reveal">
          <div className="ai-suggestions">
            {suggestedQuestions.map((q) => (
              <button key={q} className="ai-chip" onClick={() => sendMessage(q)} disabled={typing}>
                {q}
              </button>
            ))}
          </div>

          <div className="ai-chat glass-card">
            <div className="ai-chat-header">
              <div className="ai-avatar">{botIdentity.avatarInitials}</div>
              <div>
                <div className="ai-name">{botIdentity.name}</div>
                <div className="ai-status">
                  <span className="status-dot" /> {error ? "Reconnecting..." : "Online"}
                </div>
              </div>
            </div>

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
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-input-row">
              <input
                type="text"
                className="ai-input"
                placeholder="Ask something about Faris..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={typing}
              />
              <button
                className="ai-send btn-primary"
                onClick={() => sendMessage()}
                disabled={!input.trim() || typing}
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