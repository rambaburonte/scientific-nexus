import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConferencesSection from "@/components/ConferencesSection";
import ServicesSection from "@/components/ServicesSection";
import SpeakersSection from "@/components/SpeakersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ConferencesSection />
      <ServicesSection />
      <SpeakersSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </div>
   
  );
};

export default Index;
