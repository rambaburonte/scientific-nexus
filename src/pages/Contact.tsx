import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { sendContactEmail } from "@/lib/brevo";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await sendContactEmail(form);
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again or contact us directly.");
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient-teal">Reach Out</span>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us using the form below or email us at{" "}
            <a href="mailto:contact@scientificalerts.com" className="text-primary underline">
              contact@scientificalerts.com
            </a>
            . Our office is located at 124PT NO, 209 Sanjaya Main Road, HYDERABAD TELANGANA-500081.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-xl p-8 max-w-2xl mx-auto"
        >
          <div className="space-y-6">
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
            <div>
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
            {submitMessage && (
              <div className={`p-4 rounded-lg text-sm ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="gradient-gold text-primary-foreground px-8 py-3 rounded-lg text-sm font-semibold shadow-gold hover:opacity-90 transition-all flex items-center gap-2 w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactPage;
