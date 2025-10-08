import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BannerSection from "../components/BannerSection";
import IndustriesSection from "../components/IndustriesSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import "../styles/homePage.css";

export default function Home() {
  return (
    <main>
      {/* Added a comment */}

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
      </div>
      <div className="bgImgSection3 ">
        <div className="bgImgSection4">
          <PricingSection />
        </div>
        <ContactSection />
      </div>
    </main>
  );
}
