import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const ZarnexLogo = () => (
  <img
    src="/zarnex.ai-logo-bw-.png"
    alt="Zarnex.ai Logo"
    className="h-15 w-auto"
  />
);

const footerLinks = {
  solutions: {
    title: "AI Solutions",
    links: [
      { label: "AI for Work", href: "#" },
      { label: "AI for Service", href: "#" },
      { label: "AI for Process", href: "#" },
      { label: "Industries", href: "#" },
    ],
  },
  platform: {
    title: "Agent Platform",
    links: [
      { label: "Platform Overview", href: "#" },
      { label: "Multi-Agent Orchestration", href: "#" },
      { label: "Search + Data AI", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Security & Governance", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "AI Insights", href: "#" },
      { label: "Customer Stories", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export const ZarnexFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-kore py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <ZarnexLogo />
            </a>
            <p className="text-sm text-primary-foreground/70 mb-6 max-w-xs">
              Reimagine the enterprise with AI. The world's leading enterprises trust Zarnex.ai.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Zarnex.ai, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ZarnexFooter;
