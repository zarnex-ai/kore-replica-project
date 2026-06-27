import { motion } from "framer-motion";
import { Zap, Settings, Code, Brain, BadgeCheck, ArrowRight } from "lucide-react";

const differentiators = [
  {
    title: "Speed",
    description: "Faster time-to-value with our enterprise AI solutions and AI agent marketplace.",
    icon: Zap,
  },
  {
    title: "Control",
    description: "The power of a standardized platform built for the demands of the enterprise.",
    icon: Settings,
  },
  {
    title: "Flexibility",
    description: "Seamless connection to any AI model, data source, enterprise app, or infrastructure.",
    icon: Code,
  },
  {
    title: "Deep Capabilities",
    description: "An agent platform with the depth to adapt to every interaction and workflow.",
    icon: Brain,
  },
  {
    title: "Proven Experience",
    description: "AI-first company built hand-in-hand with global enterprise customers.",
    icon: BadgeCheck,
  },
];

export const DifferentiatorsSection = () => {
  return (
    <section
      id="careers"
      className="section-zarnex"
      style={{ background: '#000000' }}
    >
      <div className="container-zarnex">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="section-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                WHAT SETS US APART
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight"
            >
              Why{' '}
              <span style={{ color: 'var(--zarnex-cyan)' }}>Zarnex.AI</span>{' '}
              Stands Apart
            </motion.h2>

            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/[0.02] group"
                  style={{ border: '1px solid transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 200, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div className="icon-box w-10 h-10 rounded-lg flex-shrink-0">
                    <item.icon className="w-4 h-4" style={{ color: 'var(--zarnex-cyan)' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1 tracking-wide">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.08) 0%, rgba(0, 50, 100, 0.1) 100%)',
              border: '1px solid rgba(0, 200, 255, 0.15)',
            }}
          >
            {/* Background glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0, 200, 255, 0.08), transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                Ready to get started?
              </h3>
              <p className="text-lg text-white/60 mb-2">Let's make this happen.</p>
              <p className="text-white/35 mb-8">
                We're ready when you are. Transform your business with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="btn-outline">
                  Talk to an expert
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
