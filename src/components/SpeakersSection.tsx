import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const speakers = [
  { name: "Dr. Sarah Chen", role: "AI & Healthcare", org: "MIT" },
  { name: "Prof. James Mitchell", role: "Quantum Computing", org: "Oxford University" },
  { name: "Dr. Amara Osei", role: "Genomics Research", org: "WHO" },
  { name: "Prof. Kenji Tanaka", role: "Robotics Engineering", org: "University of Tokyo" },
];

const partners = [
  "World Health Organization", "IEEE", "Nature Publishing", "Springer",
  "Elsevier", "MIT", "Stanford University", "Oxford University",
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speakers" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Our Network</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient-gold">Speakers</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover-lift"
            >
              <div className="w-20 h-20 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {s.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display font-semibold mb-1">{s.name}</h3>
              <p className="text-sm text-primary mb-1">{s.role}</p>
              <p className="text-xs text-muted-foreground">{s.org}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-bold text-center mb-10">
            Trusted <span className="text-gradient-gold">Partners</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p) => (
              <div key={p} className="glass rounded-xl p-5 text-center hover-lift">
                <span className="text-sm font-medium text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
