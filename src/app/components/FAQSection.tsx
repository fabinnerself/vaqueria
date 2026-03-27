import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { id: 'faq_question1', question: '¿Entregan a domicilio?', answer: 'Sí, entregamos en 24-48 horas en toda la ciudad.' },
  { id: 'faq_question2', question: '¿Los productos son frescos?', answer: 'Sí, todos nuestros productos son frescos y provienen directamente del campo.' },
  { id: 'faq_question3', question: '¿Tienen productos sin lactosa?', answer: 'Sí, contamos con una línea completa de productos sin lactosa.' },
  { id: 'faq_question4', question: '¿Cuál es el monto mínimo de compra?', answer: 'El monto mínimo de compra es de $20.' }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string>('faq_question1');

  return (
    <section id="faq" className="bg-white border-b border-[#d9d9d9] py-6 md:py-8">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="border-b border-[#d9d9d9] pb-2 mb-4 md:mb-6">
          <h2 className="font-extrabold text-[#222] text-[14px] leading-[20px] text-center">PREGUNTAS FRECUENTES</h2>
        </div>
        <div className="faq_section space-y-2">
          {faqs.map((faq) => (
            <div key={faq.id} className={`${faq.id} bg-[#f3f3f3] border border-[#d9d9d9] rounded-[4px] overflow-hidden transition-all duration-300`}>
              <button onClick={() => setOpenFAQ(openFAQ === faq.id ? '' : faq.id)} className="w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 text-left hover:bg-[#e8e8e8] transition-colors">
                <div className="bg-[#4e8b2f] rounded-[4px] w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className={`w-3 h-3 transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-semibold text-[#222] text-[13px] md:text-[14px] leading-[20px]">{faq.question}</span>
              </button>
              {openFAQ === faq.id && <div className="px-3 md:px-4 pb-3 md:pb-4 pl-[40px] md:pl-[52px] animate-fadeIn"><p className="font-normal text-[#222] text-[13px] md:text-[14px] leading-[20px]">{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
