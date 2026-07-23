import React from 'react';

export default function Education() {
  return (
    <section className="section education-page">
      <div className="section-header">
        <h2>Academic Background</h2>
        <p className="subtitle">Qualifications, distinctions, and formal academic transcripts</p>
      </div>

      <div className="education-grid">
        {/* Degree 1: NWU */}
        <div className="education-card glass-card">
          <div className="card-top">
            <div>
              <h3>BSc in Information Technology</h3>
              <span className="institution">North-West University</span>
            </div>
          </div>
          <p className="edu-status">Final Year Student</p>
          <ul className="edu-highlights">
            <li>Core focus on Software Engineering, Systems Analysis & Design, and Advanced UI Programming.</li>
            <li>Applied business intelligence, data modeling, and relational database management systems.</li>
          </ul>
        </div>

        {/* Degree 2: CPUT */}
        <div className="education-card glass-card">
          <div className="card-top">
            <div>
              <h3>Higher Certificate in ICT</h3>
              <span className="institution">Cape Peninsula University of Technology</span>
            </div>
          </div>
          <span className="honor-badge">Summa Cum Laude 🏆</span>
          <ul className="edu-highlights">
            <li>Completed with highest academic honors (Summa Cum Laude).</li>
            <li>Foundational mastery in computing fundamentals, software logic, and database architecture.</li>
          </ul>
        </div>
      </div>

      {/* Transcript Download CTA */}
      <div className="transcript-box glass-card">
        <div>
          <h3>Official Academic Transcript</h3>
          <p>Download my official academic record verifying coursework and distinctions.</p>
        </div>
        <a 
          href="/LeeAnne_Academic_Transcript.pdf" 
          download 
          className="primary-btn download-btn"
        >
          Download Transcript 📄
        </a>
      </div>
    </section>
  );
}