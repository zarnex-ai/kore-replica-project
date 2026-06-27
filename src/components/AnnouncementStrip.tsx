import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const announcements = [
  {
    logo: "DR.MGR College",
    text: "Zarnex.ai named a leader in College Final Year Projects ™ for Cognitive Search Platforms, 2025",
    link: "#",
  },
  {
    logo: "/arviona-labs-logo.png",
    text: "Zarnex.ai named Technical Partners in Arviona Labs's Personalized Academic ML Models & AI Agents 2026",
    link: "https://arvionalabs.com",
    isImage: true,
  },
];

export const AnnouncementStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="py-3 fixed top-16 lg:top-20 left-0 right-0 z-40"
      style={{
        background: 'linear-gradient(90deg, rgba(0, 200, 255, 0.05), rgba(0, 100, 200, 0.08), rgba(0, 200, 255, 0.05))',
        borderBottom: '1px solid var(--zarnex-border)',
      }}
    >
      <div className="container-zarnex">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {announcements[currentIndex].isImage ? (
              <img
                src={announcements[currentIndex].logo}
                alt="Partner Logo"
                className="h-8 w-auto opacity-70"
              />
            ) : (
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: 'var(--zarnex-cyan)' }}
              >
                {announcements[currentIndex].logo}
              </span>
            )}
            <span className="text-xs text-white/50 max-w-xl text-center">
              {announcements[currentIndex].text}
            </span>
            <a
              href={announcements[currentIndex].link}
              className="inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2"
              style={{ color: 'var(--zarnex-cyan)' }}
            >
              Access Report
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnnouncementStrip;
