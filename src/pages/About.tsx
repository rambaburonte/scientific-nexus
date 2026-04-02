import React from "react";


const AboutPage = () => (
  <section className="container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">About Scientific Nexus</h1>
    <p className="text-lg text-muted-foreground max-w-2xl mb-8">
      Welcome to Scientific Nexus! We connect researchers, scientists, and enthusiasts through global conferences, workshops, and collaborative opportunities. Our mission is to foster innovation and knowledge sharing in the scientific community.
    </p>
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-primary">Our Vision</h2>
        <p className="text-muted-foreground mb-4">To be the leading platform for scientific collaboration, empowering breakthroughs and global connections.</p>
        <h2 className="text-2xl font-semibold mb-2 text-primary">Our Values</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Integrity & Transparency</li>
          <li>Innovation & Excellence</li>
          <li>Inclusivity & Diversity</li>
          <li>Community & Collaboration</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-primary">What We Do</h2>
        <p className="text-muted-foreground mb-2">We organize world-class scientific events, facilitate research partnerships, and provide resources for professional growth. Our team is passionate about making science accessible and impactful for all.</p>
        <ul className="list-disc pl-6 text-muted-foreground mb-2">
          <li>International Conferences & Symposia</li>
          <li>Workshops & Training Sessions</li>
          <li>Networking & Collaboration Platforms</li>
          <li>Research Publication Support</li>
        </ul>
        <p className="text-muted-foreground">Join us in shaping the future of science!</p>
      </div>
    </div>
    <div className="mt-10 bg-muted rounded-lg p-8 shadow">
      <h3 className="text-xl font-semibold mb-2 text-primary">Why Choose Us?</h3>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Expert team with decades of experience in scientific event management</li>
        <li>Global reach and diverse participant base</li>
        <li>Commitment to quality, inclusivity, and innovation</li>
      </ul>
    </div>
  </section>
);

export default AboutPage;
