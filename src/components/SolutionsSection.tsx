import { motion } from "framer-motion";
import { ArrowRight, Brain, Bot, Zap } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI PRODUCTS",
    description: "Cutting-edge AI tools to power your business.",
    color: "#00c8ff",
  },
  {
    icon: Bot,
    title: "AUTONOMOUS AGENTS",
    description: "Intelligent agents that work autonomously for you.",
    color: "#00c8ff",
  },
  {
    icon: Zap,
    title: "FUTURE TECHNOLOGY",
    description: "Exploring tomorrow's tech, today.",
    color: "#00c8ff",
  },
];

export const SolutionsSection = () => {
  return (
    <section
      id="solutions"
      className="section-zarnex"
      style={{ background: '#000000' }}
    >
      <div className="container-zarnex">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            OUR SOLUTIONS
          </div>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card-dark group cursor-pointer"
            >
              <div className="icon-box mb-5">
                <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
              </div>

              <h3 className="font-display text-base font-bold tracking-wider text-white mb-3">
                {solution.title}
              </h3>

              <p className="text-sm text-white/45 leading-relaxed mb-6">
                {solution.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                style={{ color: 'var(--zarnex-cyan)' }}
              >
                LEARN MORE
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
