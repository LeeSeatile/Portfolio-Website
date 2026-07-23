import React, { useState } from 'react';

import React, { useState } from 'react';

export default function TerminalCLI() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Lee-Anne CLI [Data Alchemy Terminal v1.0.0]', type: 'system' },
    { text: 'Type "help" or click a chip below to run commands.', type: 'system' },
  ]);

  const commands = {
    help: 'Available commands: about, skills, trashure, apex, transcript, clear',
    about: 'Final-year BSc IT student at NWU. Systems Analyst & Developer focused on turning complex operational data into actionable business value.',
    skills: 'Technical Stack: C#, SQL, Python, Java, JavaScript, C++, React, Systems Analysis & Design.',
    trashure: 'Trashure System: Recycling tracking & route optimization platform built with C# and SQL.',
    apex: 'The Apex: Logistics & 3rd-party marketplace architecture designed for streamlined operations.',
    transcript: 'Initiating request... (Navigate to the Education tab for direct PDF transcript download!)',
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = commands[trimmed] || `Command not recognized: "${trimmed}". Type "help" for valid options.`;
    setHistory((prev) => [
      ...prev,
      { text: `> ${cmdStr}`, type: 'user' },
      { text: output, type: 'response' },
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="cli-card glass-card">
      <div className="cli-header">
        <div className="cli-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="cli-title">leeanne@alchemy-terminal:~</span>
      </div>

      <div className="cli-body">
        {history.map((item, idx) => (
          <div key={idx} className={`cli-line ${item.type}`}>
            {item.text}
          </div>
        ))}
      </div>

      <div className="cli-chips">
        {['about', 'skills', 'trashure', 'apex', 'help'].map((cmd) => (
          <button key={cmd} onClick={() => handleCommand(cmd)} className="cli-chip">
            {cmd}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="cli-input-wrapper">
        <span className="cli-prompt">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command here..."
          className="cli-input"
        />
      </form>
    </div>
  );
}