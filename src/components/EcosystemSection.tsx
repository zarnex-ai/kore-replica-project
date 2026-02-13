import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Code, Eye, Lock, Wrench } from "lucide-react";

const platformFeatures = [
  {
    title: "Multi-Agent Orchestration",
    description: "Multi-agent orchestration enables AI agents to collaborate, share memory, and handle basic to complex decision-making tasks.",
    icon: Zap,
    tags: ["Multi-Agent Collaboration", "Supervisor Agents", "Agent Memory", "Dialog GPT"],
  },
  {
    title: "Search + Data AI",
    description: "Our search and data AI layer delivers powerful information retrieval with intelligence and flexibility built in, with 100+ pre-built search connectors.",
    icon: Eye,
    tags: ["100+ Connectors", "Agentic RAG", "Teachability", "Knowledge Graph"],
  },
  {
    title: "No-Code + Pro-Code Tools",
    description: "Use no-code or pro-code tools to design agents, tools, and workflows through an intuitive interface.",
    icon: Code,
    tags: ["No-Code Builders", "SDKs", "Pro-Code Extensions", "Templates"],
  },
  {
    title: "Control + Observability",
    description: "Get built-in, deep visibility into agent performance through tracing, real-time AI analytics, and monitoring.",
    icon: Eye,
    tags: ["Agent Tracing", "AI Agent Insights", "Workflow Analytics", "Event Monitoring"],
  },
  {
    title: "AI Security + Governance",
    description: "Enterprise guardrails to enforce policies, meet regulatory standards, and ensure responsible AI behavior at scale.",
    icon: Shield,
    tags: ["Guardrails", "RBAC", "Audit Logs", "Enterprise Security"],
  },
  {
    title: "AI Engineering Tools",
    description: "Speed development with Model Hub, Prompt Studio, and Evaluation Studio for real-time performance insights.",
    icon: Wrench,
    tags: ["Prompt Studio", "Evaluation Studio", "Model Hub", "Model Factory"],
  },
];

export const EcosystemSection = () => {
  return (
    <section className="section-kore section-kore-light">
      <div className="container-kore">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            The single AI ecosystem for your enterprise
          </motion.h2>
        </div>

        {/* Roadblocks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Customer Care Automation",
              description: "Transform your customer experience with human-like AI agents that work 24/7 across phone, chat, and messaging platforms.",
            },
            {
              title: "AI Workforce Management",
              description: "HR Agents, Talent Acquisition Agents, and Employee Experience Agents work together to optimize workforce management.",
            },
            {
              title: "Machine Learning Operations",
              description: "Delivering frictionless machine learning models for use cases, empowering agents to perform at their best, and driving elevated business outcomes.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-kore text-center"
            >
              {card.title === "Customer Care Automation" && (
                <img 
                  src="/custcare.png" 
                  alt="Customer Care Automation" 
                  className="w-full h-55 object-cover rounded-xl mb-4"
                />
              )}
              {card.title === "AI Workforce Management" && (
                <img 
                  src="/aiworkforce.png" 
                  alt="AI Workforce Management" 
                  className="w-full h-55 object-cover rounded-xl mb-4"
                />
              )}
              {card.title === "Machine Learning Operations" && (
                <img 
                  src="/mlops.png" 
                  alt="Machine Learning Operations" 
                  className="w-full h-55 object-cover rounded-xl mb-4"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-small">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-center mb-4"
          >
            The most advanced AI agent platform
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body text-center mb-12"
          >
            Create valuable AI agents and agentic workflows with confidence and ongoing control.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-kore group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h4 className="font-semibold">{feature.title}</h4>
                </div>
                <p className="text-small mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="mt-4 btn-kore-ghost text-sm inline-flex"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
