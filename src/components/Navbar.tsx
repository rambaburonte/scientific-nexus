import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Conferences", href: "/conferences" },
  { label: "Services", href: "/services" },
  // { label: "Speakers", href: "/speakers" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-gradient-gold font-display text-xl font-bold tracking-tight">Scientific Alerts</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleNav}
              className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.href ? "text-primary" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={handleNav}
            className="gradient-gold text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-nav overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-foreground/80 hover:text-foreground py-2 text-sm font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contact")}
                className="gradient-gold text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold mt-2"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
