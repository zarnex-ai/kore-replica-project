import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="section-kore pt-12 lg:pt-20 relative" style={{ backgroundColor: '#fcfaff' }}>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16 lg:mt-24"
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
              title: "ML for service ",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
              link: "#",
            },
            {
              title: "ML for enterprise ",
              description: "Streamline knowledge-intensive business processes with autonomous AI agents and agentic workflows.",
              link: "#",
            },
            {
              title: "3D Modelling for enterprise ",
              description: "Enhance your enterprise solutions with advanced 3D modeling capabilities.",
              link: "#",

            },
            {
              title: "Web Developement as Service",
              description: "Web development services tailored for your enterprise needs.",
              link: "#",

            },
             {
              title: "App Development ",
              description: "Flutter Development services for cross-platform mobile applications.",
              link: "#",
            },
             {
              title: "VFX for enterprise ",
              description: "VFX services for enhancing visual effects in your enterprise projects.",
              link: "#",
            },
             {
              title: "Video Editing",
              description: "Professional video editing services for your enterprise projects.",
              link: "#",
            },
             {
              title: "Logo Editing",
              description: "Professional logo editing services for your enterprise projects.",
              link: "#",
            },
             {
              title: "Cloud Infrastructure",
              description: "Comprehensive cloud computing solutions for your enterprise.",
              link: "#",
            },
            {
              title: "SEO Optimization by AI ",
              description: "Optimize your website's SEO with AI-powered solutions.",
              link: "#",
            }
          ].map((card, index) => (
            <a
              key={card.title}
              href={card.link}
              className="group card-glass flex flex-col h-full"
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
