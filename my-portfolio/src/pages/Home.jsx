import React from 'react';
import TerminalCLI from '../components/TerminalCLI';
import profilePic from '../assets/profile.jpg';

export default function Home({ setActiveTab }) {
  return (
    <section className="section home-page">
      {/* Hero Header */}
      <div className="hero-banner">
        {/* Creative Profile Badge */}
        <div className="alchemy-avatar-container">
          <div className="avatar-ring"></div>
          <div className="avatar-frame">
            <img 
              src={profilePic} 
              alt="Lee-Anne Ramokotjo" 
              className="avatar-img"
            />
          </div>
          <span className="avatar-status-tag">✦ Systems Analyst</span>
        </div>

        <span className="hero-badge">Systems Analyst & Full-Stack Developer</span>
        <h1 className="hero-title">
          Alchemizing Raw Operational Data into Strategic Business Value.
        </h1>
        <p className="hero-subtitle">
          Final-year Information Technology student specializing in systems analysis, software engineering, and database architecture. I bridge technical complexity and actionable business intelligence.
        </p>

        {/* CTA Action Group */}
        <div className="hero-actions">
          <button 
            className="primary-btn hero-cta"
            onClick={() => setActiveTab('projects')}
          >
            Explore Interactive Projects 🚀
          </button>
          <button 
            className="secondary-btn hero-cta"
            onClick={() => setActiveTab('education')}
          >
            View Academic Credentials 🎓
          </button>
        </div>
      </div>

      {/* Interactive CLI Section */}
      <div className="home-interactive-section">
        <div className="section-subheader">
          <h2>Interactive Command Line</h2>
          <p>Explore my background, system builds, and tech stack in real time:</p>
        </div>
        <TerminalCLI />
      </div>

      {/* Quick Highlight Cards */}
      <div className="home-stats-grid">
        <div className="glass-card stat-card">
          <span className="stat-number">2+</span>
          <h4>Full-Cycle Systems</h4>
          <p>End-to-end architecture & database design (The Apex & Trashure System).</p>
        </div>
        <div className="glass-card stat-card">
          <span className="stat-number">Summa Cum Laude</span>
          <h4>Academic Excellence</h4>
          <p>Higher Certificate in ICT with top honors; final-year BSc in IT.</p>
        </div>
        <div className="glass-card stat-card">
          <span className="stat-number">C# • SQL • Python</span>
          <h4>Core Tech Stack</h4>
          <p>Advanced competency in software logic, query optimization, and UI dev.</p>
        </div>
      </div>
    </section>
  );
}