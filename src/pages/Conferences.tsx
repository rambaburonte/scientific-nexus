import React from "react";


const ConferencesPage = () => (
  <section className="container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">Conferences & Events</h1>
    <p className="text-muted-foreground mb-8 max-w-2xl">Stay updated on our upcoming and past events. We bring together the brightest minds for knowledge exchange, networking, and inspiration.</p>
    <ul className="space-y-4 text-lg text-muted-foreground max-w-2xl">
      <li><span className="font-semibold text-primary">International Science Summit 2026:</span> A global gathering of leading researchers and innovators. <span className="block text-xs text-muted-foreground">June 10-12, 2026 | Virtual & Onsite</span></li>
      <li><span className="font-semibold text-primary">Annual Researcher Meetup:</span> Connect, share, and collaborate with peers from around the world. <span className="block text-xs text-muted-foreground">September 2026 | Berlin, Germany</span></li>
      <li><span className="font-semibold text-primary">Emerging Technologies Workshop:</span> Hands-on sessions exploring the latest scientific advancements. <span className="block text-xs text-muted-foreground">March 2026 | Online</span></li>
      <li><span className="font-semibold text-primary">Young Scientists Forum:</span> Empowering the next generation of scientific leaders. <span className="block text-xs text-muted-foreground">December 2026 | New York, USA</span></li>
    </ul>
    <div className="mt-10 text-center">
      <span className="text-muted-foreground">Want to host a conference? <a href="/contact" className="text-primary underline">Contact us</a> for partnership opportunities.</span>
    </div>
  </section>
);

export default ConferencesPage;
