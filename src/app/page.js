"use client";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import VideoSection from "../components/VideoSection";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white">
      <section id="home">
        <Hero />
      </section>

      <VideoSection
        videoSrc="/videos/process.mp4"
        title="Engineering Excellence"
        subtitle="Watch our state-of-the-art biodiesel production process in action."
      />

      <WhyUs />

      <ProductSection />

      <AboutSection />

      <ContactSection />
    </div>
  );
}