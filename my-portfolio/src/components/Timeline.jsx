import React, { useState } from 'react';

export default function Timeline() {
  const [filter, setFilter] = useState('all');

  const timelineData = [
    {
      id: 1,
      category: 'academic-employment',
      title: 'Appointed Marker — Systems Analysis & Design & Advanced UI',
      organization: 'North-West University',
      period: '2026',
      type: 'Academic Employment',
      description: 'Evaluating undergraduate coursework, providing feedback on system modeling (SDLC, ERDs, UML), and grading advanced user interface programming implementations.',
      skills: ['SDLC Evaluation', 'Systems Analysis', 'UI/UX Grading', 'UML & ERDs']
    },
    {
      id: 2,
      category: 'projects',
      title: 'Lead Architect — The Apex System Specification',
      organization: 'NWU Capstone Architecture',
      period: 'Feb 2026 - Present',
      type: 'Architecture & SDLC',
      description: 'Formulated business requirements, domain logic, and 3NF database models to address market entry barriers for emerging fashion designers.',
      skills: ['Oracle SQL', 'SDLC', 'Database Normalization', 'Business Requirements']
    },
    {
      id: 3,
      category: 'academic-employment',
      title: 'University Student Assistant',
      organization: 'North-West University',
      period: '2025 - 2026',
      type: 'Academic Employment',
      description: 'Facilitated practical lab sessions, assisted peers in debugging C# and database queries, and supported faculty with IT course operations.',
      skills: ['C# Debugging', 'Database Queries', 'Peer Mentorship', 'Lab Support']
    },
    {
      id: 4,
      category: 'training',
      title: 'Cybersecurity Intensive & Security+ Preparation',
      organization: 'Virtual Training Program',
      period: '2026',
      type: 'Professional Training',
      description: 'Completed an intensive 16-week cybersecurity program covering network defense, risk management, identity access management, and threat vectors.',
      skills: ['Network Security', 'CompTIA Security+', 'Threat Analysis', 'Identity Access']
    },
    {
      id: 5,
      category: 'education',
      title: 'Higher Certificate in ICT (Summa Cum Laude)',
      organization: 'Cape Peninsula University of Technology',
      period: 'Completed with Distinction',
      type: 'Academic Excellence',
      description: 'Graduated at the top of the cohort with highest honors, laying the foundation in computer systems, programming, and database principles.',
      skills: ['Information Technology', 'Programming Fundamentals', 'Summa Cum Laude']
    }
  ];

  const filteredData = filter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.category === filter);

  return (
    <section id="experience" className="timeline-section">
      <div className="capabilities-header">
        <span className="hero-badge">Career Journey</span>
        <h2>Experience & Leadership Timeline</h2>
        <p>An interactive overview of my academic employment, architectural milestones, and training history:</p>
      </div>

      <div className="timeline-filter-bar">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Milestones
        </button>
        <button 
          className={`filter-btn ${filter === 'academic-employment' ? 'active' : ''}`}
          onClick={() => setFilter('academic-employment')}
        >
          Academic Employment
        </button>
        <button 
          className={`filter-btn ${filter === 'projects' ? 'active' : ''}`}
          onClick={() => setFilter('projects')}
        >
          Architecture & SDLC
        </button>
        <button 
          className={`filter-btn ${filter === 'training' ? 'active' : ''}`}
          onClick={() => setFilter('training')}
        >
          Certifications & Training
        </button>
      </div>

      <div className="timeline-container">
        {filteredData.map((item, index) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-dot"></span>
              {index !== filteredData.length - 1 && <span className="timeline-line"></span>}
            </div>
            
            <div className="timeline-content-card">
              <div className="timeline-card-header">
                <span className="timeline-type-badge">{item.type}</span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-org">{item.organization}</h4>
              <p className="timeline-desc">{item.description}</p>
              
              <div className="timeline-skills">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="timeline-skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}