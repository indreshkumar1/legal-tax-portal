'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I am the TriWise Partners Regulatory Assistant. Ask me anything regarding MCA compliance, Company Law, SEBI frameworks, or our practice pillars.' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dragging states
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag if clicking the header bar
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setPosition({
        x: dragRef.current.initialX + dx,
        y: dragRef.current.initialY + dy,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev, 
        { role: 'assistant', content: data.reply || 'I am sorry, I encountered an issue processing your regulatory query. Please reach out to our team directly via the contact form.' }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev, 
        { role: 'assistant', content: 'Network error connecting to compliance database. Please try again later.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed z-50 font-sans"
      style={{
        bottom: isOpen ? 'auto' : '24px',
        right: isOpen ? 'auto' : '24px',
        transform: isOpen ? `translate(${position.x}px, ${position.y}px)` : 'none',
        transition: isDragging ? 'none' : 'transform 0.05s ease-out',
      }}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white p-4 rounded-full shadow-2xl shadow-cyan-500/30 flex items-center gap-3 border border-cyan-400/30 transition-all hover:scale-105 group cursor-pointer"
        >
          <span className="text-xl">🤖</span>
          <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">Ask AI Regulatory Expert</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 w-[90vw] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Draggable Chat Header */}
          <div 
            onMouseDown={handleMouseDown}
            className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center cursor-grab active:cursor-grabbing select-none"
            title="Click and drag to move window"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  TriWise AI Compliance Advisor 
                  <span className="text-[9px] text-slate-500 font-normal">(Drag Header)</span>
                </h4>
                <p className="text-[10px] text-slate-400">Powered by MCA & Legal Knowledge</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-cyan-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 p-3.5 rounded-2xl text-xs rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about NCLT, SEBI, or company filings..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}