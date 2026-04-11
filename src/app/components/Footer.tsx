import { Instagram, Facebook, MessageCircle } from "lucide-react";
import type { NavigationTarget } from '../types/navigation';

interface FooterProps {
  onNavigate: (section: NavigationTarget) => void;
}

export default function Footer({ onNavigate: _onNavigate }: FooterProps) {
  return (
    <footer className="py-10 md:py-14" style={{ backgroundColor: '#1a1a1a', color: '#faf8f4' }}>
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <h3 
              className="text-lg mb-3" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Vaquería
            </h3>
            <p className="text-sm leading-relaxed opacity-70">
              Lácteos frescos directo del campo a tu mesa. 
              Calidad premium con delivery en 24 horas.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Síguenos</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:bg-white/10"
                style={{ color: '#c4a35a' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:bg-white/10"
                style={{ color: '#c4a35a' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-all hover:bg-white/10"
                style={{ color: '#c4a35a' }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Contacto</h4>
            <p className="text-sm opacity-70 mb-1">+591 67023053</p>
            <p className="text-sm opacity-70">hola@lavaqueria.com</p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-xs opacity-50">
            © 2026 La Vaquería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
