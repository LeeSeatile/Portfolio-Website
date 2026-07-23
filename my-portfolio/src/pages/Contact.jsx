import React from 'react';

export default function Contact() {
  const contactLinks = [
    {
      title: 'Email Me',
      value: 'seatilejm@gmail.com',
      url: 'mailto:seatilejm@gmail.com',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0284c7">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    },
    {
      title: 'LinkedIn',
      value: 'View Profile',
      url: 'https://www.linkedin.com/in/lee-anne-seatile-ramokotjo-84161526b',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#0077b5">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      title: 'GitHub',
      value: 'github.com/LeeSeatile',
      url: 'https://github.com/LeeSeatile',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#24292e">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" style={{ padding: '4rem 1rem', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header & Open-to-Work Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: '#e6f4ea', 
            color: '#137333', 
            padding: '6px 16px', 
            borderRadius: '20px', 
            fontSize: '0.875rem', 
            fontWeight: '600',
            marginBottom: '1rem',
            border: '1px solid #ceead6'
          }}
        >
          <span style={{ height: '8px', width: '8px', backgroundColor: '#34a853', borderRadius: '50%', display: 'inline-block' }}></span>
          Ready For Next Commit
        </span>

        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937' }}>
          Let's Build Something Impactful
        </h2>
        
       <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '1rem', color: '#4b5563', lineHeight: '1.6' }}>
        Currently seeking graduate intake programs and entry-level roles across <strong>Software Engineering</strong>, <strong>Business & BI Analysis</strong>, and <strong>Data Science</strong>. 
        Whether you need clean code, data-driven insights, or someone who seamlessly bridges system architecture with business logic, my inbox is always compiled and ready!
       </p>
      </div>

      {/* Grid Layout for Cards */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '1.5rem', 
          justifyContent: 'center' 
        }}
      >
        {contactLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1.5rem',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              textDecoration: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
            }}
          >
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', margin: '0 0 0.5rem 0', textDecoration: 'none' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: 0, textDecoration: 'none' }}>
              {item.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}