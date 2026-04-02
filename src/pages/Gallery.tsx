import React from "react";


const GalleryPage = () => (
  <section className="container mx-auto py-20 px-4">
    <h1 className="text-4xl font-bold mb-6 text-primary">Gallery</h1>
    <p className="text-muted-foreground mb-8 max-w-2xl">
      Explore highlights from our recent conferences, workshops, and networking events. Our gallery showcases the vibrant community and inspiring moments that define Scientific Nexus.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Replace with dynamic images as needed */}
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Conference 2025</span>
        <span className="text-xs text-muted-foreground">Global Science Summit</span>
      </div>
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Workshop Session</span>
        <span className="text-xs text-muted-foreground">Hands-on Learning</span>
      </div>
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Networking Night</span>
        <span className="text-xs text-muted-foreground">Building Connections</span>
      </div>
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Panel Discussion</span>
        <span className="text-xs text-muted-foreground">Expert Insights</span>
      </div>
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Award Ceremony</span>
        <span className="text-xs text-muted-foreground">Celebrating Excellence</span>
      </div>
      <div className="bg-muted rounded-lg h-48 flex flex-col items-center justify-center shadow">
        <span className="font-semibold text-primary mb-2">Poster Presentations</span>
        <span className="text-xs text-muted-foreground">Innovative Research</span>
      </div>
    </div>
    <div className="mt-10 text-center">
      <span className="text-muted-foreground">Want your event featured? <a href="/contact" className="text-primary underline">Contact us</a> with your photos!</span>
    </div>
  </section>
);

export default GalleryPage;
