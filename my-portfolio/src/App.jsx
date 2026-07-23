import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';
import Terminal from './components/TerminalCLI';

// Pages
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'education':
        return <Education/>;
      case 'projects':
        return <Projects />;
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
      <Footer />
    </div>
  );
}