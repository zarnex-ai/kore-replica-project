import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    id: "financial",
    label: "Financial Services",
    logos: [
      { name: "Primeverse", href: "https://www.primeverse.pro/" },
      { name: "ScalpTamilan", href: "https://scalptamizhan.in/" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    title: "Banks, Trading Secrets, Financial Institutions",
    subtitle: "Trusted by banking leaders:",
  },

  {
    id: "Healthcare",
    label: "Healthcare ",
    logos: [
      { name: "Doc Nova" },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    title: "Healthcare Software Services",
    subtitle: "Trusted by Medical Organisation"
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
  label: "Final year project",
  logos: [
    { name: "Dr. M.G.R. Government Arts and Science College for Women" },
  ],
  image: "/project.png",
  title: "End to End projects",
  subtitle: "zarnex.ai does all types of Final year projects",
},

];

export const TrustedBySection = () => {
  const [activeTab, setActiveTab] = useState("financial");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="section-kore bg-background">
      <div className="container-kore">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            We've built services for world class business !
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
            Discover why enterprises enters Zarnex.ai
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="btn-kore-primary">
              Request a demo
            </a>
            <a href="#" className="btn-kore-outline">
              Let's talk
            </a>
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`tab-kore ${activeTab === industry.id ? "tab-kore-active" : ""}`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Active Industry Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.title}
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="heading-card mb-2">{activeIndustry.title}</h3>
            <p className="text-small mb-6">{activeIndustry.subtitle}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activeIndustry.logos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 bg-muted rounded-lg px-4 hover:bg-muted/80 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">
                    {logo.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default TrustedBySection;