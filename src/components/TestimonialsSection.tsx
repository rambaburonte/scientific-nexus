import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Scientific Alerts orchestrated one of the most impactful conferences I've attended. The caliber of speakers and the seamless organization set a new standard for academic events.",
    name: "Dr. Elena Rossi",
    role: "Director of Research, European Institute of Technology",
  },
  {
    text: "Their attention to detail and commitment to academic excellence is unparalleled. The networking opportunities alone made it worth attending from across the globe.",
    name: "Prof. David Kumar",
    role: "Department Chair, Stanford Medical School",
  },
  {
    text: "From abstract submission to final publication, every step was handled with professionalism. Scientific Alerts truly understands what researchers need.",
    name: "Dr. Fatima Al-Rashid",
    role: "Lead Scientist, King Abdullah University",
  },
  {
    text: "We've partnered with Scientific Alerts for three consecutive years. Their ability to bring together diverse scientific communities is exceptional.",
    name: "Prof. Michael Johansson",
    role: "Dean of Engineering, ETH Zurich",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            What <span className="text-gradient-gold">Leaders</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 text-center relative"
        >
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
            "{testimonials[current].text}"
          </p>
          <div>
            <p className="font-display font-semibold text-lg">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
