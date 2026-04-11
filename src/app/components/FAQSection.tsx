import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { id: 'faq_question1', question: '¿Entregan a domicilio?', answer: 'Sí, entregamos en 24-48 horas en toda la ciudad. Sin costo adicional en compras mayores a $30.' },
  { id: 'faq_question2', question: '¿Los productos son frescos?', answer: 'Sí, todos nuestros productos son frescos y provienen directamente del campo. Sin conservantes.' },
  { id: 'faq_question3', question: '¿Tienen productos sin lactosa?', answer: 'Sí, contamos con una línea completa de productos sin lactosa para intolerantes.' },
  { id: 'faq_question4', question: '¿Cuál es el monto mínimo de compra?', answer: 'El monto mínimo de compra es de $20 para delivery.' }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string>('');

  return (
    <section id="faq" className="py-12 md:py-16" style={{ backgroundColor: '#fff' }}>
      <div className="page-shell">
        <div className="text-center mb-10">
          <h2 
            className="text-2xl md:text-3xl mb-3" 
            style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
          >
            Preguntas Frecuentes
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="rounded-lg overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: openFAQ === faq.id ? '#fdfbf7' : '#faf8f4',
                border: '1px solid #e8e4dc'
              }}
            >
              <button 
                onClick={() => setOpenFAQ(openFAQ === faq.id ? '' : faq.id)} 
                className="w-full flex items-center justify-between gap-3 p-4 md:p-5 text-left hover:bg-opacity-50 transition-colors"
              >
                <span 
                  className="font-medium text-[15px] md:text-[16px]" 
                  style={{ color: '#1a1a1a' }}
                >
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24"
                  style={{ color: '#2d5016' }}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openFAQ === faq.id && (
                <div className="px-4 md:px-5 pb-5">
                  <p className="text-gray-600 text-[15px] leading-relaxed pl-1">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
