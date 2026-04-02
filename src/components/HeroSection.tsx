import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal mb-6">
            International Scientific Conferences
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Connecting Global Minds Through{" "}
            <span className="text-gradient-gold">Scientific Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering researchers, academics, and industry leaders to share groundbreaking
            discoveries at world-class conferences across every scientific discipline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#conferences")}
            className="gradient-gold text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold shadow-gold hover:opacity-90 transition-all duration-300"
          >
            Explore Conferences
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="glass text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-secondary transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex justify-center gap-12 md:gap-20 text-center"
        >
          {[
            { value: "15+", label: "Conferences" },
            { value: "60+", label: "Countries" },
            { value: "80+", label: "Delegates" },
            { value: "100+", label: "Speakers" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
