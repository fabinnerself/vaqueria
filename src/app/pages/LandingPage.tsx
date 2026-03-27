import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContactCards from '../components/ContactCards';
import ProductCards from '../components/ProductCards';
import FAQSection from '../components/FAQSection';
import type { NavigationTarget } from '../types/navigation';

interface LandingPageProps {
  onNavigate: (section: NavigationTarget) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="max-w-[900px] mx-auto bg-white shadow-sm">
        <Header onNavigate={onNavigate} />
        <main>
          <HeroSection />          
          <ProductCards />
          <FAQSection />
          <ContactCards />
        </main>
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
