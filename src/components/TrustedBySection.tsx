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
    logos: [
      { name: "Doc Nova" },
    ],
    image: "/health.png",
    title: "Healthcare Software Services",
    subtitle: "Trusted by Medical Organisation:"
  },
  {
    id: "business",
    label: "Business",
    logos: [
      { name: "Arviona Labs", href: "https://arvionalabs.com/" },
    ],
    image: "/Arvional.png",
    title: "B2B Goods and Services",
    subtitle: "Trusted by business leaders:",
  },
  {
    id: "Final year project",
    label: "Final Year Project",
    logos: [
      { name: "Dr. M.G.R. Government Arts and Science College for Women" },
    ],
    image: "/project.png",
    title: "End-to-End Projects",
    subtitle: "Zarnex.ai does all types of final year projects:"
  },
];

export const TrustedBySection = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [activeTab, setActiveTab] = useState("financial");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="section-kore bg-background" id="discover">
      <div className="container-kore">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            We've built services for world class business!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            Trust us, Our Developers never disappoint you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body mb-8"
          >
            Discover why enterprises enter Zarnex.ai
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo?.()}
              className="btn-kore-primary"
            >
              Request a demo
            </button>
            <button
              onClick={() => onOpenDemo?.()}
              className="btn-kore-outline"
            >
              Let's talk
            </button>
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 p-1.5 bg-muted rounded-full max-w-3xl mx-auto border border-border/40">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`relative px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-full z-10 ${
                activeTab === industry.id ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{industry.label}</span>
              {activeTab === industry.id && (
                <motion.span
                  layoutId="active-industry-tab"
                  className="absolute inset-0 bg-primary rounded-full z-0"
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
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border/40">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="w-full h-64 lg:h-80 object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="heading-card text-foreground">{activeIndustry.title}</h3>
                <p className="text-small text-muted-foreground">{activeIndustry.subtitle}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  {activeIndustry.logos.map((logo) => (
                    <a
                      key={logo.name}
                      href={logo.href || "#"}
                      target={logo.href ? "_blank" : undefined}
                      rel={logo.href ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center h-12 bg-muted rounded-xl px-4 hover:bg-muted/80 hover:shadow-sm transition-all duration-200"
                    >
                      <span className="text-xs font-semibold text-muted-foreground text-center">
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