import React from 'react';
import RoleCapabilities from '../components/RoleCapabilities';
import TerminalCLI from '../components/TerminalCLI';

export default function Skills() {
  const certifications = [
    {
      title: 'CompTIA Security+',
      issuer: 'CompTIA',
      details: 'Core security domains, identity management, cryptography, and network defense.',
      // High-resolution CompTIA red badge icon
      logo: '/comptia.png'
    },
    {
      title: '16-Week Intensive Cybersecurity Program',
      issuer: 'Virtual Training Academy',
      details: 'Hands-on threat analysis, risk management, incident response, and security architecture.',
      // Clean security shield icon
      logo: 'https://img.icons8.com/color/96/shield.png'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      details: 'Data cleaning, SQL querying, R programming, data visualization, and business analytics.',
      // Official Google "G" logo
      logo: '/coursera.png'
    }
  ];

  return (
    <div className="skills-page section">
      {/* Target Roles & Technical Capabilities */}
      <RoleCapabilities />

      {/* Certifications Showcase */}
      <div className="certifications-section" style={{ margin: '3rem 0' }}>
        <div className="capabilities-header">
          <span className="hero-badge">Verified Credentials</span>
          <h2>Professional Certifications & Training</h2>
        </div>
        <div className="home-stats-grid" style={{ marginTop: '1.5rem' }}>
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card stat-card">
              <img 
                src={cert.logo} 
                alt={`${cert.title} logo`} 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  objectFit: 'contain', 
                  marginBottom: '1rem' 
                }} 
              />
              <h4>{cert.title}</h4>
              <p><strong>{cert.issuer}</strong> — {cert.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Terminal CLI */}
      <div className="home-interactive-section" style={{ marginTop: '3rem' }}>
        <div className="section-subheader">
          <h2>Interactive Skills & Tech Stack CLI</h2>
          <p>Query my technical toolset, skills, and background using terminal commands:</p>
        </div>
        <TerminalCLI />
      </div>
    </div>
  );
}