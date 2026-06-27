import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    id: "financial",
    label: "Financial Services",
    logos: [
      { name: "Primeverse", href: "https://www.primeverse.pro/" },
      { name: "ScalpTamilan", href: "https://scalptamizhan.in/" }
    ],
    image: "/images/trading.jpg",
    title: "Banks, Trading Secrets, Financial Institutions",
    subtitle: "Trusted by banking leaders:",
  },
  {
    id: "Healthcare",
    label: "Healthcare",
    logos: [{ name: "Doc Nova" }],
    image: "/health.png",
    title: "Healthcare Software Services",
    subtitle: "Trusted by Medical Organisation:"
  },
  {
    id: "business",
    label: "Business",
    logos: [{ name: "Arviona Labs", href: "https://arvionalabs.com/" }],
    image: "/Arvional.png",
    title: "B2B Goods and Services",
    subtitle: "Trusted by business leaders:",
  },
  {
    id: "projects",
    label: "Projects",
    logos: [{ name: "Dr. M.G.R. Government Arts and Science College" }],
    image: "/project.png",
    title: "End-to-End Projects",
    subtitle: "Zarnex.ai delivers all types of projects:"
  },
];

export const TrustedBySection = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [activeTab, setActiveTab] = useState("financial");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section
      className="section-zarnex"
      id="discover"
      style={{ background: '#000000' }}
    >
      <div className="container-zarnex">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              TRUSTED BY ENTERPRISES
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Built for{' '}
            <span style={{ color: 'var(--zarnex-cyan)' }}>World-Class</span>{' '}
            Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-white/40 mb-8 max-w-2xl mx-auto"
          >
            Trust us, Our Developers never disappoint you.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button onClick={() => onOpenDemo?.()} className="btn-primary">
              Request a demo
            </button>
            <button onClick={() => onOpenDemo?.()} className="btn-outline">
              Let's talk
            </button>
          </div>
        </div>

        {/* Industry Tabs */}
        <div
          className="flex flex-wrap justify-center gap-1 mb-10 p-1 rounded-full max-w-3xl mx-auto"
          style={{
            background: 'rgba(0, 200, 255, 0.03)',
            border: '1px solid var(--zarnex-border)',
          }}
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`relative px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-full z-10 ${
                activeTab === industry.id ? "text-[var(--zarnex-dark)]" : "text-white/50 hover:text-white/70"
              }`}
            >
              <span className="relative z-10">{industry.label}</span>
              {activeTab === industry.id && (
                <motion.span
                  layoutId="active-industry-tab"
                  className="absolute inset-0 rounded-full z-0"
                  style={{ background: 'var(--zarnex-cyan)' }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Industry Content */}
        <div className="min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid var(--zarnex-border)',
                  boxShadow: '0 0 40px rgba(0, 200, 255, 0.05)',
                }}
              >
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight">
                  {activeIndustry.title}
                </h3>
                <p className="text-sm text-white/40">{activeIndustry.subtitle}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  {activeIndustry.logos.map((logo) => (
                    <a
                      key={logo.name}
                      href={logo.href || "#"}
                      target={logo.href ? "_blank" : undefined}
                      rel={logo.href ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center h-12 rounded-xl px-4 transition-all duration-200"
                      style={{
                        background: 'rgba(0, 200, 255, 0.04)',
                        border: '1px solid var(--zarnex-border)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0, 200, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--zarnex-border)';
                      }}
                    >
                      <span className="text-xs font-semibold text-white/50 text-center">
                        {logo.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;