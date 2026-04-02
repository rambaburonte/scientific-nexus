import React from "react";


const ServicesPage = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">Our Services</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <ul className="space-y-4 text-lg text-muted-foreground max-w-2xl">
        <li><span className="font-semibold text-primary">Conference Organization & Management:</span> End-to-end planning, logistics, and execution for impactful scientific events.</li>
        <li><span className="font-semibold text-primary">Speaker Coordination:</span> Sourcing, inviting, and managing renowned experts and keynote speakers.</li>
        <li><span className="font-semibold text-primary">Workshops & Seminars:</span> Hands-on learning and skill-building sessions for all experience levels.</li>
        <li><span className="font-semibold text-primary">Networking Events:</span> Facilitating meaningful connections among researchers and professionals.</li>
        <li><span className="font-semibold text-primary">Research Collaboration Platforms:</span> Tools and support for collaborative projects and knowledge sharing.</li>
      </ul>
      <div className="flex flex-col gap-4">
        <div className="bg-muted rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary">Custom Solutions</h2>
          <p className="text-muted-foreground">We tailor our services to meet the unique needs of your organization or event. Contact us for bespoke packages.</p>
        </div>
        <div className="bg-muted rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary">Consulting</h2>
          <p className="text-muted-foreground">Our experienced team offers strategic advice for maximizing the impact of your scientific initiatives.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesPage;
