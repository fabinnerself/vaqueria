import { useState } from 'react';

const LABEL_CLASS = "block text-sm font-medium mb-2 text-gray-700";
const INPUT_STYLE = "w-full bg-white border rounded-lg px-4 py-3 text-gray-800 text-sm mb-3 focus:outline-none transition-all";
const BUTTON_STYLE = "w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-.61-.318-.91-.492-.309-.187-.537-.349-.749-.609-.174-.225-.063-.375.043-.515.058-.094.148-.197.297-.297.297-.149.297-.297.297-.495 0-.149-.149-.372-.223-.515-.074-.148-.372-.297-.743-.496-.609-.334-1.448-.521-1.973-.521-.297 0-.595.074-.866.223-.271.148-.441.347-.595.571-.148.223-.521.595-.521.743 0,.223.297.495.595.743.297.248.595.372.866.521.223.149.372.223.495.297.123.074.223.148.347.198.123.05.223.074.371.074.149 0 .372-.025.569-.149.197-.124.521-.372.743-.595.222-.223.347-.347.495-.521.148-.174.297-.297.495-.347.198-.05.371-.074.495-.074zM12 22.155c-1.102 0-2.204-.296-3.204-.888-1.93-1.148-3.112-3.13-3.429-5.408-.108-.775-.108-1.584.024-2.373.131-.789.39-1.518.765-2.159l.005.005c.373-.639.848-1.223 1.405-1.725l.003.003c.553-.499 1.195-.905 1.902-1.199.706-.294 1.464-.459 2.241-.459.777 0 1.535.165 2.241.459.707.294 1.349.7 1.902 1.199l.003-.003c.557.502 1.032 1.086 1.405 1.725l.005-.005c.375.641.634 1.37.765 2.159.132.789.132 1.598.024 2.373-.317 2.278-1.499 4.26-3.429 5.408-1 .592-2.102.888-3.204.888h-.024zM8.235 6.938c-.223-.446-.223-.968 0-1.414l1.553-1.576c.217-.221.48-.333.762-.333.282 0 .545.112.762.333l.762.771c.223.224.38.499.451.795.07.296.035.609-.103.889-.138.28-.379.502-.672.619l-.904.356c-.293.115-.493.371-.493.663v1.065c0 .292.2.548.493.663l.904.356c.293.115.534.338.672.619.138.28.173.593.103.889-.071.296-.228.571-.451.795l-.762.771c-.217.221-.48.333-.762.333-.282 0-.545-.112-.762-.333l-1.553-1.576c-.223-.446-.223-.968 0-1.414.223-.447.609-.765 1.068-.883l1.092-.282c.283-.073.483-.329.493-.629v-.356c-.01-.3-.21-.556-.493-.629l-1.092-.282c-.459-.118-.845-.436-1.068-.883z"/>
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
          <div className="bg-white rounded-xl p-6 transition-all hover:-translate-y-1" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#25D366' }}>
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>WhatsApp</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Chatea con nosotros directamente</p>
            <button onClick={handleWhatsAppOpen} className={BUTTON_STYLE} style={{ backgroundColor: '#25D366', color: 'white' }}>
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Abrir Chat
            </button>
          </div>

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
