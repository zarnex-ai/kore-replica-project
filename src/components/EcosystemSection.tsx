import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Code, Eye, Lock, Wrench } from "lucide-react";

const platformFeatures = [
  {
    title: "Multi-Agent Orchestration",
    description: "Multi-agent orchestration enables AI agents to collaborate, share memory, and handle basic to complex decision-making tasks.",
    icon: Zap,
    tags: ["Multi-Agent Collaboration", "Supervisor Agents", "Agent Memory"],
  },
  {
    title: "Search + Data AI",
    description: "Our search and data AI layer delivers powerful information retrieval with intelligence and flexibility built in.",
    icon: Eye,
    tags: ["100+ Connectors", "Agentic RAG", "Knowledge Graph"],
  },
  {
    title: "No-Code + Pro-Code Tools",
    description: "Use no-code or pro-code tools to design agents, tools, and workflows through an intuitive interface.",
    icon: Code,
    tags: ["No-Code Builders", "SDKs", "Templates"],
  },
  {
    title: "Control + Observability",
    description: "Get built-in, deep visibility into agent performance through tracing, real-time AI analytics, and monitoring.",
    icon: Eye,
    tags: ["Agent Tracing", "AI Insights", "Workflow Analytics"],
  },
  {
    title: "AI Security + Governance",
    description: "Enterprise guardrails to enforce policies, meet regulatory standards, and ensure responsible AI behavior.",
    icon: Shield,
    tags: ["Guardrails", "RBAC", "Audit Logs"],
  },
  {
    title: "AI Engineering Tools",
    description: "Speed development with Model Hub, Prompt Studio, and Evaluation Studio for real-time performance insights.",
    icon: Wrench,
    tags: ["Prompt Studio", "Model Hub", "Evaluation Studio"],
  },
];

export const EcosystemSection = () => {
  return (
    <section
      id="ecosystem"
      className="section-zarnex"
      style={{ background: '#000000' }}
    >
      <div className="container-zarnex">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              AI AGENT PLATFORM
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            The Most Advanced{' '}
            <span style={{ color: 'var(--zarnex-cyan)' }}>AI Platform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/40 max-w-2xl mx-auto"
          >
            Create valuable AI agents and agentic workflows with confidence and ongoing control.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {platformFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="card-dark group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box w-10 h-10 rounded-lg">
                  <feature.icon className="w-5 h-5" style={{ color: 'var(--zarnex-cyan)' }} />
                </div>
                <h4 className="font-semibold text-white text-sm tracking-wide">{feature.title}</h4>
              </div>

              <p className="text-sm text-white/40 mb-5 leading-relaxed">{feature.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] rounded-full font-medium tracking-wide"
                    style={{
                      background: 'rgba(0, 200, 255, 0.06)',
                      border: '1px solid rgba(0, 200, 255, 0.1)',
                      color: 'rgba(0, 200, 255, 0.6)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider transition-all duration-300 group-hover:gap-3"
                style={{ color: 'var(--zarnex-cyan)' }}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
