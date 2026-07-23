import React from 'react';

export default function ExperienceTimeline() {
  const timelineItems = [
    {
      id: 1,
      category: "ACADEMIC EMPLOYMENT",
      period: "2026",
      role: "University Student Assistant — Systems Analysis & Design",
      organization: "North-West University",
      icon: "📐",
      description: "Evaluating undergraduate coursework, assessing system modeling (SDLC, ERDs, UML), and providing structured feedback on systems architecture.",
      tags: ["SDLC Evaluation", "Systems Analysis", "UML & ERDs", "Academic Assessment"],
      accentColor: "#10b981" // Emerald
    },
    {
      id: 2,
      category: "ACADEMIC EMPLOYMENT",
      period: "2025 — 2026",
      role: "University Student Assistant — Advanced UI Programming",
      organization: "North-West University",
      icon: "💻",
      description: "Facilitated practical lab sessions, assisted peers in debugging C# and database queries, and graded advanced user interface programming implementations.",
      tags: ["UI/UX Grading", "C# Debugging", "Database Queries", "Peer Mentorship", "Lab Support"],
      accentColor: "#3b82f6" // Blue
    },
    {
      id: 3,
      category: "PROFESSIONAL EXPERIENCE",
      period: "2026",
      role: "Lead Peer Buddy & Academic Consultant",
      organization: "Gradesmatch Academy (BridgeOne)",
      icon: "🎓",
      description: "Providing academic guidance, tutoring, crisis intervention support, student mentorship, and strategic onboarding consulting to help students navigate higher education pathways.",
      tags: ["Academic Consulting", "Peer Mentorship", "Student Onboarding", "Crisis Support"],
      accentColor: "#8b5cf6" // Purple
    }
  ];

  return (
    <section className="timeline-section" style={{ maxWidth: '900px', margin: '4rem auto', padding: '0 1.5rem', fontFamily: 'sans-serif' }}>
      
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ 
          background: 'rgba(39, 201, 63, 0.1)', 
          color: '#27c93f', 
          fontSize: '0.8rem', 
          fontWeight: '700', 
          letterSpacing: '1px', 
          textTransform: 'uppercase', 
          padding: '0.4rem 1rem', 
          borderRadius: '20px',
          border: '1px solid rgba(39, 201, 63, 0.3)'
        }}>
          Career Journey
        </span>
        <h2 style={{ fontSize: '2.2rem', color: '#0f172a', margin: '0.8rem 0 0.5rem 0' }}>
          Experience & Academic Roles
        </h2>
      </div>

      {/* TIMELINE CONTAINER */}
      <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
        
        {/* VERTICAL GRADIENT LINE */}
        <div style={{
          position: 'absolute',
          left: '12px',
          top: '15px',
          bottom: '15px',
          width: '3px',
          background: 'linear-gradient(180deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
          borderRadius: '2px'
        }} />

        {/* TIMELINE CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {timelineItems.map((item) => (
            <div 
              key={item.id} 
              style={{ position: 'relative' }}
            >
              {/* NODE ICON / BULLET */}
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: '0',
                transform: 'translateX(-50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#ffffff',
                border: `2px solid ${item.accentColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                boxShadow: `0 0 12px ${item.accentColor}40`,
                zIndex: 2
              }}>
                {item.icon}
              </div>

              {/* CARD CONTENT */}
              <div style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '1.8rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 14px 30px ${item.accentColor}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.03)';
              }}
              >
                {/* CARD HEADER */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    letterSpacing: '0.5px',
                    color: item.accentColor,
                    background: `${item.accentColor}15`,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '8px'
                  }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#64748b' }}>
                    {item.period}
                  </span>
                </div>

                {/* TITLE & COMPANY */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', margin: '0 0 0.3rem 0' }}>
                  {item.role}
                </h3>
                <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: item.accentColor, margin: '0 0 1rem 0' }}>
                  {item.organization}
                </h4>

                {/* DESCRIPTION */}
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6', margin: '0 0 1.2rem 0' }}>
                  {item.description}
                </p>

                {/* TAGS */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      background: '#f8fafc',
                      color: '#334155',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}