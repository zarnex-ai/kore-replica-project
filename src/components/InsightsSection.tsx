import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Parallel Agent Processing",
    date: "January 16, 2026",
    readTime: "6 Min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    link: "#",
  },
  {
    title: "The Future of Enterprise AI Agents",
    date: "January 10, 2026",
    readTime: "8 Min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    link: "#",
  },
  {
    title: "Building Agentic RAG Solutions",
    date: "January 5, 2026",
    readTime: "5 Min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop",
    link: "#",
  },
];

export const InsightsSection = () => {
  return (
    <section className="section-kore bg-background">
      <div className="container-kore">
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section"
          >
            AI Insights
          </motion.h2>
          <a href="#" className="btn-kore-ghost hidden sm:inline-flex">
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.a
              key={insight.title}
              href={insight.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-kore overflow-hidden p-0"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{insight.date}</span>
                  <span>•</span>
                  <span>{insight.readTime}</span>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-muted-foreground transition-colors">
                  {insight.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <a href="#" className="btn-kore-ghost">
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
