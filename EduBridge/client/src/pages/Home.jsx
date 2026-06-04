import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to EduBridge</h1>
        <p>Bridging the gap in education with personalized learning, quality teachers, and career guidance.</p>
        <button onClick={() => window.location.href = '/courses'}>Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Personalized Learning</h2>
          <p>Learn at your own pace with tailored courses.</p>
        </div>
        <div className="feature">
          <h2>Career Guidance</h2>
          <p>Get expert advice on your career path.</p>
        </div>
        <div className="feature">
          <h2>AI Chatbot</h2>
          <p>Ask questions and get instant answers.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;