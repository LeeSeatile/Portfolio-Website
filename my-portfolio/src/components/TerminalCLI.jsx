import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Lee-Anne\'s Interactive CLI v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available commands:
  • help      - Show list of available commands
  • about     - Learn about Lee-Anne's background
  • skills    - Display core technical competencies
  • projects  - List featured systems & architectural builds
  • contact   - Get contact links
  • clear     - Clear the terminal terminal output`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          text: 'Lee-Anne Ramokotjo | Final-year BSc IT Student at NWU.\nFocused on Systems Analysis, Data Analysis, and Database Design.'
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: 'Core Stack: C#, Oracle SQL, Python, Java, C++, Systems Analysis & Design (SDLC), 3NF Relational Modeling.'
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: 'Featured Builds:\n 1. The Apex - Logistics & Fashion Marketplace System Architecture (Oracle SQL, Full SDLC)\n 2. The Trashure - Recycling Tracking Information System (C#, SQL, Data Analytics)\n 3. Indiana Essentials - E-Commerce & Product Distribution Build\n 4. Street Kulture Konnect - Community Interactive Web Platform'
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: 'Email: available via contact section below\nLinkedIn & GitHub available in header.'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="capabilities-header">
        <span className="hero-badge">Developer Console</span>
        <h2>Interactive Terminal</h2>
        <p>Prefer a CLI? Type commands below to query my portfolio directly:</p>
      </div>

      <div className="terminal-window">
        <div className="terminal-topbar">
          <div className="terminal-buttons">
            <span className="btn-dot close"></span>
            <span className="btn-dot minimize"></span>
            <span className="btn-dot maximize"></span>
          </div>
          <span className="terminal-title">lee-anne@portfolio:~</span>
        </div>

        <div className="terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`terminal-line ${item.type}`}>
              <pre>{item.text}</pre>
            </div>
          ))}

          <form onSubmit={handleCommand} className="terminal-input-form">
            <span className="terminal-prompt">guest@lee-anne:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              placeholder="type help..."
              autoCapitalize="off"
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}