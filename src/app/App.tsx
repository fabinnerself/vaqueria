import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import type { AppPage, NavigationTarget } from './types/navigation';

const LANDING_SECTIONS = new Set<NavigationTarget>(['inicio', 'productos', 'contacto', 'faq']);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(section: NavigationTarget, delay = 0) {
  if (!LANDING_SECTIONS.has(section)) {
    return;
  }

  window.setTimeout(() => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }, delay);
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('landing');

  const handleNavigation = (target: NavigationTarget) => {
    if (target === 'login' || target === 'register') {
      setCurrentPage(target);
      scrollToTop();
      return;
    }

    if (target === 'home' || target === 'inicio') {
      setCurrentPage('landing');
      scrollToTop();
      return;
    }

    if (currentPage === 'landing') {
      scrollToSection(target, 100);
      return;
    }

    if (LANDING_SECTIONS.has(target)) {
      setCurrentPage('landing');
      scrollToSection(target, 300);
    }
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage onNavigate={handleNavigation} />}
      
      
    </>
  );
}
