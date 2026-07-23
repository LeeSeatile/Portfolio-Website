import React, { useState, useRef, useEffect } from 'react';

export default function TerminalCLI() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Lee-Anne\'s Portfolio CLI v1.0.0' },
    { type: 'output', text: 'Type "help" to see available commands or click quick suggestions below.' }
  ]);
  const terminalBodyRef = useRef(null);

  const scrollToTerminalBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToTerminalBottom();
  }, [history]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = '';

    switch (cleanCmd) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        response = 'Lee-Anne Seatile Ramokotjo — Final-year BSc IT student at NWU, passionate about bridging technical architecture and business strategy.';
        break;
      case 'skills':
        response = 'Core Stack: React, C#, SQL, Python, Java, Oracle SQL, 3NF Normalization, Data/BI Analysis, CompTIA Security+.';
        break;
      case 'projects':
        response = 'PROJECTS BREAKDOWN:\n' +
                   '1. "The Apex" (Logistics & Marketplace):\n' +
                   '   - Problem: Complex supply chain coordination and fragmented vendor data.\n' +
                   '   - Solution: Designed system architecture and rigorous 3NF relational models.\n' +
                   '   - Result: Seamless logistics tracking and robust third-party integration.\n\n' +
                   '2. "The Trashure" (Recycling Tracking Info System):\n' +
                   '   - Problem: Inefficient tracking of recyclable waste collection cycles.\n' +
                   '   - Solution: Implemented full-cycle information system using C# and SQL.\n' +
                   '   - Result: Streamlined data collection and transparent processing visibility.';
        break;
      case 'contact':
        response = 'Email: seatilejm@gmail.com | LinkedIn: linkedin.com/in/lee-anne-seatile-ramokotjo-84161526b | GitHub: github.com/LeeSeatile';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: `guest@lee-anne:~$ ${cmd}` },
      { type: 'output', text: response }
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="terminal-wrapper" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <div className="terminal-box" style={{ background: '#121612', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid #2b4732' }}>
        <div className="terminal-topbar" style={{ background: '#1a221a', padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #2b4732' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
          </div>
          <span style={{ color: '#8fa893', fontSize: '0.8rem', fontFamily: 'monospace' }}>lee-anne@portfolio:~</span>
        </div>

        <div ref={terminalBodyRef} className="terminal-body" style={{ padding: '1.2rem', height: '260px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.85rem', color: '#d1ded3', whiteSpace: 'pre-line' }}>
          {history.map((item, index) => (
            <div key={index} style={{ marginBottom: '0.8rem', lineHeight: '1.4' }}>
              {item.type === 'input' ? (
                <span style={{ color: '#27c93f' }}>{item.text}</span>
              ) : (
                <span style={{ color: '#a3c1a6' }}>{item.text}</span>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} style={{ display: 'flex', borderTop: '1px solid #2b4732', background: '#161d16' }}>
          <span style={{ padding: '0.8rem 0 0.8rem 1rem', color: '#27c93f', fontFamily: 'monospace', fontSize: '0.85rem' }}>guest@lee-anne:~$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="try typing 'projects', 'skills', 'contact'..."
            style={{ flex: 1, background: 'transparent', border: 'none', padding: '0.8rem', color: '#ffffff', fontFamily: 'monospace', fontSize: '0.85rem', outline: 'none' }}
          />
        </form>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['about', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
          <button 
            key={cmd} 
            onClick={() => handleCommand(cmd)}
            style={{ background: '#f0f4f1', border: '1px solid #d2ded5', color: '#2b4732', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: '600' }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}