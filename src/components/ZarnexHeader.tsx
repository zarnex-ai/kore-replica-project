import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "ABOUT US", href: "#about" },
  { label: "TECHNOLOGY", href: "#ecosystem" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT", href: "#contact" },
];

export const ZarnexHeader = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string) => {
    setActiveLink(label);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="container-zarnex">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity z-50">
            <img
              src="/zarnex-logo.png"
              alt="Zarnex.ai"
              className="h-8 lg:h-9 w-auto object-contain"
            />
            <span className="font-display font-bold text-base lg:text-lg tracking-wider text-white hidden sm:block">
              Zarnex.ai
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, item.label);
                }}
                className={`nav-link ${activeLink === item.label ? "active text-white" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Desktop Hamburger */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              onClick={() => onOpenDemo?.()}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
              style={{
                border: '1px solid var(--zarnex-cyan)',
                color: 'var(--zarnex-cyan)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--zarnex-cyan)';
                e.currentTarget.style.color = 'var(--zarnex-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--zarnex-cyan)';
              }}
            >
              GET STARTED
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            
            <button className="text-white hover:text-[var(--zarnex-cyan)] transition-colors p-1">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-[#050a14]/98 backdrop-blur-xl border-t border-[#132040]"
          >
            <div className="container-zarnex py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.label);
                  }}
                  className="block py-3 px-4 text-sm font-medium tracking-wider text-white/70 hover:text-[var(--zarnex-cyan)] transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDemo?.();
                  }}
                  className="btn-primary w-full text-center"
                >
                  GET STARTED
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
