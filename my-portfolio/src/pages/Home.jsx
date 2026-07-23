import React from 'react';
import TerminalCLI from '../components/TerminalCLI';
import RoleCapabilities from '../components/RoleCapabilities';
import profilePic from '../assets/profile.jpg';

export default function Home({ setActiveTab }) {
  return (
    <section className="section home-page">
      {/* Hero Header */}
      <div className="hero-banner">
        <div className="alchemy-avatar-container">
          <div className="avatar-ring"></div>
          <div className="avatar-frame">
            <img src={profilePic} alt="Lee-Anne Ramokotjo" className="avatar-img" />
          </div>
          <span className="avatar-status-tag">✦ Open to Tech Roles</span>
        </div>

        <span className="hero-badge">Software Engineer • Data Scientist • Systems & BI Analyst</span>
        <h1 className="hero-title">
          Architecting Intelligent Systems & Transforming Data into Value.
        </h1>
        <p className="hero-subtitle">
          Final-year Information Technology student specializing in software engineering, business systems analysis, data science, and BI analytics. Bridging technical complexity and corporate business strategy.
        </p>

        <div className="hero-actions">
          <button className="primary-btn hero-cta" onClick={() => setActiveTab('projects')}>
            Explore Interactive Projects 🚀
          </button>
          <button className="secondary-btn hero-cta" onClick={() => setActiveTab('education')}>
            View Academic Credentials 🎓
          </button>
        </div>
      </div>

      {/* NEW: Role Capabilities & Career Pathways Component */}
      <RoleCapabilities />

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
          <p>Advanced competency in software logic, query optimization, and data analytics.</p>
        </div>
      </div>
    </section>
  );
}