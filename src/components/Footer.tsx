import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": ["About Us", "Conferences", "Services", "Gallery", "Contact"],
  Disciplines: ["Medical Sciences", "Engineering", "Life Sciences", "Technology"],
  Resources: ["Submit Abstract", "Speaker Guidelines", "Sponsorship", "FAQs"],
};

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-gradient-gold font-display text-xl font-bold">Scientific Alerts</span>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-sm">
              Organizing world-class international conferences that connect researchers,
              academics, and industry leaders across every scientific discipline.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="glass w-10 h-10 rounded-lg flex items-center justify-center text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Scientific Alerts. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
