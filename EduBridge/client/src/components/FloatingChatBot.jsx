import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingChatBot.css';

const FloatingChatBot = () => {
  const navigate = useNavigate();

  return (
    <button className="floating-chatbot-btn" onClick={() => navigate('/chatbot')} title="Open Chat">
      💬
    </button>
  );
};

export default FloatingChatBot;
