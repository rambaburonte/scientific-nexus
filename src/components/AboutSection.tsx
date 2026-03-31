import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Award, Users, Lightbulb } from "lucide-react";

const features = [
  { icon: Globe, title: "Global Reach", description: "Events hosted across 120+ countries, connecting professionals worldwide." },
  { icon: Award, title: "Academic Excellence", description: "Partnered with top universities and research institutions globally." },
  { icon: Users, title: "Expert Network", description: "Access to 10,000+ keynote speakers and industry thought leaders." },
  { icon: Lightbulb, title: "Innovation Driven", description: "Fostering breakthroughs through interdisciplinary collaboration." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Who We Are</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Pioneering <span className="text-gradient-gold">Scientific Collaboration</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Scientific Alerts is a premier international organization dedicated to organizing
            world-class professional conferences, academic events, and scientific summits
            that bring together the brightest minds across every discipline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To accelerate scientific progress by creating platforms where researchers,
              academics, and industry leaders can share knowledge, forge partnerships, and
              drive innovation that transforms our world.
            </p>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every groundbreaking idea finds its stage — where scientific
              discovery knows no borders, and collaboration fuels the solutions to
              humanity's greatest challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <div key={f.title} className="glass rounded-xl p-6 hover-lift">
                <f.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-display font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
