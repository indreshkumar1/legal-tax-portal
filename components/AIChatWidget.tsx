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

  // Mouse proximity glow
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveredNear, setIsHoveredNear] = useState(false);

  // Position States
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const velocityRef = useRef({ vx: 0, vy: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number; time: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    time: 0,
  });

  // Physics animation frame for wall bouncing (only when closed)
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
          
          if (x < -maxRight + 40) {
            x = -maxRight + 40;
            vx = -vx * 0.7;
          } else if (x > 0) {
            x = 0;
            vx = -vx * 0.7;
          }

          if (y < -maxBottom + 40) {
            y = -maxBottom + 40;
            vy = -vy * 0.7;
          } else if (y > 0) {
            y = 0;
            vy = -vy * 0.7;
          }

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

  // Track mouse proximity and dragging with strict boundary clamping
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (buttonRef.current && !isOpen) {
        const rect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);
        
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
          // STRICT BOUNDARY CLAMPING WHEN OPEN: 
          // Ensures the chat window can NEVER leave the viewport or hide the close button.
          const chatWidth = Math.min(400, window.innerWidth * 0.9);
          const chatHeight = 500;
          
          const minAllowedX = -window.innerWidth + chatWidth + 24;
          const maxAllowedX = -24;
          const minAllowedY = -window.innerHeight + chatHeight + 24; // Keeps header fully visible at top!
          const maxAllowedY = -24;

          if (newX < minAllowedX) newX = minAllowedX;
          if (newX > maxAllowedX) newX = maxAllowedX;
          if (newY < minAllowedY) newY = minAllowedY;
          if (newY > maxAllowedY) newY = maxAllowedY;
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
          const dx = e.clientX - dragRef.current.startX;
          const dy = e.clientY - dragRef.current.startY;
          
          velocityRef.current = {
            vx: (dx / dt) * 0.2,
            vy: (dy / dt) * 0.2,
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
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: posRef.current.x,
      initialY: posRef.current.y,
      time: Date.now(),
    };
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      
      // Safety check on open: if the window was left in a position that clips the top, snap it down safely
      const chatHeight = 500;
      const minAllowedY = -window.innerHeight + chatHeight + 24;
      if (posRef.current.y < minAllowedY) {
        posRef.current.y = minAllowedY;
        setOffset({ ...posRef.current });
      }
    }
  }, [isOpen]);

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
        { role: 'assistant', content: data.reply || 'I am sorry, I encountered an issue processing your query.' }
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
        bottom: '24px',
        right: '24px',
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.05s linear',
      }}
    >
      {!isOpen ? (
        <button
          ref={buttonRef}
          onMouseDown={handleMouseDown}
          onClick={() => setIsOpen(true)}
          className={`relative overflow-hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border transition-all duration-300 cursor-grab active:cursor-grabbing hover:scale-110 ${
            isHoveredNear 
              ? 'bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 border-cyan-200 shadow-fuchsia-500/50' 
              : 'bg-slate-900/90 backdrop-blur-md border-cyan-500/40 shadow-cyan-500/30'
          }`}
          title="Drag or Throw me across the screen! Click to open."
        >
          {isHoveredNear && (
            <span 
              className="absolute w-24 h-24 rounded-full bg-white/30 blur-md pointer-events-none transition-all duration-75"
              style={{
                top: `${mousePos.y - 48}px`,
                left: `${mousePos.x - 48}px`,
              }}
            />
          )}
          <span className="text-2xl relative z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">🤖✨</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-slate-700 w-[90vw] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Draggable Header with strict screen boundary clamping */}
          <div 
            onMouseDown={handleMouseDown}
            className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 border-b border-slate-800 flex justify-between items-center cursor-grab active:cursor-grabbing select-none"
            title="Click and drag to move window"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 animate-ping"></span>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  ✨ TriWise AI Advisor 
                  <span className="text-[9px] text-slate-400 font-normal">(Safe HUD)</span>
                </h4>
                <p className="text-[10px] text-cyan-400">MCA, SEBI & Legal Knowledge Engine</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                posRef.current = { x: 0, y: 0 };
                setOffset({ x: 0, y: 0 });
              }}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              title="Close & Reset to Corner"
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
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 shadow-inner'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 p-3.5 rounded-2xl text-xs rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
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
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}