import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import TerminalCLI from './components/TerminalCLI';
import Timeline from './components/Timeline';
import RoleCapabilities from './components/RoleCapabilities';
import ScrollTop from './components/ScrollTop'; // 1. Import ScrollTop

// Pages
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Timeline />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      <CanvasBackground />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="page-view-container">
        {renderPage()}
      </main>
      <ScrollTop setActiveTab={setActiveTab} /> {/* 2. Active floating scroll-to-top/home button */}
      <Footer />
    </div>
  );
}