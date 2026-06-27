import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  solutions: {
    title: "AI Solutions",
    links: [
      { label: "AI Products", href: "#solutions" },
      { label: "Autonomous Agents", href: "#solutions" },
      { label: "Future Technology", href: "#solutions" },
      { label: "Enterprise AI", href: "#solutions" },
    ],
  },
  platform: {
    title: "Platform",
    links: [
      { label: "Agent Orchestration", href: "#ecosystem" },
      { label: "Search + Data AI", href: "#ecosystem" },
      { label: "AI Security", href: "#ecosystem" },
      { label: "Integrations", href: "#ecosystem" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "API Reference", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Partners", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "http://linkedin.com/company/zarnexinc", label: "LinkedIn" },
  { icon: Github, href: "http://github.com/zarnexinc", label: "Github" },
  { icon: Mail, href: "mailto:zarnexsolutions@gmail.com", label: "Email" },
];

export const ZarnexFooter = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="contact"
      style={{
        background: '#000000',
        borderTop: '1px solid var(--zarnex-border)',
      }}
    >
      {/* CTA Banner */}
      <div className="container-zarnex py-16">
        <div
          className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 200, 255, 0.08) 0%, rgba(0, 100, 200, 0.05) 100%)',
            border: '1px solid rgba(0, 200, 255, 0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0, 200, 255, 0.05), transparent 70%)',
            }}
          />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 relative z-10">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/50 mb-8 max-w-lg mx-auto relative z-10">
            Join thousands of enterprises already using Zarnex.AI to accelerate their AI journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="#" className="btn-primary">
              GET STARTED
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="btn-outline">
              TALK TO EXPERT
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container-zarnex pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-6">
              <img
                src="/zarnex-logo.png"
                alt="Zarnex.ai"
                className="h-8 w-auto"
              />
              <span className="font-display font-bold text-base lg:text-lg tracking-wider text-white hidden sm:block">
                Zarnex.ai
              </span>
            </a>
            <p className="text-sm text-white/40 mb-6 max-w-xs leading-relaxed">
              Building next-generation AI solutions for enterprises worldwide.
            </p>
            <div className="text-xs text-white/30 mb-6">
              <span className="font-semibold text-white/50">Reach out:</span>{' '}
              zarnexsolutions@gmail.com
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    border: '1px solid var(--zarnex-border)',
                    background: 'rgba(0, 200, 255, 0.03)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--zarnex-cyan)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 200, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--zarnex-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <social.icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-xs font-bold tracking-wider text-white/80 mb-4 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-white/35 hover:text-[var(--zarnex-cyan)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8"
          style={{ borderTop: '1px solid var(--zarnex-border)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25 tracking-wide">
              © {new Date().getFullYear()} Zarnex.ai, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ZarnexFooter;
