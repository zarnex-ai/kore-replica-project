import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "AI Solutions", hasDropdown: true },
  { label: "Agent Platform", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Support", hasDropdown: true },
  { label: "Company", hasDropdown: true },
];

export const ZarnexHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-kore">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* 🔴 ZARNEX LOGO (BIGGER IMAGE) */}
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/zarnex.ai-logo.png"
              alt="Zarnex"
              className="!h-20 lg:!h-28 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Sign in
            </a>
            <a href="#" className="btn-kore-primary">
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
            <div className="container-kore py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href="#" className="block text-sm font-medium text-foreground">
                  Sign in
                </a>
                <a href="#" className="btn-kore-primary w-full text-center">
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ZarnexHeader;
