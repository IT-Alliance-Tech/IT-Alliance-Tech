"use client";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import IndustriesSection from "../components/IndustriesSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialSection";
import WhyChooseSection from "../components/WhyChooseSection";
import LogoSection from "../components/LogoSection"; // ✅ New Import

import "../styles/homePage.css";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div className="bgImgSection1">
        <AboutSection />
        <BannerSection />
      </div>

      <div className="bgImgSection2">
        <div className="bgImgSection2a">
          <IndustriesSection />
        </div>
        <div className="bgImgSection2b">
          <ServicesSection />
        </div>
        <ProcessSection />
      </div>

      <div className="bgImgSection3">
        <div className="bgImgSection4">
          <TestimonialsSection />
        </div>

        {/* ✅ Added Logo Section just before Contact Section */}
        <WhyChooseSection />
        <LogoSection />
        <ContactSection />
      </div>
    </main>
  );
}
