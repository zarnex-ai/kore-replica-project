import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownContent: Record<string, { name: string; desc: string; href: string }[]> = {
  "AI Solutions": [
    { name: "AI for Work", desc: "Enterprise search, workflows & agent orchestration", href: "#services" },
    { name: "AI for Service", desc: "Generative AI customer support & experiences", href: "#services" },
    { name: "ML for Service", desc: "Autonomous AI agents & agentic workflows", href: "#services" },
    { name: "ML for Enterprise", desc: "Frictionless models for business outcomes", href: "#services" },
  ],
  "Agent Platform": [
    { name: "Multi-Agent Orchestration", desc: "Collaborative agents with shared memory", href: "#ecosystem" },
    { name: "Search + Data AI", desc: "Agentic RAG & knowledge graphs with 100+ connectors", href: "#ecosystem" },
    { name: "No-Code & Pro-Code Tools", desc: "SDKs, prompt builders & visual designers", href: "#ecosystem" },
    { name: "AI Security & Governance", desc: "Enterprise guardrails, RBAC & audit logs", href: "#ecosystem" },
  ],
  "Web Solutions": [
    { name: "Web Development", desc: "Tailored enterprise React & Vite websites", href: "#services" },
    { name: "App Development", desc: "Cross-platform Flutter mobile applications", href: "#services" },
    { name: "VFX & Video Editing", desc: "Visual effects & professional video assets", href: "#services" },
    { name: "Cloud Infrastructure", desc: "Scalable cloud computing solutions", href: "#services" },
  ],
  "Support": [
    { name: "Documentation", desc: "Integration guides and API specs", href: "#contact" },
    { name: "Contact Team", desc: "Get in touch with support engineers", href: "#contact" },
  ],
};

const navItems = [
  { label: "AI Solutions", hasDropdown: true },
  { label: "Agent Platform", hasDropdown: true },
  { label: "Web Solutions", hasDropdown: true },
  { label: "Support", hasDropdown: true },
];

export const ZarnexHeader = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container-kore">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <a href="/" className="hover:opacity-85 transition-opacity z-50">
            <img
              src="/zarnex.ai-logo.png"
              alt="Zarnex"
              className="h-16 lg:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 relative">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative py-4"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    activeDropdown === item.label ? "text-primary-foreground bg-primary/10 rounded-full px-3 py-1" : "text-foreground hover:text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.label && item.hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-border/60 p-4 z-50 grid gap-2"
                    >
                      {dropdownContent[item.label]?.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(sub.href);
                          }}
                          className="group/item flex flex-col p-2.5 rounded-xl hover:bg-muted transition-all duration-200"
                        >
                          <span className="text-sm font-semibold text-foreground group-hover/item:text-secondary-foreground transition-colors">
                            {sub.name}
                          </span>
                          <span className="text-xs text-muted-foreground font-normal mt-0.5 line-clamp-2">
                            {sub.desc}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Action buttons (Get in Touch) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenDemo?.()}
              className="btn-kore-primary px-5 py-2.5"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container-kore py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/40 pb-2">
                  <button
                    onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground text-left"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedItem === item.label ? "rotate-180" : ""}`} />}
                  </button>
                  {mobileExpandedItem === item.label && item.hasDropdown && (
                    <div className="pl-4 pr-2 py-1 space-y-3 bg-muted/30 rounded-xl mt-1">
                      {dropdownContent[item.label]?.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(sub.href);
                          }}
                          className="block py-1"
                        >
                          <div className="text-sm font-semibold text-foreground">{sub.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{sub.desc}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDemo?.();
                  }}
                  className="btn-kore-primary w-full text-center py-3"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ZarnexHeader;
