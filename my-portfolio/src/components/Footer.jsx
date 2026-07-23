import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Lee-Anne Ramokotjo. All rights reserved.</p>
        
        {/* React & AI Learning Credit Badge */}
        <div className="tech-credit-badge">
          <span>First React build engineered using</span>
          <FaReact style={{ color: '#61DAFB', fontSize: '1.2rem' }} title="React" />
          <FaJs style={{ color: '#F7DF1E', fontSize: '1.2rem' }} title="JavaScript" />
          <FaHtml5 style={{ color: '#E34F26', fontSize: '1.2rem' }} title="HTML5" />
          <FaCss3Alt style={{ color: '#1572B6', fontSize: '1.2rem' }} title="CSS3" />
          <span>with AI collaboration & guidance 🤖</span>
        </div>
      </div>
    </footer>
  );
}