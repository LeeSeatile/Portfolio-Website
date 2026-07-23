import React, { useState } from 'react';

// Embedded Pure SVG Icons - 100% reliable, zero network/package errors
const Icons = {
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="45" height="45">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Csharp: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <path fill="#512BD4" d="M117.5 33.5l-48-27.7c-3.4-2-7.6-2-11 0l-48 27.7c-3.4 2-5.5 5.6-5.5 9.5v55.4c0 3.9 2.1 7.5 5.5 9.5l48 27.7c1.7 1 3.6 1.5 5.5 1.5s3.8-.5 5.5-1.5l48-27.7c3.4-2 5.5-5.6 5.5-9.5V43c0-3.9-2.1-7.5-5.5-9.5z"/>
      <path fill="#FFF" d="M47.2 73.1c0 6.6 4.7 11.2 11.5 11.2 5.2 0 9.2-2.8 10.9-6.9h8.3c-2 8.3-9.9 13.7-19.2 13.7-11.8 0-20.2-8.3-20.2-20.1s8.4-20.1 20.2-20.1c9.3 0 17.2 5.4 19.2 13.7h-8.3c-1.7-4.1-5.7-6.9-10.9-6.9-6.8 0-11.5 4.6-11.5 11.2zM79.5 61.2h4.5v-6.5h3.9v6.5h6.5v3.9h-6.5v6.5h-3.9v-6.5h-4.5v-3.9zm17.5 0h4.5v-6.5h3.9v6.5h6.5v3.9h-6.5v6.5h-3.9v-6.5h-4.5v-3.9z"/>
    </svg>
  ),
  Cpp: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <path fill="#00599C" d="M117.5 33.5l-48-27.7c-3.4-2-7.6-2-11 0l-48 27.7c-3.4 2-5.5 5.6-5.5 9.5v55.4c0 3.9 2.1 7.5 5.5 9.5l48 27.7c1.7 1 3.6 1.5 5.5 1.5s3.8-.5 5.5-1.5l48-27.7c3.4-2 5.5-5.6 5.5-9.5V43c0-3.9-2.1-7.5-5.5-9.5z"/>
      <path fill="#FFF" d="M43.2 71.1c0 6.6 4.7 11.2 11.5 11.2 5.2 0 9.2-2.8 10.9-6.9h8.3c-2 8.3-9.9 13.7-19.2 13.7-11.8 0-20.2-8.3-20.2-20.1s8.4-20.1 20.2-20.1c9.3 0 17.2 5.4 19.2 13.7h-8.3c-1.7-4.1-5.7-6.9-10.9-6.9-6.8 0-11.5 4.6-11.5 11.2zM73.5 69.2h3.5v-4.5h3.5v4.5h4.5v3.5h-4.5v4.5h-3.5v-4.5h-3.5v-3.5zm16.5 0h3.5v-4.5h3.5v4.5h4.5v3.5h-4.5v4.5h-3.5v-4.5h-3.5v-3.5z"/>
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <path fill="#EA2D2E" d="M47.8 88.2s-4.6 1.3 3.3 1.8c9.6.6 15.3.5 26.5-1.1 0 0 3.3.4 5.8 1.8 0 0-3.2 2.2-14 2.8-15.5.9-28.7-.3-21.6-5.3zM42.3 75.8s-5.2 1.8 2.2 2.2c10.8.6 22.3.4 33.6-.8 0 0 2.5.5 4.8 1.7 0 0-3.9 2-15 2.5-17.1.8-33.1-.3-25.6-5.6z"/>
      <path fill="#5382A1" d="M60.1 24.2s6.3 6.4-1.8 15.8c-7.2 8.3-2.3 13.2 0 18.2-6.5-5.9-7.7-11.4-3.1-16.7 6.4-7.4 4.9-10.9 4.9-17.3zM70.5 35.8s9.3 9.4-4 22.3c-5.6 5.4-3 9.3 0 14.5-9.3-5.2-11.3-12.8-2.6-19.3 8.3-6.1 6.6-11.2 6.6-17.5z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <path fill="#3776AB" d="M63.2 14c-15.2 0-14.3 6.6-14.3 6.6l.1 6.8h14.6v2.1H29.1s-6.6-.8-6.6 14.8c0 15.5 5.8 14.8 5.8 14.8h3.5v-5c0-7.2 6.2-7.7 6.2-7.7h13.9c7.2 0 7.2-6.8 7.2-6.8V23.3S60 14 63.2 14z"/>
      <path fill="#FFD43B" d="M64.8 114c15.2 0 14.3-6.6 14.3-6.6l-.1-6.8H64.4v-2.1h34.5s6.6.8 6.6-14.8c0-15.5-5.8-14.8-5.8-14.8h-3.5v5c0 7.2-6.2 7.7-6.2 7.7H76.1c-7.2 0-7.2 6.8-7.2 6.8v13.3s-.9 9.3-4.1 9.3z"/>
      <circle cx="41.5" cy="22.5" r="2" fill="#FFF"/>
      <circle cx="86.5" cy="105.5" r="2" fill="#3776AB"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect width="128" height="128" fill="#F7DF1E" rx="16"/>
      <path d="M67.3 101c3 1.8 6.8 3.2 11 3.2 5.8 0 9.1-2.8 9.1-7 0-4.3-3.2-6.3-8.8-8.7l-3.1-1.3c-8.8-3.7-14.5-8.4-14.5-18.4 0-10.3 8.3-17.7 21.2-17.7 5.7 0 10.4 1.3 13.9 3.3l-3.7 8.5c-2.8-1.5-6.2-2.6-9.9-2.6-5.3 0-8.2 2.6-8.2 6.1 0 3.9 3 5.6 8.5 7.9l3.1 1.3c9.9 4.2 15 8.9 15 19.3 0 11.5-8.8 18.6-22.3 18.6-6.8 0-12.2-1.6-15.6-3.4l4.3-9.1zm-36.4.7c2.5 1.5 5.8 2.6 9.1 2.6 4.7 0 7.7-2.1 7.7-7.4V51.8h12.8v45.2c0 12-7.1 17.5-19.3 17.5-5.3 0-10.2-1.3-13.3-3l3-9.8z"/>
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <ellipse cx="64" cy="32" rx="44" ry="18" fill="#4169E1"/>
      <path fill="#3151B5" d="M20 32v32c0 9.9 19.7 18 44 18s44-8.1 44-18V32"/>
      <path fill="#213884" d="M20 64v32c0 9.9 19.7 18 44 18s44-8.1 44-18V64"/>
      <ellipse cx="64" cy="32" rx="32" ry="12" fill="#6B8EFE"/>
    </svg>
  ),
  Tableau: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <path fill="#E97627" d="M61 14h6v18h-6zm0 82h6v18h-6zM14 61h18v6H14zm82 0h18v6H96z"/>
      <path fill="#5C7A99" d="M38 38h52v52H38z" opacity="0.15"/>
      <path fill="#E97627" d="M54 34h20v6H54zm-20 20h6v20h-6zm40 0h6v20h-6zm-20 20h20v6H54z"/>
      <circle cx="64" cy="64" r="8" fill="#2A4B7C"/>
    </svg>
  ),
  PowerBI: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect x="24" y="60" width="20" height="48" rx="4" fill="#F2C811"/>
      <rect x="54" y="40" width="20" height="68" rx="4" fill="#F2C811"/>
      <rect x="84" y="20" width="20" height="88" rx="4" fill="#F2C811"/>
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect width="128" height="128" rx="16" fill="#217346"/>
      <path fill="#FFF" d="M38 38l22 26-22 26h16l14-17 14 17h16L76 64l22-26H82L68 53 54 38H38z"/>
    </svg>
  ),
  SqlServer: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect width="128" height="128" rx="16" fill="#CC292B"/>
      <ellipse cx="64" cy="36" rx="36" ry="14" fill="#FFF"/>
      <path fill="#FFF" d="M28 36v28c0 7.7 16.1 14 36 14s36-6.3 36-14V36H28zm0 28v28c0 7.7 16.1 14 36 14s36-6.3 36-14V64H28z" opacity="0.8"/>
    </svg>
  ),
  Oracle: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect width="128" height="128" rx="16" fill="#EA1C24"/>
      <path fill="#FFF" d="M42 42h44c12.2 0 22 9.8 22 22s-9.8 22-22 22H42c-12.2 0-22-9.8-22-22s9.8-22 22-22zm0 12c-5.5 0-10 4.5-10 10s4.5 10 10 10h44c5.5 0 10-4.5 10-10s-4.5-10-10-10H42z"/>
    </svg>
  ),
  Statistics: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <circle cx="64" cy="64" r="56" fill="#276DC3"/>
      <path fill="#FFF" d="M72 40H52v48h14V70h6c10 0 16-5 16-15s-6-15-16-15zm-6 18h-8V50h8c4 0 7 2 7 4s-3 4-7 4zm16 30L70 70h16l14 18H82z"/>
    </svg>
  ),
  Systems: (
    <svg viewBox="0 0 128 128" width="42" height="42">
      <rect width="128" height="128" rx="16" fill="#0052CC"/>
      <path fill="#FFF" d="M34 40h60v12H34zm0 20h40v12H34zm0 20h50v12H34z"/>
    </svg>
  )
};

