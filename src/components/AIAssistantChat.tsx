import { useState, useEffect, useRef } from "react";
import { MessageSquareText, X, Send, Bot, Sparkles, User, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  sender: "user" | "bot" | "system";
  text: string;
  timestamp: Date;
  isCode?: boolean;
}

export const AIAssistantChat = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Zarnex Agent-01. I specialize in orchestrating AI workflows, web solutions, and final year projects. What are we building today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnread(false);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMsg: Message = { sender: "user", text, timestamp: new Date() };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate Agent response after 1.5 seconds
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "";
      let isCode = false;

      const lower = text.toLowerCase();
      if (lower.includes("build") || lower.includes("agent") || lower.includes("orchestra")) {
        replyText = `// Initializing Zarnex Multi-Agent Orchestrator...\n// Creating Supervisor Agent (Agent-Core)\n// Mounting Dialog GPT memory connector...\n// Connecting Prompt Studio & Guardrails\n\nOrchestration successfully deployed!\nEndpoint: https://api.zarnex.ai/v1/agents/mgr-flow\nStatus: 200 OK`;
        isCode = true;
      } else if (lower.includes("web") || lower.includes("app") || lower.includes("dev") || lower.includes("service")) {
        replyText = "We build tailored enterprise web solutions using Vite, React, Tailwind CSS, & cross-platform mobile apps with Flutter. Need high-performance backend, database integration, or administrative controls? I suggest launching our Interactive Project Scoping form. Click 'Open Scoping Form' below to get estimated timeline & stack recommendation instantly!";
      } else if (lower.includes("project") || lower.includes("college") || lower.includes("final")) {
        replyText = "Yes, Zarnex AI builds end-to-end final year projects (e.g. Cognitive Search, Custom RAG, ML/VFX integrations). We provide full source code, deployment setup, and project documentation (thesis/slides). Use the Project Scoping tool to get an immediate duration estimate!";
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire")) {
        replyText = "You can contact our developers directly at zarnexsolutions@gmail.com, or schedule a scoping call by clicking 'Open Scoping Form' below.";
      } else {
        replyText = "I received your request! Our AI Ecosystem is equipped to handle complex workflow orchestrations, custom B2B web setups, and academic ML model development. Let me know if you would like me to build a mock agent, give you contact details, or help scope your project.";
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: replyText, timestamp: new Date(), isCode },
      ]);
    }, 1500);
  };

  const handleQuickAction = (actionText: string) => {
    handleSendMessage(actionText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      <AnimatePresence>
        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            className="mb-4 w-[360px] sm:w-[400px] h-[520px] bg-[#08080c]/95 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.85),_0_0_30px_rgba(0,200,255,0.08)] border border-white/[0.08] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b1a30]/90 to-[#08080c]/90 px-5 py-4 flex items-center justify-between text-white border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-cyan-950/30 flex items-center justify-center border border-cyan-500/30">
                    <Bot className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-[#08080c] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold flex items-center gap-1">
                    Zarnex AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  </h4>
                  <span className="text-[10px] text-cyan-400/80">Agent-01 (Online)</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-full transition-colors text-white/70 hover:text-white"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
 
            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/40 dot-pattern">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      msg.sender === "user"
                        ? "bg-cyan-950 text-cyan-400 border-cyan-500/30"
                        : "bg-black/40 text-cyan-400 border-white/[0.08]"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4.5 h-4.5" /> : <Bot className="w-4.5 h-4.5 text-cyan-400" />}
                  </div>
                  <div className="space-y-1 max-w-[75%]">
                    {msg.isCode ? (
                      <div className="p-3 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl overflow-x-auto shadow-sm border border-slate-800">
                        <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5 mb-1.5 text-[10px] text-slate-400">
                          <Terminal className="w-3.5 h-3.5" /> console.sh
                        </div>
                        <pre className="whitespace-pre-wrap">{msg.text}</pre>
                      </div>
                    ) : (
                      <div
                        className={`p-3 rounded-2xl text-sm shadow-sm leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/30 text-white rounded-tr-none"
                            : "bg-[#0c0c12]/80 text-white/90 rounded-tl-none border border-white/[0.08]"
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                    <span className="text-[9px] text-white/30 block text-right px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
 
              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-8 h-8 rounded-full bg-black/40 border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Bot className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#0c0c12]/80 border border-white/[0.08] rounded-tl-none flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
 
            {/* Quick action buttons */}
            <div className="p-2.5 border-t border-white/[0.08] bg-[#08080c] flex flex-wrap gap-1.5 justify-center">
              <button
                onClick={() => handleQuickAction("⚙️ Launch AI Agent Flow")}
                className="px-2.5 py-1 text-xs border border-white/[0.08] bg-black/40 hover:bg-[#14141c] hover:border-cyan-500/30 rounded-full text-white/80 transition-all duration-200"
              >
                ⚙️ Build an Agent
              </button>
              <button
                onClick={() => handleQuickAction("💻 React/Flutter Dev Info")}
                className="px-2.5 py-1 text-xs border border-white/[0.08] bg-black/40 hover:bg-[#14141c] hover:border-cyan-500/30 rounded-full text-white/80 transition-all duration-200"
              >
                💻 Custom Dev Info
              </button>
              <button
                onClick={() => handleQuickAction("🎓 Academic Final Year Project")}
                className="px-2.5 py-1 text-xs border border-white/[0.08] bg-black/40 hover:bg-[#14141c] hover:border-cyan-500/30 rounded-full text-white/80 transition-all duration-200"
              >
                🎓 College Projects
              </button>
              {onOpenDemo && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDemo();
                  }}
                  className="px-2.5 py-1 text-xs bg-cyan-950/40 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 rounded-full font-semibold border border-cyan-500/30 transition-all duration-200"
                >
                  🚀 Open Scoping Form
                </button>
              )}
            </div>
 
            {/* Footer input form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-white/[0.08] bg-[#08080c] flex gap-2"
            >
              <Input
                type="text"
                placeholder="Ask about AI, WebGL, VFX, or timeline..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="rounded-xl flex-1 text-sm bg-black/60 border-white/[0.08] text-white placeholder-white/30 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-0 focus-visible:border-cyan-500/50"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-xl shrink-0 bg-cyan-500 text-black hover:bg-cyan-400"
                style={{ backgroundColor: 'var(--zarnex-cyan)', color: 'var(--zarnex-dark)' }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-[#08080c] to-[#0b1a30] text-cyan-400 rounded-full flex items-center justify-center shadow-2xl border border-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200 z-50 relative group"
        style={{
          boxShadow: "0 0 20px rgba(0, 200, 255, 0.25)",
        }}
      >
        {isOpen ? <X className="w-6 h-6 text-cyan-400" /> : <MessageSquareText className="w-6 h-6 text-cyan-400" />}
 
        {/* Unread notification ping */}
        {unread && !isOpen && (
          <>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-400 rounded-full text-[9px] font-bold flex items-center justify-center text-black border border-[#08080c] animate-pulse">
              1
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-400 rounded-full border border-cyan-400 animate-ping opacity-75" />
          </>
        )}
 
        {/* Hover Label */}
        {!isOpen && (
          <span className="absolute right-16 bg-[#08080c]/90 border border-white/[0.08] px-2.5 py-1 rounded-xl text-xs text-white font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Chat with Agent-01
          </span>
        )}
      </button>
    </div>
  );
};
