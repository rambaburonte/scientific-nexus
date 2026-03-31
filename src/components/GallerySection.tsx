import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryItems = [
  { title: "Singapore Summit 2025", span: "md:col-span-2" },
  { title: "Berlin Engineering Forum", span: "" },
  { title: "Boston Genomics Congress", span: "" },
  { title: "Tokyo Tech Summit", span: "md:col-span-2" },
  { title: "Vienna Medical Conference", span: "" },
  { title: "Dubai Innovation Forum", span: "" },
  { title: "London AI Symposium", span: "md:col-span-2" },
];

const colors = [
  "from-primary/20 to-accent/10",
  "from-accent/20 to-primary/10",
  "from-primary/15 to-accent/15",
  "from-accent/15 to-primary/15",
  "from-primary/10 to-accent/20",
  "from-accent/10 to-primary/20",
  "from-primary/20 to-accent/5",
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Highlights</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Event <span className="text-gradient-gold">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.span} relative group cursor-pointer overflow-hidden rounded-xl`}
            >
              <div className={`w-full h-48 md:h-56 bg-gradient-to-br ${colors[i]} glass flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full gradient-gold mx-auto mb-3 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="font-display font-bold text-primary-foreground text-lg">{i + 1}</span>
                  </div>
                  <p className="font-display font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
