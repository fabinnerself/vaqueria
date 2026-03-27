import type { NavigationTarget } from '../types/navigation';
import imgW2 from "../../assets/20b22656c1f0b1195838e9b235090e312abb18b3.png";
import imgF2 from "../../assets/44a90b9740851d3caba3583e570158fc3362f6da.png";
import imgI2 from "../../assets/7db9fceadcd3ad4d0413f2570b0f25371b7f013d.png";

import { Instagram, Facebook, MessageCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (section: NavigationTarget) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (section: NavigationTarget) => onNavigate(section);

  return (
    <footer className="bg-white border-t border-[#d9d9d9]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="py-4 md:py-6 border-b border-[#d9d9d9]">
          <p className="font-extrabold text-[#222] text-[13px] md:text-[14px] leading-[20px] mb-3 md:mb-4 text-center md:text-left">Síguenos en redes sociales</p>
          <div className="flex gap-3 md:gap-4 justify-center md:ml-[330px]">
          <a
            href="#"
            className="text-[#4e8b2f] hover:opacity-80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#4e8b2f] hover:opacity-80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-[#4e8b2f] hover:opacity-80 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>

          </div>
        </div>
        <div className="py-3 md:py-4">
          <div className="border-b border-[#d9d9d9] pb-3 md:pb-4 mb-3 md:mb-4">
            <p className="font-normal text-[#222] text-[11px] md:text-[11.959px] leading-[16px] text-center md:text-left">© 2026 Startup CRM. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end text-[11px] md:text-[12px] leading-[16px] text-[#222]">
            <button onClick={() => handleNavClick('terminos')} className="link_terminos hover:text-[#4e8b2f] transition-colors">Términos</button>
            <span>|</span>
            <button onClick={() => handleNavClick('privacidad')} className="link_privacidad hover:text-[#4e8b2f] transition-colors">Privacidad</button>
            <span>|</span>
            <button onClick={() => handleNavClick('contacto')} className="link_contacto hover:text-[#4e8b2f] transition-colors">Contacto</button>
          </div>
        </div>



      </div>
    </footer>
  );
}
