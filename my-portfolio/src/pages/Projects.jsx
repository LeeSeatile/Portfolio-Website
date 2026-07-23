import React, { useState } from 'react';

// Import project logos from src/assets/
import apexLogo from '../assets/theApex.jpg';
import trashureLogo from '../assets/Trashure.jpg';
import indianaLogo from '../assets/Indiana.jpg';

export default function Projects() {
  const projectData = [
    {
      id: 'the-apex',
      title: 'The Apex',
      subtitle: 'Logistics & Fashion Marketplace System Architecture',
      role: 'Lead Architect',
      period: 'Feb 2026 - Present',
      logo: apexLogo,
      description: 'A full SDLC systems analysis and architectural specification designed to give emerging fashion designers a dedicated third-party logistics and marketplace ecosystem.',
      tags: ['Oracle SQL', 'Systems Analysis', 'SDLC', 'Database Normalization', 'ERD Design'],
      highlights: [
        'Formulated user requirements & business models for emerging fashion designers.',
        'Executed end-to-end relational modeling (3NF, ERDs, table schemas).',
        'Authored and validated complete Oracle SQL DDL/DML scripts.'
      ],
      githubUrl: '#'
    },
    {
      id: 'the-trashure',
      title: 'The Trashure',
      subtitle: 'Recycling Tracking Information System',
      role: 'Full-Stack Developer & Analyst',
      period: 'Feb 2025 - Nov 2025',
      logo: trashureLogo,
      description: 'An information system built to track, incentivize, and manage recycling operations. Handles user contributions, operational reporting, and data metrics visualization.',
      tags: ['C#', 'SQL', 'Data Analytics', '3NF Normalization', 'Systems Analysis'],
      highlights: [
        'Built full-cycle C# desktop app connected to an optimized SQL database.',
        'Applied 3NF relational normalization to eliminate redundancy.',
        'Integrated custom analytics dashboards for eco-impact reporting.'
      ],
      githubUrl: '#'
    },
    {
      id: 'indiana-essentials',
      title: 'Indiana Essentials',
      subtitle: 'Web Platform & E-Commerce Logic',
      role: 'Systems Analyst & Developer',
      period: 'Featured Project',
      logo: indianaLogo,
      description: 'A tailored web solution designed for product distribution, inventory management, and streamlined consumer interactions.',
      tags: ['JavaScript', 'React', 'Database Design', 'UI/UX', 'Systems Analysis'],
      highlights: [
        'Designed intuitive catalog navigation and product data structures.',
        'Structured back-end data flows for order processing and inventory updates.',
        'Ensured mobile responsiveness and high-performance UI rendering.'
      ],
      githubUrl: '#'
    }
  ];

  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTiltStyle((prev) => ({
      ...prev,
      [id]: {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
        transition: 'transform 0.1s ease-out'
      }
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyle((prev) => ({
      ...prev,
      [id]: {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        transition: 'transform 0.4s ease'
      }
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="capabilities-header">
        <span className="hero-badge">Featured System Builds</span>
        <h2>End-to-End Projects & Architecture</h2>
        <p>Explore full SDLC systems built with a focus on data integrity, clean architecture, and practical logic:</p>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            style={tiltStyle[project.id] || {}}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            <div className="project-card-header">
              <div className="project-meta">
                <span className="project-role-badge">{project.role}</span>
                <span className="project-period">{project.period}</span>
              </div>

              <div className="project-title-container">
                <div className="project-logo-badge">
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`} 
                  />
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              <h4>Key Highlights & Contributions:</h4>
              <ul>
                {project.highlights.map((item, idx) => (
                  <li key={idx}><span>▹</span> {item}</li>
                ))}
              </ul>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag-pill">{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Code / Specs
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}