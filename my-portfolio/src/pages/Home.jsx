import React, { useState } from 'react';
import TerminalCLI from '../components/TerminalCLI';
import profilePic from '../assets/profile.jpg';

export default function Home({ setActiveTab }) {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      title: "Chapter 1: Spark in Tech & Business",
      icon: "💡",
      accentBg: "#fcf8f2", // Soft warm amber tint
      accentBorder: "#f0dcc8",
      accentBadge: "#b45309",
      text: "My journey into technology began in childhood, guided by my grandfather who introduced me to computers and media writing. Those early experiences planted the seed for a lifelong curiosity about how digital systems process information and solve real-world problems. That fascination quickly evolved into a passion for business systems architecture and data analytics—understanding not just how software works, but how it drives business decisions."
    },
    {
      title: "Chapter 2: Capabilities & Passion",
      icon: "⚙️",
      accentBg: "#f2f7f4", // Soft sage mint tint
      accentBorder: "#d2ded5",
      accentBadge: "#2b4732",
      text: "As a final-year BSc in IT student, I thrive at the intersection of business strategy and technical development. I specialize in full-cycle system architecture, relational database modeling (3NF/Oracle SQL), software engineering (C#, SQL, Python, Java), and data analysis. Whether serving as a university Student Assistant and Appointed Marker or leading capstone architecture projects like The Apex and The Trashure, I love translating complex user needs into scalable technical designs."
    },
    {
      title: "Chapter 3: Entrepreneurship & Hobbies",
      icon: "🌱",
      accentBg: "#faf4f2", // Soft earthy terracotta tint
      accentBorder: "#ebd3cc",
      accentBadge: "#9c4221",
      text: "My problem-solving mindset extends beyond software. During my first year at university, I founded and operated an independent food business, gaining hands-on experience in business operations, customer service, and financial tracking. When I'm not modeling system schemas or analyzing data sets, you'll find me cracking Sudoku puzzles, exploring technical documentation, discovering local spots in Potchefstroom, or unwinding with Amapiano and electronic DJ sets."
    }
  ];

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev + 1) % chapters.length);
  };

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const activeData = chapters[currentChapter];

  return (
    <section className="section home-page">
      {/* Hero Header */}
      <div className="hero-banner">
        <div className="alchemy-avatar-container">
          <div className="avatar-ring"></div>
          <div className="avatar-frame">
            <img src={profilePic} alt="Lee-Anne Seatile Ramokotjo" className="avatar-img" />
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
          <button className="secondary-btn hero-cta" onClick={() => setActiveTab('experience')}>
            View Experience Timeline 📈
          </button>
        </div>
      </div>

      {/* Interactive Command Line Section */}
      <div className="home-interactive-section" style={{ margin: '4rem 0', textAlign: 'center' }}>
        <div className="section-subheader" style={{ marginBottom: '1.5rem' }}>
          <span className="hero-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Developer Console</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Interactive Terminal</h2>
          <p style={{ color: '#4a5568', marginTop: '0.4rem' }}>Prefer a CLI? Execute live commands or click buttons below to query my portfolio directly:</p>
        </div>
        <TerminalCLI />
      </div>

      {/* Interactive Book Paging About Section with Pop Colors */}
      <div className="about-section" style={{ margin: '4rem auto', maxWidth: '850px', textAlign: 'center' }}>
        <div className="capabilities-header" style={{ marginBottom: '1.5rem' }}>
          <span className="hero-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>My Story & Drive</span>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>About Me (Interactive Book)</h2>
          <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Page through my background below:</p>
        </div>

        <div 
          className="glass-card" 
          style={{ 
            padding: '3rem 2.5rem', 
            borderRadius: '20px', 
            background: activeData.accentBg, 
            border: `1.5px solid ${activeData.accentBorder}`, 
            minHeight: '280px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            transition: 'background 0.4s ease, border 0.4s ease'
          }}
        >
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>{activeData.icon}</div>
            <h3 style={{ color: activeData.accentBadge, fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              {activeData.title}
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '1.05rem', margin: '0 auto', maxWidth: '700px' }}>
              {activeData.text}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: `1px solid ${activeData.accentBorder}`, paddingTop: '1rem' }}>
            <button 
              onClick={prevChapter}
              style={{ background: '#ffffff', border: `1px solid ${activeData.accentBorder}`, color: activeData.accentBadge, padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem' }}
            >
              ← Previous Page
            </button>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
              Page {currentChapter + 1} of {chapters.length}
            </span>
            <button 
              onClick={nextChapter}
              style={{ background: activeData.accentBadge, border: 'none', color: '#ffffff', padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '0.85rem' }}
            >
              Next Page →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Highlight Cards */}
      <div className="home-stats-grid" style={{ marginTop: '3rem' }}>
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