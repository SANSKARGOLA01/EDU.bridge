import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatbotPage.css';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am the EduBridge AI Assistant. Ask me anything about education, programming, careers, or aptitude. How can I help you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/chatbot', { query: input });
      const botMessage = {
        id: Date.now() + 1,
        text: response.data.response,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([
      { id: 1, text: 'Hello! I am the EduBridge AI Assistant. Ask me anything about education, programming, careers, or aptitude. How can I help you today?', sender: 'bot' }
    ]);
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2>EduBridge AI Assistant</h2>
          <p>Your personal learning companion</p>
          <button className="clear-btn" onClick={clearHistory}>Clear History</button>
        </div>

        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
              <div className={`message ${msg.sender}`}>
                {msg.sender === 'bot' && <span className="bot-icon">🤖</span>}
                <div className="message-text">{msg.text}</div>
                {msg.sender === 'user' && <span className="user-icon">👤</span>}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message-wrapper bot">
              <div className="message bot loading">
                <span className="bot-icon">🤖</span>
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="input-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about Java, OOP, careers, aptitude tests..."
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()}>
            {loading ? '...' : 'Send'}
          </button>
        </form>

        <div className="suggested-questions">
          <p>Popular questions:</p>
          <div className="suggestions">
            <button onClick={() => setInput('What is Java?')}>What is Java?</button>
            <button onClick={() => setInput('Explain OOP concepts')}>Explain OOP</button>
            <button onClick={() => setInput('Career guidance for engineering')}>Engineering career</button>
            <button onClick={() => setInput('How to prepare for aptitude tests')}>Aptitude prep</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
