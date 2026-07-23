import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="navbar-container">
      <div className="navbar-logo" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '1.1rem' }}>🪶</span>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.15rem', color: '#2b4732' }}>
          Lee-Anne Seatile Ramokotjo
        </span>
      </div>

      <nav className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button className={activeTab === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('home')}>Home</button>
        <button className={activeTab === 'education' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('education')}>Education</button>
        <button className={activeTab === 'skills' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('skills')}>Skills & Certs</button>
        <button className={activeTab === 'experience' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('experience')}>Experience</button>
        <button className={activeTab === 'projects' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('projects')}>Projects</button>
        <button className={activeTab === 'contact' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('contact')}>Contact</button>
        
        {/* Recruiter Quick CV Download Button */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer" 
          style={{ 
            background: '#2b4732', 
            color: '#ffffff', 
            padding: '0.4rem 0.9rem', 
            borderRadius: '20px', 
            fontSize: '0.8rem', 
            fontWeight: '600', 
            textDecoration: 'none', 
            display: 'flex', 
            alignItem: 'center', 
            gap: '5px',
            marginLeft: '0.5rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          📄 Resume
        </a>
      </nav>
    </header>
  );
}