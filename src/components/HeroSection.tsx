import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="section-kore wave-bg pt-12 lg:pt-20">
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
            <a href="#" className="btn-kore-primary text-base px-8 py-4">
              Request Demo
            </a>
          </motion.div>
        </div>

        {/* AI Solutions Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24"
        >
          {[
            {
              title: "AI for Work",
              description: "Search across silos, automate workflows, orchestrate AI agents and govern with confidence enterprise-wide.",
              link: "#",
            },
            {
              title: "AI for Service",
              description: "Leverage generative AI innovation to empower customers and create differentiated service experiences.",
              link: "#",
            },
            {
              title: "AI for process",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
              link: "#",
            },
            {
              title: "ML for service ",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
              link: "#",
            },
            {
              title: "ML for orchesation ",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
              link: "#",
            },
          ].map((card, index) => (
            <a
              key={card.title}
              href={card.link}
              className="group card-kore flex flex-col h-full"
            >
              <h3 className="heading-card mb-3 group-hover:text-muted-foreground transition-colors">
                {card.title}
              </h3>
              <p className="text-small flex-1">{card.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
