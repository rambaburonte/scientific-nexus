import React from "react";


const SpeakersPage = () => (
  <section className="container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">Speakers</h1>
    <p className="text-muted-foreground mb-8 max-w-2xl">Meet the thought leaders, innovators, and experts who have inspired our audiences. Our speakers represent a diverse range of disciplines and bring unique perspectives to every event.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Replace with dynamic speaker cards as needed */}
      <div className="bg-muted rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="font-semibold text-lg text-primary mb-1">Dr. Jane Smith</h3>
        <p className="text-muted-foreground">Astrophysicist, Keynote Speaker</p>
        <span className="text-xs text-muted-foreground mt-2">"Exploring the Universe: New Frontiers"</span>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="font-semibold text-lg text-primary mb-1">Prof. Alan Lee</h3>
        <p className="text-muted-foreground">AI Researcher, Panelist</p>
        <span className="text-xs text-muted-foreground mt-2">"AI for Social Good"</span>
      </div>
      <div className="bg-muted rounded-lg p-6 shadow flex flex-col items-center">
        <h3 className="font-semibold text-lg text-primary mb-1">Dr. Maria Gomez</h3>
        <p className="text-muted-foreground">Biotech Innovator, Workshop Leader</p>
        <span className="text-xs text-muted-foreground mt-2">"Biotech Breakthroughs in 2026"</span>
      </div>
    </div>
    <div className="mt-10 text-center">
      <span className="text-muted-foreground">Interested in speaking? <a href="/contact" className="text-primary underline">Contact us</a> to join our roster!</span>
    </div>
  </section>
);

export default SpeakersPage;
