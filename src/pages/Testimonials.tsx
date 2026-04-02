
import React from "react";

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
  // Additional testimonials for the inner page
  {
    text: "The event app and digital resources made participation seamless, even for remote attendees. I felt included and engaged throughout.",
    name: "Dr. Priya Menon",
    role: "AI Researcher, National University of Singapore",
  },
  {
    text: "Workshops were hands-on and practical. The team truly cares about advancing science.",
    name: "Dr. Maria Gomez",
    role: "Senior Lecturer, University of Buenos Aires",
  },
  {
    text: "An amazing platform for scientific collaboration! I made invaluable connections and learned so much.",
    name: "Dr. Jane Smith",
    role: "Postdoc Fellow, MIT",
  },
  {
    text: "The conferences are always insightful and well-organized. Highly recommended for anyone in science!",
    name: "Prof. Alan Lee",
    role: "Professor of Physics, University of Toronto",
  },
  {
    text: "I was impressed by the diversity of topics and the inclusivity of the event. Looking forward to next year!",
    name: "Dr. Samuel Okafor",
    role: "Biochemist, University of Lagos",
  },
  {
    text: "The poster sessions and networking lounges were a highlight. I left with new ideas and collaborators.",
    name: "Prof. Linda Chen",
    role: "Head of Department, Tsinghua University",
  },
];

const TestimonialsPage = () => (
  <section className="container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">Testimonials</h1>
    <div className="space-y-8 max-w-2xl">
      {testimonials.map((t, idx) => (
        <blockquote
          key={idx}
          className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-background/60 rounded-lg shadow-sm py-4"
        >
          "{t.text}"
          <span className="block mt-2 font-semibold text-foreground">
            – {t.name}
            {t.role && <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>}
          </span>
        </blockquote>
      ))}
    </div>
    <div className="mt-10 text-center">
      <span className="text-muted-foreground">
        Want to share your experience?{' '}
        <a href="/contact" className="text-primary underline">Send us your testimonial!</a>
      </span>
    </div>
  </section>
);

export default TestimonialsPage;
