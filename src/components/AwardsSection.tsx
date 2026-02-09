import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const awards = [
  {
    id: "forrester",
    label: "Cognitive Search Platforms",
    title: "Zarnex.ai named a leader in the Forrester Wave™: Cognitive Search Platforms, 2025",
    description:
      "In its evaluation of 14 vendors on 21 criteria, Forrester recognized Zarnex.ai as a leader in the Forrester Wave™: Cognitive Search Platforms 2025 report.",
    link: "#",
  },
  {
    id: "gartner",
    label: "Conversational AI Platforms",
    title: "Zarnex.ai named a leader in Gartner® Magic Quadrant™",
    description:
      "The Gartner® Magic Quadrant™ for Conversational AI Platforms now includes conversational AI agents and tools increasingly leveraging generative AI.",
    link: "#",
  },
  {
    id: "genai-apps",
    label: "Generative AI Applications",
    title: "Gartner® Emerging Market Quadrant leader for GenAI applications",
    description:
      "The Gartner® EMQ for Generative AI Productivity and AI Knowledge Management Apps report covers applications that use AI agents to accelerate workflows.",
    link: "#",
  },
  {
    id: "genai-eng",
    label: "Generative AI Engineering",
    title: "Gartner® Emerging Market Quadrant leader for GenAI engineering",
    description:
      "The Gartner® eMQ for Generative AI Engineering report covers the complete agentic application lifecycle across multiple agents.",
    link: "#",
  },
];

export const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState("forrester");
  const activeAward = awards.find((a) => a.id === activeTab)!;

  return (
    <section className="section-kore section-kore-light">
      <div className="container-kore">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border">
          {awards.map((award) => (
            <button
              key={award.id}
              onClick={() => setActiveTab(award.id)}
              className={`tab-kore ${
                activeTab === award.id ? "tab-kore-active" : ""
              }`}
            >
              {award.label}
            </button>
          ))}
        </div>

        {/* Active Award Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="heading-card mb-4">{activeAward.title}</h3>
            <p className="text-body mb-6">{activeAward.description}</p>
            <a href={activeAward.link} className="btn-kore-primary">
              Access the Report
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-64 bg-gradient-to-br from-muted to-background rounded-2xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Award Chart Placeholder
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
