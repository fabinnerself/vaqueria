import { useState } from 'react';
import Image from 'next/image';
import imgQrCode from '../../assets/qr-code.png';

const INPUT_STYLE = "w-full bg-white border rounded-lg px-4 py-3 text-gray-800 text-sm mb-3 focus:outline-none transition-all";
const BUTTON_STYLE = "w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300";

/* ── Proper WhatsApp SVG icon ── */
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Phone icon ── */
const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function ContactCards() {
  const [emailData, setEmailData] = useState({ email: '', subject: '', message: '' });
  const [smsData, setSmsData] = useState({ phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppOpen = () => window.open('https://api.whatsapp.com/send?phone=+59167023053&text=Hola,%20quiero%20consultar%20sobre%20tus%20productos', '_blank');

  const handleEmailSubmit = async () => {
    setEmailError('');
    if (!emailData.email.trim() || !emailData.subject.trim() || !emailData.message.trim()) {
      setEmailError('Todos los campos son requeridos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailData.email)) {
      setEmailError('Por favor ingresa un correo válido.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: emailData.email,
          subject: emailData.subject,
          text: emailData.message,
        }),
      });
      const result = await response.json();
      if (result.status === 'sent') {
        setStatusMessage('Correo enviado correctamente. En breve te contactaremos.');
        setEmailSent(true);
      } else {
        setEmailError(result.error || 'Error al enviar. Intenta nuevamente.');
      }
    } catch {
      setEmailError('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSmsSubmit = () => {
    setStatusMessage('Solicitud enviada. Te contactaremos pronto.');
  };

  return (
    <section id="contacto" className="py-12 md:py-16" style={{ backgroundColor: '#fdfbf7' }}>
      <div className="page-shell">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
            Contáctanos
          </h2>
          <p className="text-gray-500">Escríbenos o escríbenos por WhatsApp</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ─── WhatsApp Card ─── */}
          <div
            className="bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#25D366' }}
              >
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  WhatsApp
                </h3>
                <p className="text-gray-400 text-xs">+591 670 23 053</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4">
              Chatea con nosotros directamente o escanea el código QR
            </p>

            {/* QR Code */}
            <div
              className="flex-1 flex items-center justify-center rounded-lg p-3 mb-4"
              style={{ backgroundColor: '#f8faf6', border: '1px dashed #c8d9be' }}
            >
              <div className="relative group/qr">
                <Image
                  src={imgQrCode}
                  alt="Escanea para chatear por WhatsApp"
                  width={150}
                  height={150}
                  className="rounded-md transition-transform duration-300 group-hover/qr:scale-105"
                  style={{ imageRendering: 'pixelated' }}
                />
                {/* subtle WhatsApp badge on the QR */}
                <div
                  className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppOpen}
              className={BUTTON_STYLE + " flex items-center justify-center gap-2 hover:brightness-110"}
              style={{ backgroundColor: '#25D366', color: 'white' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Abrir Chat
            </button>
          </div>

          {/* ─── Email Card ─── */}
          <div className="bg-white rounded-xl p-6 transition-all hover:-translate-y-1" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2d5016' }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Email</h3>
            </div>
            <input 
              type="email" 
              placeholder="Tu email" 
              value={emailData.email} 
              onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
              className={INPUT_STYLE}
              style={{ borderColor: '#e8e4dc' }}
            />
            <input 
              type="text" 
              placeholder="Asunto" 
              value={emailData.subject} 
              onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
              className={INPUT_STYLE}
              style={{ borderColor: '#e8e4dc' }}
            />
            <textarea 
              placeholder="Tu mensaje" 
              value={emailData.message} 
              onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
              className={INPUT_STYLE}
              style={{ borderColor: '#e8e4dc', height: '80px', resize: 'none' }}
            />
            {emailError && <div className="text-red-600 text-xs mb-2">{emailError}</div>}
            <button 
              onClick={handleEmailSubmit} 
              disabled={isLoading}
              className={BUTTON_STYLE}
              style={{ 
                backgroundColor: '#2d5016', 
                color: 'white',
                opacity: isLoading ? 0.7 : 1
              }}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>

          {/* ─── SMS Card ─── */}
          <div className="bg-white rounded-xl p-6 transition-all hover:-translate-y-1" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#c4a35a' }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>SMS</h3>
            </div>
            <input 
              type="tel" 
              placeholder="Número de teléfono" 
              value={smsData.phone} 
              onChange={(e) => setSmsData({ ...smsData, phone: e.target.value })}
              className={INPUT_STYLE}
              style={{ borderColor: '#e8e4dc' }}
            />
            <textarea 
              placeholder="Tu mensaje" 
              value={smsData.message} 
              onChange={(e) => setSmsData({ ...smsData, message: e.target.value })}
              className={INPUT_STYLE}
              style={{ borderColor: '#e8e4dc', height: '80px', resize: 'none' }}
            />
            <button 
              onClick={handleSmsSubmit}
              className={BUTTON_STYLE}
              style={{ 
                backgroundColor: '#c4a35a', 
                color: 'white'
              }}
            >
              Enviar
            </button>
          </div>
        </div>
        
        {statusMessage && (
          <div className="mt-6 rounded-lg px-5 py-3 text-center" style={{ backgroundColor: '#d4edda', color: '#155724' }}>
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}
