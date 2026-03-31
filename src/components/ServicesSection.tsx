import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Mic, BookOpen, Settings } from "lucide-react";

const services = [
  {
    icon: CalendarCheck,
    title: "Conference Management",
    description: "End-to-end conference planning and execution, from venue selection to post-event analytics, ensuring seamless world-class events.",
  },
  {
    icon: Settings,
    title: "Event Planning",
    description: "Strategic event design including scheduling, logistics coordination, attendee management, and on-site operations for flawless delivery.",
  },
  {
    icon: Mic,
    title: "Speaker Coordination",
    description: "Curating and managing distinguished keynote speakers, panelists, and session chairs from leading institutions worldwide.",
  },
  {
    icon: BookOpen,
    title: "Publishing & Journals",
    description: "Peer-reviewed publication support, conference proceedings, and partnerships with leading academic journals for maximum research impact.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for organizing impactful scientific events that drive knowledge exchange and academic collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold transition-shadow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
