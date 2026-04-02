import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const categories = ["All", "Medical", "Engineering", "Life Sciences", "Technology"];

const conferences = [
  { title: "World Scientific Summit on Renewable and Sustainable Energy (WSSRSE-2026)", date: "Nov 23–25, 2026", location: "Berlin, Germany", category: "Engineering", status: "upcoming" },
  // Added from user request
  { title: "GLOBAL VIRTUAL SUMMIT ON RENEWABLE ENERGY AND SUSTAINABLE ENERGY", date: "July 15-16, 2026", location: "Webinar", category: "Engineering", status: "upcoming" },
  { title: "GLOBAL VIRTUAL SUMMIT ON FOOD INNOVATION AND NUTRITIONAL SCIENCE", date: "July 16-17, 2026", location: "Webinar", category: "Life Sciences", status: "upcoming" },
  { title: "GLOBAL VIRTUAL SUMMIT ON POWER ENERGY AND ENERGY ENGINEERING", date: "July 15-16, 2026", location: "Webinar", category: "Engineering", status: "upcoming" },
  { title: "GLOBAL VIRTUAL SUMMIT ON MATERIAL SCIENCE AND NANOTECHNOLOGY", date: "July 18-19, 2026", location: "Webinar", category: "Technology", status: "upcoming" },
];

const ConferencesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? conferences : conferences.filter((c) => c.category === active);

  return (
    <section id="conferences" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Events</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Upcoming <span className="text-gradient-gold">Conferences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated lineup of international conferences spanning medicine, engineering, life sciences, and technology.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "gradient-gold text-primary-foreground shadow-gold"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((conf, i) => (
            <motion.div
              key={conf.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {conf.category}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {conf.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                {conf.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                {conf.location}
              </div>
              <div className="flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;
