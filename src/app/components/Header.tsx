import Image from 'next/image';
import imgLogoScrm2 from "../../assets/logo_vaqueria.png";
import type { NavigationItem, NavigationTarget } from '../types/navigation';

const NAV_ITEMS: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', target: 'inicio' },
  { id: 'productos', label: 'Productos', target: 'productos' },
  { id: 'contacto', label: 'Contacto', target: 'contacto' },
  { id: 'faq', label: 'Preguntas', target: 'faq' },
];

interface HeaderProps {
  onNavigate: (section: NavigationTarget) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
      <div className="page-shell">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-3">
            <Image 
              src={imgLogoScrm2} 
              alt="La Vaquería" 
              className="h-[42px] w-[63px] md:h-[52px] md:w-[78px] object-contain" 
              width={78} 
              height={52} 
            />
            <h1 className="font-semibold text-[#222] text-[17px] md:text-[19px] leading-[28px] hidden sm:block" style={{ fontFamily: "'Playfair Display', serif" }}>
              La Vaquería
            </h1>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <button 
                key={item.id} 
                onClick={() => onNavigate(item.target)} 
                className="header-link-light"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors" 
              onClick={() => { document.getElementById('mobile-menu')?.classList.toggle('hidden'); }}
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <nav id="mobile-menu" className="hidden lg:hidden pb-5 pt-3">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.id} 
                onClick={() => onNavigate(item.target)} 
                className="header-link-light text-left py-2 px-1 hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
