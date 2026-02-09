import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const ZarnexLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="75" viewBox="0 0 75 20" fill="none">
    <path d="M71.3463 4.96191H68.6133V14.707H71.3463V4.96191Z" fill="currentColor"/>
    <path d="M52.5129 14.707C51.3844 14.707 50.4551 15.5988 50.4551 16.7649C50.4551 17.9309 51.3844 18.8227 52.5129 18.8227C53.6414 18.8227 54.5707 17.9309 54.5707 16.7649C54.5707 15.5988 53.6744 14.707 52.5129 14.707Z" fill="currentColor"/>
    <path d="M63.413 4.99408V5.75097C62.68 5.25739 61.813 4.99408 60.7469 4.99408C58.1469 4.99408 56.0469 7.13448 56.0469 9.86662C56.0469 12.5988 58.1469 14.7061 60.7469 14.7061C61.813 14.7061 62.68 14.4098 63.413 13.9492V14.7061H66.1461V4.99316H63.413V4.99408Z" fill="currentColor"/>
    <path d="M8.19459 11.6085L13.0974 6.34509H8.53955L3.66334 11.6351V0.879883H0V19.0719H3.66334V16.4397L5.69456 14.2892L9.03955 19.0719H13.6497L8.19459 11.6085Z" fill="currentColor"/>
  </svg>
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
