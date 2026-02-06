import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "AWS",
    description: "The Kore.ai Agent Platform and AI solutions are integrated with AWS services including Amazon Bedrock, Amazon Q and Amazon Connect to accelerate the deployment of AWS AI tools across business use cases.",
    color: "from-orange-500/10 to-yellow-500/10",
    links: [
      { label: "Read more", href: "#" },
      { label: "AWS Marketplace", href: "#" },
    ],
  },
  {
    name: "Microsoft",
    description: "Deploy the Kore.ai Agent Platform and AI solutions within Microsoft environments including Azure AI Foundry, Microsoft Teams, Microsoft 365 Copilot, and Microsoft Copilot Studio.",
    color: "from-blue-500/10 to-cyan-500/10",
    links: [
      { label: "Read more", href: "#" },
      { label: "Azure Marketplace", href: "#" },
    ],
  },
];

export const PartnersSection = () => {
  return (
    <section className="section-kore section-kore-light">
      <div className="container-kore">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-card mb-4"
          >
            Strategic partners: Microsoft and AWS
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            We work with the world's largest platforms. Check your provider for more information or start building via their marketplaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 bg-gradient-to-br ${partner.color} border border-border/50`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center">
                  <span className="font-bold text-lg">{partner.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-semibold">{partner.name}</h4>
              </div>
              <p className="text-body mb-6">{partner.description}</p>
              <div className="flex flex-wrap gap-4">
                {partner.links.map((link) => (
                  <a key={link.label} href={link.href} className="btn-kore-ghost text-sm">
                    {link.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
