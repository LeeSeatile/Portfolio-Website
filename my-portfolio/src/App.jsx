import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanvasBackground from './components/CanvasBackground';

// Pages
import Education from './pages/Education';

export default function App() {
  const [activeTab, setActiveTab] = useState('education');

  const renderPage = () => {
    switch (activeTab) {
      case 'education':
        return <Education />;
      default:
        return <Education />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="page-view-container">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}