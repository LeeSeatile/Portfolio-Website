import React, { useState } from 'react';

export default function Education() {
  const [activeHolo, setActiveHolo] = useState('nwu');
  const [viewMode, setViewMode] = useState('highlights'); // 'highlights' or 'transcript'

  const educationData = [
    {
      id: 'nwu',
      institution: "North-West University (NWU)",
      logo: "/nwu.jpg",
      accentColor: "#a855f7", // Holographic Purple
      glowColor: "rgba(168, 85, 247, 0.4)",
      degree: "Bachelor of Science in Information Technology",
      status: "Final Year (Expected Completion: 2026)",
      transcriptLink: "/nwu-transcript.pdf",
      summary: "Maintained an overall academic average above 80% throughout my Bachelor of Science in Information Technology studies, with strong distinctions across core technical modules.",
      highlights: [
        "Advanced Systems Analysis & Design (Appointed Marker & Tutor)",
        "Advanced UI Programming (Appointed Marker & Tutor)",
        "Database Systems & Oracle 3NF Relational Architecture",
        "Linear Programming & Operational Optimization (Cj - Zj Method)",
        "Data Structures, Algorithms & OOP (C#, Java, Python)"
      ]
    },
    {
      id: 'cput',
      institution: "Cape Peninsula University of Technology (CPUT)",
      logo: "/cput.jpg",
      accentColor: "#38bdf8", // Holographic Blue
      glowColor: "rgba(56, 189, 248, 0.4)",
      degree: "Higher Certificate in Information & Communication Technology",
      status: "Graduated Summa Cum Laude 2023",
      transcriptLink: "/cput-transcript.pdf",
      summary: "Completed with Summa Cum Laude honors, achieving top-tier distinction results across all foundational programming and IT service modules.",
      highlights: [
        "Information Technology Services Practice 1: 94% (Pass with Distinction)",
        "Information Technology Services Theory 1: 86% (Pass with Distinction)",
        "Quantitative Techniques 1: 82% (Pass with Distinction)",
        "Programming 1: 80% (Pass with Distinction)",
        "Professional Communications 1: 78% (Pass with Distinction)",
        "ICT Fundamentals 1: 77% (Pass with Distinction)",
        "Business Practice 1: 75% (Pass with Distinction)"
      ]
    }
  ];

  return (
    <section className="section education-page" style={{ maxWidth: '950px', margin: '3rem auto', padding: '0 1rem', fontFamily: 'monospace' }}>
      
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span style={{ background: '#121612', color: '#27c93f', padding: '0.3rem 0.9rem', borderRadius: '15px', fontSize: '0.75rem', border: '1px solid #2b4732', display: 'inline-block', marginBottom: '0.8rem' }}>
          SECURE CREDENTIAL PROTOCOL v3.0
        </span>
        <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', color: '#1b3022' }}>Holographic Academic Matrix</h2>
        <p style={{ color: '#4a5568', maxWidth: '600px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
          Click an institutional node to boot up the interactive holographic transcript and module projector.
        </p>
      </div>

      {/* Holographic Nodes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {educationData.map((edu) => {
          const isSelected = activeHolo === edu.id;
          return (
            <div 
              key={edu.id}
              onClick={() => { setActiveHolo(edu.id); setViewMode('highlights'); }}
              style={{ 
                background: isSelected ? '#121612' : '#ffffff', 
                color: isSelected ? '#d1ded3' : '#2d3748',
                borderRadius: '20px', 
                padding: '2.2rem', 
                border: `2px solid ${isSelected ? edu.accentColor : '#d2ded5'}`, 
                boxShadow: isSelected ? `0 0 30px ${edu.glowColor}` : '0 10px 25px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Scanline Effect Overlay when Active */}
              {isSelected && (
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(rgba(18, 22, 18, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
                  backgroundSize: '100% 4px',
                  pointerEvents: 'none',
                  opacity: 0.6
                }}></div>
              )}

              <div style={{ position: 'relative', zIndex: 1 }}>
                
                {/* Logo & Node Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ 
                      width: '45px', 
                      height: '45px', 
                      borderRadius: '10px', 
                      background: '#ffffff', 
                      padding: '4px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: `1px solid ${edu.accentColor}`,
                      overflow: 'hidden'
                    }}>
                      <img src={edu.logo} alt={`${edu.institution} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: isSelected ? edu.accentColor : '#64748b', letterSpacing: '1px' }}>
                      [{edu.id.toUpperCase()}_NODE]
                    </span>
                  </div>

                  <span style={{ 
                    fontSize: '0.75rem', 
                    background: isSelected ? 'rgba(255,255,255,0.1)' : '#f2f7f4', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '10px',
                    color: isSelected ? '#ffffff' : '#2b4732'
                  }}>
                    {isSelected ? '🟢 STREAMING' : '⚡ CLICK TO BOOT'}
                  </span>
                </div>

                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: isSelected ? '#ffffff' : '#1b3022' }}>
                  {edu.institution}
                </h3>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: edu.accentColor, marginBottom: '0.4rem' }}>
                  {edu.degree}
                </div>
                <div style={{ fontSize: '0.8rem', color: isSelected ? '#a8bfae' : '#64748b', marginBottom: '1rem' }}>
                  ✦ {edu.status}
                </div>

                <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: isSelected ? '#c2d6c5' : '#4a5568', margin: '1rem 0' }}>
                  {edu.summary}
                </p>

                {/* Interactive Controls Inside Node */}
                {isSelected ? (
                  <div style={{ marginTop: '1.5rem', borderTop: `1.5px dashed ${edu.accentColor}`, paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setViewMode('highlights'); }}
                        style={{ flex: 1, background: viewMode === 'highlights' ? edu.accentColor : 'transparent', color: '#fff', border: `1px solid ${edu.accentColor}`, padding: '0.4rem', borderRadius: '8px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        {edu.id === 'cput' ? 'Distinction Marks' : 'Key Modules'}
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setViewMode('transcript'); }}
                        style={{ flex: 1, background: viewMode === 'transcript' ? edu.accentColor : 'transparent', color: '#fff', border: `1px solid ${edu.accentColor}`, padding: '0.4rem', borderRadius: '8px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 'bold' }}
                      >
                        Transcript PDF
                      </button>
                    </div>

                    {viewMode === 'highlights' ? (
                      <ul style={{ paddingLeft: '1rem', margin: 0, fontSize: '0.82rem', color: '#d1ded3', lineHeight: '1.7' }}>
                        {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
                      </ul>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                        <p style={{ fontSize: '0.8rem', color: '#a8bfae', marginBottom: '0.8rem' }}>Official Institutional Record Ready for Secure Export.</p>
                        <a 
                          href={edu.transcriptLink} 
                          target="_blank" 
                          rel="noreferrer"
                          style={{ background: '#ffffff', color: '#121612', padding: '0.5rem 1rem', borderRadius: '15px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', display: 'inline-block' }}
                        >
                          📥 Download Official PDF
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.78rem', color: edu.accentColor, fontWeight: '700', marginTop: '1rem' }}>
                    ▶ Initialize Holo-Stream...
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}