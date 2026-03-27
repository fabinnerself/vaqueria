import Image from 'next/image';
import imgImgLeche from "../../assets/producto-leche.png";
import imgImgQueso from "../../assets/producto-quesos.png";
import imgImgYogurt from "../../assets/producto-yogur.png";

const products = [
  { id: 'leche', title: 'LECHE', subtitle: 'Fresca y natural', image: imgImgLeche, imageAlt: 'Leche fresca', width: 231, height: 73 },
  { id: 'quesos', title: 'QUESOS', subtitle: 'Artesanales', image: imgImgQueso, imageAlt: 'Quesos artesanales', width: 240, height: 73 },
  { id: 'yogur', title: 'YOGUR', subtitle: 'Naturalmente', image: imgImgYogurt, imageAlt: 'Yogur natural', width: 248, height: 81 }
] as const;

export default function ProductCards() {
  return (
    <section id="productos" className="bg-white border-b border-[#d9d9d9] py-6 md:py-8">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="card_product bg-white rounded-[4px] shadow-sm overflow-hidden">
              <div className="p-4 pb-0">
                <div className="border-b border-[#d9d9d9] pb-2 mb-4">
                  <h3 className="font-extrabold text-[#222] text-[17.5px] leading-[28px] text-center">{product.title}</h3>
                </div>
                <p className="font-normal text-[#222] text-[14px] leading-[20px] text-center mb-4">{product.subtitle}</p>
              </div>
              <div className="flex justify-center items-center h-[73px] mb-6">
                <Image src={product.image} alt={product.imageAlt} className="object-contain" width={product.width} height={product.height} />
              </div>
              <div className="px-6 pb-6">
                <button className="btn_primary bg-[#4e8b2f] text-white font-semibold text-[14px] leading-[20px] w-full py-2 rounded-[4px] hover:bg-[#3d6e25] transition-colors">Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
