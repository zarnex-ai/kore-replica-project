import { motion } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "ADVANCED AI",
    description: "State-of-the-art AI models & systems.",
  },
  {
    icon: Layers,
    title: "SCALABLE SOLUTIONS",
    description: "Built to scale with your business.",
  },
  {
    icon: ShieldCheck,
    title: "SECURE & RELIABLE",
    description: "Enterprise-grade security and reliability.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION DRIVEN",
    description: "Pushing boundaries every day.",
  },
];

const stats = [
  { value: "50+", label: "COUNTRIES" },
  { value: "200+", label: "ENTERPRISES" },
  { value: "1M+", label: "USERS" },
];

export const WhyChooseSection = () => {
  return (
    <section
      id="about"
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            WHY CHOOSE ZARNEX.AI
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="icon-box mb-4 w-12 h-12 rounded-xl">
                  <feature.icon className="w-5 h-5" style={{ color: 'var(--zarnex-cyan)' }} />
                </div>
                <h4 className="font-display text-[10px] sm:text-xs font-bold tracking-wider text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Global Impact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dark world-map-bg"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.9) 0%, rgba(5, 15, 35, 0.95) 100%)',
            }}
          >
            <h3 className="font-display text-sm font-bold tracking-wider text-white mb-8 relative z-10">
              GLOBAL IMPACT
            </h3>

            {/* World map dots visualization */}
            <div className="relative h-40 mb-8 z-10">
              <svg viewBox="0 0 400 180" className="w-full h-full opacity-30">
                {/* Simplified world map dots */}
                {Array.from({ length: 80 }).map((_, i) => {
                  const x = 30 + (i % 20) * 18 + (Math.random() - 0.5) * 8;
                  const y = 20 + Math.floor(i / 20) * 40 + (Math.random() - 0.5) * 15;
                  const isHighlight = i % 7 === 0;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r={isHighlight ? 2.5 : 1.2}
                      fill={isHighlight ? 'var(--zarnex-cyan)' : 'rgba(0, 200, 255, 0.25)'}
                      opacity={isHighlight ? 0.9 : 0.5}
                    />
                  );
                })}
                {/* Connection lines */}
                <line x1="70" y1="50" x2="200" y2="80" stroke="rgba(0, 200, 255, 0.15)" strokeWidth="0.5" />
                <line x1="200" y1="80" x2="320" y2="40" stroke="rgba(0, 200, 255, 0.15)" strokeWidth="0.5" />
                <line x1="150" y1="100" x2="280" y2="120" stroke="rgba(0, 200, 255, 0.1)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="text-center"
                >
                  <div className="stat-value mb-1">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.2em] text-white/40 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
