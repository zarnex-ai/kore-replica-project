import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const announcements = [
  
  {
    logo: "DR.MGR College of Engineering",
    text: "Zarnex.ai named a leader in College Final Year Projects ™ for Cognitive Search Platforms, 2025",
    link: "#",
  },
  {
    logo: "/arviona-labs-logo.png", // Logo image with background removed
    text: "Zarnex.ai named a Technical Partners  in Arviona Labs's Personalized Academic ML Models & AI Agents Zarnex.ai® 2026",
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
    <div className="bg-kore-light-bg border-b border-border/50 py-3 mt-16 lg:mt-20">
      <div className="container-kore">
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
                alt="Arviona Labs Logo"
                className="h-12 w-15"
              />
            ) : (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {announcements[currentIndex].logo}
              </span>
            )}
            <span className="text-sm text-foreground max-w-xl text-center">
              {announcements[currentIndex].text}
            </span>
            <a
              href={announcements[currentIndex].link}
              className="btn-kore-ghost text-sm"
            >
              Access Report
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnnouncementStrip;
