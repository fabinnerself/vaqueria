export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative bg-[#fdfbf7] py-16 md:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fdfbf7 0%, #faf8f4 100%)' }}
    >
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5016' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-36V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="page-shell text-center relative">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(45,80,22,0.1)' }}>
          <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#2d5016' }}>Desde el campo a tu mesa</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl leading-[1.15] mb-5" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
          <span className="block">Lácteos Frescos</span>
          <span className="text-[#2d5016]">Directo del Campo</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
          Calidad premium con la frescura del campo. Entrega a domicilio en 24 horas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-6 py-3 rounded-lg font-semibold text-white" style={{ backgroundColor: '#2d5016' }}>
            Ver Productos
          </button>
          <button className="px-6 py-3 rounded-lg font-medium border" style={{ borderColor: '#2d5016', color: '#2d5016' }}>
            Contactar WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
