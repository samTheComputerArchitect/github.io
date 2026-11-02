import React, { useEffect, useRef, useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi, I’m Axiom! Have any questions? Ask me anything about Assessitonium.' },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { role: 'user', text },
      { role: 'bot', text: 'Happy to help! Axiom can answer most questions — or our sales team is one step away.' },
    ]);
    setInput('');
  };

  return (
    <div className={`chat ${open ? 'chat--open' : ''}`}>
      <div className="chat__panel" aria-hidden={!open}>
        <div className="chat__header">
          <span className="chat__dot"></span>
          <span className="chat__title">Axiom</span>
        </div>
        <div className="chat__body" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat__msg chat__msg--${msg.role}`}>{msg.text}</div>
          ))}
        </div>
        <form className="chat__input-row" onSubmit={send}>
          <input
            className="chat__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            aria-label="Chat message"
          />
          <button type="submit" className="chat__send" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
      {!open && (
        <div className="chat__prompt">Have any questions? Talk to Axiom</div>
      )}
      <button className="chat__toggle" onClick={() => setOpen(!open)} aria-label="Talk to Axiom">
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
