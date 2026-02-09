import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ZarnexLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="75" viewBox="0 0 75 20" fill="none">
    <path d="M71.3463 4.96191H68.6133V14.707H71.3463V4.96191Z" fill="currentColor"/>
    <path d="M52.5129 14.707C51.3844 14.707 50.4551 15.5988 50.4551 16.7649C50.4551 17.9309 51.3844 18.8227 52.5129 18.8227C53.6414 18.8227 54.5707 17.9309 54.5707 16.7649C54.5707 15.5988 53.6744 14.707 52.5129 14.707Z" fill="currentColor"/>
    <path d="M63.413 4.99408V5.75097C62.68 5.25739 61.813 4.99408 60.7469 4.99408C58.1469 4.99408 56.0469 7.13448 56.0469 9.86662C56.0469 12.5988 58.1469 14.7061 60.7469 14.7061C61.813 14.7061 62.68 14.4098 63.413 13.9492V14.7061H66.1461V4.99316H63.413V4.99408Z" fill="currentColor"/>
    <path d="M8.19459 11.6085L13.0974 6.34509H8.53955L3.66334 11.6351V0.879883H0V19.0719H3.66334V16.4397L5.69456 14.2892L9.03955 19.0719H13.6497L8.19459 11.6085Z" fill="currentColor"/>
  </svg>
);

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
          {/* Logo */}
          <a href="/" className="text-primary hover:opacity-80 transition-opacity">
            <ZarnexLogo />
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
