import Image from 'next/image';
import imgLogoScrm2 from "../../assets/logo_vaqueria.png";
import type { NavigationItem, NavigationTarget } from '../types/navigation';

const NAV_ITEMS: NavigationItem[] = [
  { id: 'inicio', label: 'Inicio', target: 'inicio' },
  { id: 'productos', label: 'Productos', target: 'productos' },
  { id: 'contacto', label: 'Contacto', target: 'contacto' },
  { id: 'faq', label: 'FAQ', target: 'faq' },
  
];

interface HeaderProps {
  onNavigate: (section: NavigationTarget) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="section-shell bg-white sticky top-0 z-50">
      <div className="page-shell">
        <div className="flex items-center justify-between h-[69px]">
          <div className="flex items-center gap-2 md:gap-4">
            <Image src={imgLogoScrm2} alt="Startup CRM" className="h-[40px] w-[60px] md:h-[56px] md:w-[84px] object-contain" width={84} height={56} />
            <h1 className="font-semibold text-[#222] text-[16px] md:text-[18px] leading-[28px] hidden sm:block">La Vaquería Productos Lácteos</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => onNavigate(item.target)} className={`link_${item.id} header-link-light`}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
        
            <button className="lg:hidden p-2" onClick={() => { document.getElementById('mobile-menu')?.classList.toggle('hidden'); }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <nav id="mobile-menu" className="hidden lg:hidden pb-4 border-t border-[#d9d9d9] mt-2 pt-4">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => onNavigate(item.target)} className={`link_${item.id} header-link-light text-left`}>
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
