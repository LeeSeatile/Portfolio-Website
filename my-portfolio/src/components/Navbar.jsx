import React from 'react';
import cvFile from '../assets/CV.pdf';

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
        
        <a 
          href={cvFile} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-btn resume-btn"
          style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          📄 Resume
        </a>
      </nav>
    </header>
  );
}