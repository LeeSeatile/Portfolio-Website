import React, { useState, useEffect } from 'react';

export default function ScrollTop({ setActiveTab }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button 
        onClick={scrollToTop}
        style={{ background: '#385e42', color: '#ffffff', border: 'none', width: '42px', height: '42px', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
        title="Scroll to Top"
      >
        ↑
      </button>
      <button 
        onClick={() => { scrollToTop(); setActiveTab('home'); }}
        style={{ background: '#1b3022', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '0.75rem', fontWeight: '600' }}
        title="Go to Home"
      >
        Home
      </button>
    </div>
  );
}