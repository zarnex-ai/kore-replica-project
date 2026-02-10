import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Users, Target } from "lucide-react";

const insights = [
  {
    title: "AI Adoption Trends",
    description: "Latest insights on how enterprises are adopting AI technologies and the impact on business outcomes.",
    icon: TrendingUp,
    stats: "85% of enterprises",
    statLabel: "plan to increase AI investment",
  },
  {
    title: "Agent Performance Analytics",
    description: "Deep dive into AI agent performance metrics and optimization strategies for enterprise deployments.",
    icon: BarChart3,
    stats: "3.2x ROI",
    statLabel: "average return on AI agents",
  },
  {
    title: "User Experience Insights",
    description: "Understanding how AI agents enhance user experiences and drive customer satisfaction.",
    icon: Users,
    stats: "94% satisfaction",
    statLabel: "with AI-powered interactions",
  },
  {
    title: "Future of Enterprise AI",
    description: "Predictions and strategies for the next generation of AI-powered business transformation.",
    icon: Target,
    stats: "2025",
    statLabel: "AI transformation milestone",
  },
];

export const InsightsSection = () => {
  return (
    <section className="section-kore bg-background">
      <div className="container-kore">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            AI Insights & Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            Stay ahead with the latest trends, data, and insights in enterprise AI.
          </motion.p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-kore group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <insight.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                  <p className="text-small text-muted-foreground mb-4">{insight.description}</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{insight.stats}</div>
                    <div className="text-sm text-muted-foreground">{insight.statLabel}</div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="mt-4 btn-kore-ghost text-sm inline-flex"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;