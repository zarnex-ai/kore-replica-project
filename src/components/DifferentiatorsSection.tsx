import { motion } from "framer-motion";
import { Zap, Settings, Code, Brain, BadgeCheck } from "lucide-react";

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
    description: "Take control with seamless connection to any AI model, data source, enterprise app, or company infrastructure you need.",
    icon: Code,
  },
  {
    title: "Deep Capabilities",
    description: "An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise ecosystem.",
    icon: Brain,
  },
  {
    title: "Proven Experience",
    description: "We are an AI-first company that has built its technology and success hand-in-hand with global enterprise customers.",
    icon: BadgeCheck,
  },
];

export const DifferentiatorsSection = () => {
  return (
    <section className="section-kore bg-background">
      <div className="container-kore">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Differentiators */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-section mb-8"
            >
              What sets Kore.ai apart
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-kore"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-small">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 mt-6">
              {differentiators.slice(2).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="p-2 rounded-lg bg-background">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-small">{item.description}</p>
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
            className="bg-foreground text-primary-foreground rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg mb-2">Let's make this happen.</p>
            <p className="text-primary-foreground/70 mb-8">
              We're ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-foreground text-foreground font-medium text-sm transition-all hover:opacity-90"
              >
                Request a Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary-foreground/30 text-primary-foreground font-medium text-sm transition-all hover:bg-primary-foreground/10"
              >
                Talk to an expert
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
