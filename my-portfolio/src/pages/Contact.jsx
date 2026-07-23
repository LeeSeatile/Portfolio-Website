import React from 'react';

export default function Contact() {
  return (
    <section className="section contact-page" style={{ maxWidth: '750px', margin: '3rem auto', textAlign: 'center' }}>
      <div className="capabilities-header">
        <span className="hero-badge">Get In Touch</span>
        <h2>Let's Connect</h2>
        <p>I am currently open to graduate intake programs and technical roles in software engineering, business systems analysis, and data analysis.</p>
      </div>

      <div className="glass-card" style={{ padding: '2.5rem', marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        
        {/* Email */}
        <a href="mailto:seatilejm@gmail.com" style={{ textDecoration: 'none', background: '#f8faf9', padding: '1.5rem', borderRadius: '12px', border: '1px solid #d2ded5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s' }}>
          <span style={{ fontSize: '2rem' }}>📧</span>
          <h4 style={{ color: '#1b3022', margin: 0, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>Email Me</h4>
          <span style={{ color: '#4a5568', fontSize: '0.85rem', wordBreak: 'break-all' }}>seatilejm@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/lee-anne-seatile-ramokotjo-84161526b" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', background: '#f8faf9', padding: '1.5rem', borderRadius: '12px', border: '1px solid #d2ded5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s' }}>
          <span style={{ fontSize: '2rem' }}>💼</span>
          <h4 style={{ color: '#1b3022', margin: 0, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>LinkedIn</h4>
          <span style={{ color: '#4a5568', fontSize: '0.85rem' }}>View Profile</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/LeeSeatile" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', background: '#f8faf9', padding: '1.5rem', borderRadius: '12px', border: '1px solid #d2ded5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.2s' }}>
          <span style={{ fontSize: '2rem' }}>💻</span>
          <h4 style={{ color: '#1b3022', margin: 0, fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>GitHub</h4>
          <span style={{ color: '#4a5568', fontSize: '0.85rem' }}>github.com/LeeSeatile</span>
        </a>

      </div>
    </section>
  );
}