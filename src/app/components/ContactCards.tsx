import { useState, ReactNode, useEffect, useCallback } from 'react';
import Image from 'next/image';
import imgImage from "../../assets/whatsapp-icon.png";
import imgImage1 from "../../assets/qr-background.png";
import imgQr2 from "../../assets/qr-code.png";

const LABEL_CLASS = "block font-normal text-[#222] text-[12px] leading-[16px] mb-2";
const INPUT_CLASS = "text_input w-full bg-white border border-[#d9d9d9] rounded-[4px] px-3 py-2 text-[#222] text-[14px] leading-[20px] mb-2 focus:outline-none focus:ring-2";

function CardHeader({ bgColor, icon, title }: { bgColor: string; icon: ReactNode; title: string }) {
  return (
    <div className={`${bgColor} px-4 py-3 flex items-center gap-3`}>
      {icon}
      <h3 className="font-bold text-white text-[13.8px] leading-[20px]">{title}</h3>
    </div>
  );
}

function FormField({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string }) {
  return (
    <>
      <label className={LABEL_CLASS}>{label}</label>
      <input {...props} className={`${INPUT_CLASS} ${props.className || ''}`} />
    </>
  );
}

function SubmitButton({ bgColor, hoverColor, children, disabled, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { bgColor: string; hoverColor: string }) {
  return (
    <button {...props} disabled={disabled} className={`btn_primary rounded-[4px] ${bgColor} text-white font-bold text-[13.72px] leading-[20px] w-full py-2 mt-4 transition-colors hover:${hoverColor} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>
  );
}

const WhatsAppIcon = () => (
  <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
    <path d="M7 0C3.13401 0 0 3.13401 0 7C0 8.38751 0.437511 9.67084 1.18335 10.7292L0.408348 13.2083C0.350015 13.3833 0.408348 13.5875 0.554181 13.7042C0.641681 13.7625 0.758348 13.8208 0.875015 13.8208C0.933348 13.8208 1.02085 13.8208 1.07918 13.7917L3.67501 13.125C4.67501 13.7625 5.79168 14.0583 7 14.0583C10.866 14.0583 14 10.9243 14 7.05834C14 3.16251 10.866 0 7 0ZM10.2083 9.69917C10.0333 10.2783 9.19584 10.7708 8.53751 10.9167C8.12501 11.0042 7.58334 11.0917 5.55834 10.2492C3.12501 9.19917 1.54168 6.74584 1.40585 6.54251C1.29918 6.36751 0.495849 5.30001 0.495849 4.20251C0.495849 3.10501 1.06668 2.57251 1.27001 2.34001C1.44501 2.16501 1.70585 2.07751 1.95751 2.07751C2.03585 2.07751 2.11418 2.07751 2.16335 2.10668C2.36668 2.11584 2.46335 2.13418 2.58918 2.42918C2.76418 2.84168 3.18585 3.93918 3.24418 4.04584C3.30251 4.15251 3.36085 4.28834 3.29168 4.47251C3.22251 4.65667 3.16418 4.73501 3.02835 4.89084C2.89251 5.04667 2.74585 5.23084 2.61918 5.35667C2.48335 5.49251 2.33668 5.62834 2.50168 5.89834C2.66668 6.16834 3.19501 7.02584 3.96835 7.70001C4.94335 8.55751 5.73001 8.85251 6.01585 8.96918C6.21918 9.05668 6.45168 9.02751 6.61668 8.84334C6.81085 8.64001 7.01418 8.29168 7.23668 7.94334C7.40251 7.67334 7.60585 7.61501 7.86668 7.70251C8.13668 7.79001 9.22501 8.32251 9.52001 8.46751C9.81501 8.61251 10.0042 8.69084 10.0625 8.80751C10.1208 8.92418 10.1208 9.33668 10.0042 9.82918C9.88751 10.3217 9.73085 10.5542 10.2083 9.69917Z" fill="#4E8B2F" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
    <path d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5 4.5L9 9.75L1.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SmsIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
    <g clipPath="url(#clip0_sms)">
      <path d="M15.75 2.25H2.25C1.42157 2.25 0.75 2.92157 0.75 3.75V12.75C0.75 13.5784 1.42157 14.25 2.25 14.25H4.5V16.5L8.25 14.25H15.75C16.5784 14.25 17.25 13.5784 17.25 12.75V3.75C17.25 2.92157 16.5784 2.25 15.75 2.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_sms"><rect fill="white" height="18" width="18" /></clipPath>
    </defs>
  </svg>
);

export default function ContactCards() {
  const [emailData, setEmailData] = useState({ email: '', subject: '', message: '' });
  const [smsData, setSmsData] = useState({ phone: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const clearEmailFields = useCallback(() => {
    setEmailData({ email: '', subject: '', message: '' });
    setEmailSent(false);
  }, []);

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        setStatusMessage('');
        clearEmailFields();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [emailSent, clearEmailFields]);

  const handleEmailSubmit = async () => {
    setEmailError('');
    if (!emailData.email.trim() || !emailData.subject.trim() || !emailData.message.trim()) {
      setEmailError('Todos los campos son requeridos.');
      return;
    }
    if (!isValidEmail(emailData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido.');
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
        setStatusMessage('Solicitud de email enviada correctamente. En breve te contactaremos.');
        setEmailSent(true);
      } else {
        setEmailError(result.error || 'Error al enviar el email. Intenta nuevamente.');
      }
    } catch {
      setEmailError('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSmsSubmit = () => setStatusMessage('Solicitud de SMS registrada correctamente.');
  const handleWhatsAppOpen = () => window.open('https://api.whatsapp.com/send?phone=+59167023053&text=Hola,%20quiero%20consultar%20sobre%20tus%20servicios', '_blank');

  return (
    <section id="contacto" className="section-shell bg-[#f9f9f9] py-6 md:py-8">
      <div className="page-shell">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="card_w surface-card">
            <CardHeader bgColor="bg-[#4e8b2f]" icon={<Image src={imgImage} alt="WhatsApp" className="w-4 h-7 object-contain" width={16} height={28} />} title="WHATSAPP" />
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Image src={imgImage1} alt="QR Background" className="w-[180px] h-[180px] object-contain" width={180} height={180} />
                  <Image src={imgQr2} alt="QR Code" className="absolute top-[1px] left-[1px] w-[180px] h-[180px] object-contain" width={180} height={180} />
                </div>
              </div>              
              <button onClick={handleWhatsAppOpen} className="btn_secondary secondary-action font-semibold text-[14px] leading-[20px] w-full py-2 flex items-center justify-center gap-2">
                <WhatsAppIcon />Abrir chat
              </button>
            </div>
          </div>
          <div className="card_e surface-card">
            <CardHeader bgColor="bg-[#4a6b9d]" icon={<EmailIcon />} title="EMAIL" />
            <div className="p-4">
              <FormField label="Tu email:" type="email" placeholder="Tu email" value={emailData.email} onChange={(e) => setEmailData({ ...emailData, email: e.target.value })} className="focus:ring-[#4a6b9d]" />
              <FormField label="Asunto:" type="text" placeholder="Asunto" value={emailData.subject} onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })} className="focus:ring-[#4a6b9d]" />
              <label className={LABEL_CLASS}>Mensaje:</label>
              <textarea placeholder="Tu mensaje" value={emailData.message} onChange={(e) => setEmailData({ ...emailData, message: e.target.value })} className="text_input w-full bg-white border border-[#d9d9d9] rounded-[4px] px-3 py-2 text-[#222] text-[14px] leading-[20px] h-[78px] resize-none focus:outline-none focus:ring-2 focus:ring-[#4a6b9d]" />
              {emailError && <div className="text-red-600 text-[12px] mb-2">{emailError}</div>}
              <SubmitButton bgColor="bg-[#4a6b9d]" hoverColor="hover:bg-[#3d5780]" onClick={handleEmailSubmit} disabled={isLoading}>{isLoading ? 'ENVIANDO...' : 'ENVIAR'}</SubmitButton>
            </div>
          </div>
          <div className="card_sms surface-card">
            <CardHeader bgColor="bg-[#5a5e62]" icon={<SmsIcon />} title="SMS" />
            <div className="p-4">
              <FormField label="Teléfono:" type="tel" placeholder="Número de teléfono" value={smsData.phone} onChange={(e) => setSmsData({ ...smsData, phone: e.target.value })} className="focus:ring-[#5a5e62]" />
              <label className={LABEL_CLASS}>Mensaje:</label>
              <textarea placeholder="Tu mensaje" value={smsData.message} onChange={(e) => setSmsData({ ...smsData, message: e.target.value })} className="text_input w-full bg-white border border-[#d9d9d9] rounded-[4px] px-3 py-2 text-[#222] text-[14px] leading-[20px] h-[78px] resize-none focus:outline-none focus:ring-2 focus:ring-[#5a5e62]" />
              <SubmitButton bgColor="bg-[#5a5e62]" hoverColor="hover:bg-[#464a4d]" onClick={handleSmsSubmit}>ENVIAR</SubmitButton>
            </div>
          </div>
        </div>
        {statusMessage && <div className="mt-4 rounded-[4px] border border-[#b7e4a3] bg-[#dff6dd] px-4 py-3 text-[14px] text-[#1e6b2f]">{statusMessage}</div>}
      </div>
    </section>
  );
}
