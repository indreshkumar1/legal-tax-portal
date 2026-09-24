'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadForm, setIsLeadForm] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hello! I am the TriWise Partners Regulatory Assistant. How can I assist you with corporate governance, SEBI frameworks, or NCLT proceedings today?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Lead form state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveredNear, setIsHoveredNear] = useState(false);

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const velocityRef = useRef({ vx: 0, vy: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number; time: number }>({
    startX: 0, startY: 0, initialX: 0, initialY: 0, time: 0,
  });

  const quickPrompts = [
    "📋 MCA Compliance Checklist",
    "⚖️ NCLT & Litigation Support",
    "📊 SEBI Disclosure Guidelines",
    "🏢 Corporate Restructuring"
  ];

  // Wall bouncing physics when closed
  useEffect(() => {
    let animationFrameId: number;
    const updatePhysics = () => {
      if (!isDragging && !isOpen) {
        let { x, y } = posRef.current;
        let { vx, vy } = velocityRef.current;

        if (Math.abs(vx) > 0.1 || Math.abs(vy) > 0.1) {
          x += vx;
          y += vy;
          const maxRight = window.innerWidth - 80;
          const maxBottom = window.innerHeight - 80;
          
          if (x < -maxRight + 40) { x = -maxRight + 40; vx = -vx * 0.7; }
          else if (x > 0) { x = 0; vx = -vx * 0.7; }

          if (y < -maxBottom + 40) { y = -maxBottom + 40; vy = -vy * 0.7; }
          else if (y > 0) { y = 0; vy = -vy * 0.7; }

          vx *= 0.93;
          vy *= 0.93;

          velocityRef.current = { vx, vy };
          posRef.current = { x, y };
          setOffset({ x, y });
        }
      }
      animationFrameId = requestAnimationFrame(updatePhysics);
    };
    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging, isOpen]);

  // Mouse tracking and dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (buttonRef.current && !isOpen) {
        const rect = buttonRef.current.getBoundingClientRect();
        const distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
        if (distance < 140) {
          setIsHoveredNear(true);
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          setIsHoveredNear(false);
        }
      }

      if (isDragging) {
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        let newX = dragRef.current.initialX + dx;
        let newY = dragRef.current.initialY + dy;

        if (isOpen) {
          const chatWidth = Math.min(400, window.innerWidth * 0.9);
          const chatHeight = 540;
          if (newX < -window.innerWidth + chatWidth + 24) newX = -window.innerWidth + chatWidth + 24;
          if (newX > -24) newX = -24;
          if (newY < -window.innerHeight + chatHeight + 24) newY = -window.innerHeight + chatHeight + 24;
          if (newY > -24) newY = -24;
        }

        posRef.current = { x: newX, y: newY };
        setOffset({ x: newX, y: newY });
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        if (!isOpen) {
          const dt = (Date.now() - dragRef.current.time) / 1000 || 0.016;
          velocityRef.current = {
            vx: ((e.clientX - dragRef.current.startX) / dt) * 0.2,
            vy: ((e.clientY - dragRef.current.startY) / dt) * 0.2,
          };
        }
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    velocityRef.current = { vx: 0, vy: 0 };
    dragRef.current = { startX: e.clientX, startY: e.clientY, initialX: posRef.current.x, initialY: posRef.current.y, time: Date.now() };
  };

  const sendMessageToBot = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;
    const userMessage = textToSend.trim();
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
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply || 'Please connect with our specialists via our contact form.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Network error connecting to database.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Here you can send lead data to an API route or email service
  };

  return (
    <div className="fixed z-50 font-sans" style={{ bottom: '24px', right: '24px', transform: `translate(${offset.x}px, ${offset.y}px)`, transition: isDragging ? 'none' : 'transform 0.05s linear' }}>
      {!isOpen ? (
        <button
          ref={buttonRef}
          onMouseDown={handleMouseDown}
          onClick={() => setIsOpen(true)}
          className={`relative overflow-hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border transition-all duration-300 cursor-grab active:cursor-grabbing hover:scale-110 ${isHoveredNear ? 'bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 border-cyan-200 shadow-fuchsia-500/50' : 'bg-slate-900/90 backdrop-blur-md border-cyan-500/40 shadow-cyan-500/30'}`}
          title="Drag or Throw me! Click to open."
        >
          {isHoveredNear && <span className="absolute w-24 h-24 rounded-full bg-white/30 blur-md pointer-events-none" style={{ top: `${mousePos.y - 48}px`, left: `${mousePos.x - 48}px` }} />}
          <span className="text-2xl relative z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">⚖️✨</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 w-[90vw] sm:w-[400px] h-[540px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div onMouseDown={handleMouseDown} className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 border-b border-slate-800 flex justify-between items-center cursor-grab active:cursor-grabbing select-none">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  🏛️ TriWise Partners 
                  <span className="text-[9px] text-cyan-400 font-semibold">AI Advisor</span>
                </h4>
                <p className="text-[10px] text-slate-400">Govern • Grow • Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLeadForm(!isLeadForm)}
                className="text-[10px] bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 px-2 py-1 rounded-lg transition-colors cursor-pointer"
              >
                {isLeadForm ? '💬 Chat' : '📞 Request Callback'}
              </button>
              <button
                onClick={() => { setIsOpen(false); posRef.current = { x: 0, y: 0 }; setOffset({ x: 0, y: 0 }); }}
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Conditional View: Chat vs Lead Form */}
          {!isLeadForm ? (
            <>
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/50">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md' : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 shadow-inner'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 text-slate-400 p-3.5 rounded-2xl text-xs rounded-bl-none border border-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick FAQ Chips */}
              <div className="px-3 py-2 bg-slate-950/70 border-t border-slate-800/60 flex gap-1.5 overflow-x-auto no-scrollbar">
                {quickPrompts.map((prompt, idx) => (
                  <button key={idx} onClick={() => sendMessageToBot(prompt)} className="whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px] px-2.5 py-1 rounded-full border border-cyan-500/25 transition-all cursor-pointer">
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={(e) => { e.preventDefault(); sendMessageToBot(input); }} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about compliance, SEBI, NCLT..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
                <button type="submit" disabled={loading} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer shadow-lg shadow-cyan-500/20">
                  Send
                </button>
              </form>
            </>
          ) : (
            /* Lead Capture Form View */
            <div className="flex-1 p-5 bg-slate-900/90 flex flex-col justify-center">
              {!formSubmitted ? (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">Schedule a Specialist Callback</h3>
                    <p className="text-[11px] text-slate-400">Leave your details and our core advisory team will reach out to you shortly.</p>
                  </div>
                  <div>
                    <label className="block text-[10px] text-cyan-400 font-medium mb-1">Full Name</label>
                    <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="e.g. Rajesh Sharma" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-cyan-400 font-medium mb-1">Work Email</label>
                    <input type="email" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="rajesh@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-cyan-400 font-medium mb-1">Phone Number</label>
                    <input type="tel" required value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:border-cyan-400 focus:outline-none" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-2.5 rounded-xl text-xs font-semibold cursor-pointer shadow-lg shadow-cyan-500/20 transition-all">
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl border border-emerald-500/30">✓</div>
                  <h3 className="text-sm font-bold text-white">Request Received!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">Thank you, <span className="text-cyan-400">{clientName}</span>. A TriWise specialist will review your query and contact you within 24 business hours.</p>
                  <button onClick={() => { setFormSubmitted(false); setIsLeadForm(false); }} className="text-xs text-cyan-400 hover:underline pt-2 cursor-pointer">
                    Return to Chat
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}