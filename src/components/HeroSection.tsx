import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  return (
    <section id="services" className="section-kore pt-12 lg:pt-20 relative" style={{ backgroundColor: '#fcfaff' }}>
      <div className="liquid-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="container-kore">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-hero text-foreground mb-6"
          >
          Developers at <span style={{ color: 'rgb(189, 95, 189)' }}>Flows</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body max-w-2xl mx-auto mb-10"
          >
            AI agents for work, service, and process. Build once, deploy everywhere.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onOpenDemo?.()}
              className="btn-kore-primary text-base px-8 py-4"
            >
              Request Demo
            </button>
          </motion.div>
        </div>

        {/* AI Solutions Cards */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16 lg:mt-24"
        >
          {[
            {
              title: "AI for Work",
              description: "Search across silos, automate workflows, orchestrate AI agents and govern with confidence enterprise-wide.",
            },
            {
              title: "AI for Service",
              description: "Leverage generative AI innovation to empower customers and create differentiated service experiences.",
            },
            {
              title: "ML for service",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
            },
            {
              title: "ML for enterprise",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
            },
            {
              title: "3D Modelling for enterprise",
              description: "Enhance your enterprise solutions with advanced 3D modeling capabilities.",
            },
            {
              title: "Web Developement as Service",
              description: "Web development services tailored for your enterprise needs.",
            },
            {
              title: "App Development",
              description: "Flutter Development services for cross-platform mobile applications.",
            },
            {
              title: "VFX for enterprise",
              description: "VFX services for enhancing visual effects in your enterprise projects.",
            },
            {
              title: "Video Editing",
              description: "Professional video editing services for your enterprise projects.",
            },
            {
              title: "Logo Editing",
              description: "Professional logo editing services for your enterprise projects.",
            },
            {
              title: "Cloud Infrastructure",
              description: "Comprehensive cloud computing solutions for your enterprise.",
            },
            {
              title: "SEO Optimization by AI",
              description: "Optimize your website's SEO with AI-powered solutions.",
            }
          ].map((card) => (
            <motion.button
              key={card.title}
              onClick={() => onOpenDemo?.()}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ scale: 1.03, y: -6, boxShadow: "0 12px 30px rgba(189, 95, 189, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="group card-glass flex flex-col h-full text-left w-full outline-none"
            >
              <h3 className="heading-card mb-3 group-hover:text-purple-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-small flex-1">{card.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
