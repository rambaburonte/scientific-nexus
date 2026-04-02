import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Reach Out</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our conferences or interested in partnership opportunities? We'd love to hear from you.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email Us", value: "contact@scientificalerts.com" }
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-6 flex items-start gap-4 hover-lift">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 glass rounded-xl p-8"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Dr. Jane Smith"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="jane@university.edu"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="Conference Inquiry"
                required
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                placeholder="Tell us about your inquiry..."
                required
              />
            </div>
            <button
              type="submit"
              className="gradient-gold text-primary-foreground px-8 py-3 rounded-lg text-sm font-semibold shadow-gold hover:opacity-90 transition-all flex items-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
