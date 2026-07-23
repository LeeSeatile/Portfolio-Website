//Acknowledging the use and help of AI in understanding React
import React from 'react';
import { SiReact, SiJavascript, SiHtml5, siCss3 } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content" style={{ textCenter: 'center', padding: '1.5rem 0' }}>
                <p>© {new Date().getFullYear()} Lee-Anne Ramokotjo. All rights reserved.</p>

                {/* React & AI Learning Disclosure Badge */}
                <div className="tech-credit-badge">
                    <span>First React build engineered using</span>
                    <SiReact style={{ color: '#61DAFB', fontSize: '1.2rem' }} title="React" />
                    <SiJavascript style={{ color: '#F7DF1E', fontSize: '1.2rem' }} title="JavaScript" />
                    <SiHtml5 style={{ color: '#E34F26', fontSize: '1.2rem' }} title="HTML5" />
                    <SiCss3 style={{ color: '#1572B6', fontSize: '1.2rem' }} title="CSS3" />
                    <span>with AI collaboration & guidance 🤖</span>
                </div>
            </div>
        </footer>
    );
}