import React from 'react';

export default function Navbar({ activeTab, setActiveTab}) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'education', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className="site-header">
            <div className="nav-container">
                <div className="logo" onClick={() =>setActiveTab('home')} style={{ cursor: 'pointer' }}>
                    <span className="symbol">◇</span> Lee-Anne
                </div>

                <nav>
                    <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                                >
                                {item.label}
                            </button>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}