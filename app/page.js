import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BannerSection from '../components/BannerSection';
import IndustriesSection from '../components/IndustriesSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      {/* Added a comment */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BannerSection />
      <IndustriesSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}