export default function RoleCapabilities() {
  const roles = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      badge: 'Full-Stack & Logic',
      icon: '💻',
      summary: 'Building modular software architectures, object-oriented backends, and responsive React UI applications.',
      skills: [
        { name: 'React', icon: Icons.React, detail: 'Interactive UI Components, State & Hooks', metric: 'Front-End' },
        { name: 'C#', icon: Icons.Csharp, detail: 'Desktop UI, System Logic & Algorithmic Solutions', metric: 'Full SDLC' },
        { name: 'C++', icon: Icons.Cpp, detail: 'Memory Management & OOP Algorithmic Foundations', metric: 'Algorithmic' },
        { name: 'Java', icon: Icons.Java, detail: 'Enterprise Logic Architecture & OOP Principles', metric: 'Core OOP' },
        { name: 'Python', icon: Icons.Python, detail: 'Automation, Data Processing & Custom Scripting', metric: 'Backend' },
        { name: 'JavaScript', icon: Icons.JavaScript, detail: 'Dynamic Web DOM Manipulation & Front-End Logic', metric: 'Web Stack' },
        { name: 'SQL', icon: Icons.SQL, detail: 'Relational Schema Design & Query Optimization', metric: 'Databases' }
      ]
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      badge: 'Predictive & Analytics',
      icon: '🧪',
      summary: 'Extracting patterns from complex datasets using statistical models, query optimization, and Python data pipelines.',
      skills: [
        { name: 'Python', icon: Icons.Python, detail: 'Pandas, Data Cleaning, Wrangling & Analytics', metric: 'Advanced' },
        { name: 'Tableau', icon: Icons.Tableau, detail: 'Visual Data Analytics & Interactive Dashboards', metric: 'Data Viz' },
        { name: 'SQL', icon: Icons.SQL, detail: 'Complex Joins, Aggregations & Query Optimization', metric: 'Optimized' },
        { name: 'Statistics (R)', icon: Icons.Statistics, detail: 'Simplex Linear Programming & Quantitative Analysis', metric: 'Decision Sci' },
        { name: 'Oracle SQL', icon: Icons.Oracle, detail: 'Relational Integrity, ETL & Enterprise Queries', metric: 'Relational' }
      ]
    },
    {
      id: 'bi-analyst',
      title: 'BI Analyst',
      badge: 'Strategic Intelligence',
      icon: '📊',
      summary: 'Converting multi-source operational metrics into intuitive executive KPI reports and relational database insights.',
      skills: [
        { name: 'Power BI', icon: Icons.PowerBI, detail: 'Interactive KPI Dashboards & Executive Reports', metric: 'Executive BI' },
        { name: 'Tableau', icon: Icons.Tableau, detail: 'Data Storytelling & Interactive Visual Analytics', metric: 'Visual BI' },
        { name: 'Oracle SQL', icon: Icons.Oracle, detail: 'Multi-Table Extraction & Data Modeling', metric: 'Enterprise' },
        { name: 'Excel Analytics', icon: Icons.Excel, detail: 'Financial Modeling, Pivot Tables & System Metrics', metric: 'Operational' },
        { name: 'SQL Server', icon: Icons.SqlServer, detail: 'Transactional Data Analysis & Stored Procedures', metric: 'Reporting' }
      ]
    },
    {
      id: 'business-systems-analyst',
      title: 'Business Systems Analyst',
      badge: 'Process Architecture',
      icon: '⚙️',
      summary: 'Bridging engineering teams and corporate requirements through 3NF schema normalization and SDLC blueprints.',
      skills: [
        { name: 'React', icon: Icons.React, detail: 'Component-Based UI Architecture & System Specs', metric: 'UI Systems' },
        { name: 'Oracle SQL', icon: Icons.Oracle, detail: 'Data Modeling, DDL/DML & Schema Architecture', metric: 'Oracle System' },
        { name: '3NF Normalization', icon: Icons.SQL, detail: 'Eliminating Redundancy & Enforcing Constraints', metric: 'High Rigor' },
        { name: 'ERD Mapping', icon: Icons.Systems, detail: 'Entity Relationship Diagrams & Database Specs', metric: 'System Blueprint' },
        { name: 'Systems Analysis', icon: Icons.Systems, detail: 'Full SDLC Requirements Elicitation & Workflows', metric: 'Lead Architect' }
      ]
    }
  ];

  const [activeRoleId, setActiveRoleId] = useState('software-engineer');
  const activeRole = roles.find(r => r.id === activeRoleId);

  return (
    <div className="glass-card capabilities-hub">
      <div className="capabilities-header">
        <span className="hero-badge">Target Roles & Capabilities</span>
        <h2>Versatile Capabilities Across Tech & Business</h2>
        <p>Explore target positions and corresponding technical mastery:</p>
      </div>

      {/* Role Selector Tabs */}
      <div className="role-tabs-grid">
        {roles.map((role) => (
          <button
            key={role.id}
            className={`role-tab-btn ${activeRoleId === role.id ? 'active' : ''}`}
            onClick={() => setActiveRoleId(role.id)}
          >
            <span className="role-tab-icon">{role.icon}</span>
            <span className="role-tab-title">{role.title}</span>
          </button>
        ))}
      </div>

      {/* Active Role Detail Container */}
      <div className="role-detail-card">
        <div className="role-detail-header">
          <div>
            <span className="role-badge">{activeRole.badge}</span>
            <h3>{activeRole.title}</h3>
            <p className="role-summary-text">{activeRole.summary}</p>
          </div>
        </div>

        {/* Intuitive Instruction Banner */}
        <div className="flip-instruction-banner">
          <span className="flip-icon">🔄</span>
          <span>Hover or tap any tech card below to flip and view practical usage</span>
        </div>

        {/* Spacious 3D Flip Grid */}
        <div className="flip-skills-grid">
          {activeRole.skills.map((skill, idx) => (
            <div key={idx} className="skill-flip-card">
              <div className="skill-flip-inner">
                {/* Front Side */}
                <div className="skill-flip-front">
                  <div className="flip-hint-badge">↻</div>
                  <div className="react-icon-frame">
                    {skill.icon}
                  </div>
                  <span className="skill-brand-name">{skill.name}</span>
                </div>

                {/* Back Side */}
                <div className="skill-flip-back">
                  <span className="skill-metric-badge">{skill.metric}</span>
                  <p className="skill-detail-text">{skill.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}