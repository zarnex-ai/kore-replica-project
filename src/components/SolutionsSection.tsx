import { motion } from "framer-motion";
import { ArrowRight, Mic, Cpu, Smartphone, Video } from "lucide-react";

const solutions = [
  {
    icon: Mic,
    title: "VOICE AUTOMATION",
    description: "Seamlessly automate customer interactions with human-like AI voice bots.",
    bullets: ["CRM Integration", "POS Syncing", "Telephony & Dialers", "24/7 Autopilot Support"],
    color: "#00c8ff",
  },
  {
    icon: Cpu,
    title: "AGENTIC AUTOMATIONS",
    description: "Intelligent workflows powered by autonomous AI agents that act and learn.",
    bullets: ["Workflow Automation", "LLM-Powered Tasks", "Machine Learning Models", "API Integrations", "Self-Optimizing Scripts"],
    color: "#00c8ff",
  },
  {
    icon: Smartphone,
    title: "WEB & MOBILE DEVELOPMENT",
    description: "Custom high-performance web applications and native mobile apps.",
    bullets: ["Next.js & React Apps", "iOS & Android Dev", "Scalable Cloud APIs", "Modern UI/UX Design"],
    color: "#00c8ff",
  },
  {
    icon: Video,
    title: "VIDEO EDITING",
    description: "High-quality video production, AI generation, and post-production.",
    bullets: ["Cinematic Editing", "Motion Graphics & VFX", "AI Video workflows", "Social Media Edits"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="card-dark group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="icon-box mb-5">
                  <solution.icon className="w-6 h-6" style={{ color: solution.color }} />
                </div>

                <h3 className="font-display text-base font-bold tracking-wider text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed mb-4">
                  {solution.description}
                </p>

                {solution.bullets && (
                  <ul className="space-y-2 mb-8 text-xs text-white/60">
                    {solution.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--zarnex-cyan)' }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

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
