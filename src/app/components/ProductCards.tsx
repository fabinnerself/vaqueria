import Image from 'next/image';
import imgImgLeche from "../../assets/producto-leche.png";
import imgImgQueso from "../../assets/producto-quesos.png";
import imgImgYogurt from "../../assets/producto-yogur.png";

const products = [
  { id: 'leche', title: 'Leche', subtitle: 'Fresca y natural', image: imgImgLeche, imageAlt: 'Leche fresca', width: 180, height: 57 },
  { id: 'quesos', title: 'Quesos', subtitle: 'Artesanales', image: imgImgQueso, imageAlt: 'Quesos artesanales', width: 180, height: 55 },
  { id: 'yogur', title: 'Yogur', subtitle: 'Naturalmente probiotic', image: imgImgYogurt, imageAlt: 'Yogur natural', width: 180, height: 59 }
] as const;

export default function ProductCards() {
  return (
    <section id="productos" className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
      <div className="page-shell">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}>
            Nuestros Productos
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            直接del campo a tu mesa, con la máxima frescura y calidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ 
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <div className="p-6 pb-0">
                <div className="pt-4 pb-2">
                  <h3 
                    className="text-xl font-semibold text-center mb-1" 
                    style={{ fontFamily: "'Playfair Display', serif", color: '#1a1a1a' }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">{product.subtitle}</p>
                </div>
              </div>
              <div className="flex justify-center items-center h-[90px] px-4 mt-2">
                <Image 
                  src={product.image} 
                  alt={product.imageAlt} 
                  className="object-contain transition-transform duration-300 group-hover:scale-105" 
                  width={product.width} 
                  height={product.height} 
                />
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  className="w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300"
                  style={{ 
                    border: '1px solid #2d5016', 
                    color: '#2d5016',
                    backgroundColor: 'transparent'
                  }}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
