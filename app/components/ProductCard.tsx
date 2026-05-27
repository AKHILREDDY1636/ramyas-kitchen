'use client';
import { useState } from 'react';
import { Product, BUSINESS_CONFIG } from '../data/products';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const MAX_QTY = 20;
  
  const totalGrams = quantity * product.unitWeight;
  const display = totalGrams >= 1000 
    ? `${(totalGrams / 1000).toFixed(totalGrams % 1000 === 0 ? 0 : 2)}kg` 
    : `${totalGrams}g`;
  const total = quantity * product.pricePerUnit;
  
  const buildWhatsAppUrl = () => {
    const lines = [
      `🙏 నమస్తే | Namaste`,
      `${BUSINESS_CONFIG.businessName} 🌶️`,
      ``,
      `━━━━━━━━━━━━━━━`,
      ``,
      `📦 ఆర్డర్ వివరాలు | Order Details:`,
      `• ${product.name}`,
      `• Quantity: ${display} (${quantity} pack${quantity > 1 ? 's' : ''})`,
      `• Total: ₹${total}`,
      ``,
      `━━━━━━━━━━━━━━━`,
      ``,
      `📍 నా వివరాలు | My Details:`,
      `పేరు | Name: `,
      `చిరునామా | Address: `,
      `ఫోన్ | Phone: `,
      ``,
      `━━━━━━━━━━━━━━━`,
      ``,
      `దయచేసి కాల్ చేయండి 📞`,
      `Please call me to confirm.`,
      ``,
      `ధన్యవాదాలు | Thank you! 🙏`,
    ];
    
    const message = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${message}`;
};
  
  return (
    <div className="max-w-4xl mx-auto bg-[#F5EFE0] rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-[#3A2418]/10 border border-[#B82E1F]/10">
      
      {/* Product Image */}
      <div className="bg-gradient-to-br from-[#D63A26] to-[#8B1A0E] p-12 md:p-16 flex items-center justify-center relative">
        <span className="absolute top-5 right-5 bg-[#E8A82C] text-[#3A2418] text-xs font-bold px-3 py-1.5 rounded-full tracking-wider">
          {product.badge}
        </span>
        <span className="text-8xl md:text-9xl drop-shadow-2xl animate-wobble">{product.emoji}</span>
      </div>
      
      {/* Product Info */}
      <div className="p-8 md:p-10">
        <h3 className="font-bold text-2xl md:text-3xl text-[#3A2418] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
          {product.name}
        </h3>
        <p className="text-[#5C3D2E] mb-6">{product.subtitle}</p>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-[#5C3D2E]">
              <span className="w-5 h-5 bg-[#B82E1F]/10 text-[#B82E1F] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>
        
        <div className="bg-[#E8A82C]/10 border-l-4 border-[#E8A82C] p-4 rounded-lg mb-5">
          <div className="text-sm text-[#5C3D2E]">Starting at</div>
          <div className="font-bold text-3xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>
            ₹{product.pricePerUnit}
            <span className="text-sm text-[#5C3D2E] font-normal">/{product.unitWeight}{product.unit}</span>
          </div>
        </div>
        
        {/* Quantity Selector */}
        <div className="bg-[#3A2418]/5 rounded-2xl p-5 mb-5">
          <div className="text-xs font-semibold text-[#3A2418] uppercase tracking-wider mb-3">
            Select Quantity
          </div>
          <div className="flex items-center justify-between bg-[#F5EFE0] rounded-xl p-1.5 border border-[#B82E1F]/15">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-10 h-10 bg-[#B82E1F] text-[#F5EFE0] rounded-lg font-bold text-xl disabled:bg-[#3A2418]/20 disabled:cursor-not-allowed hover:bg-[#8B1A0E] transition"
            >
              −
            </button>
            <div className="text-center">
              <div className="font-bold text-xl text-[#3A2418]" style={{ fontFamily: 'Fraunces, serif' }}>{display}</div>
              <div className="text-xs text-[#5C3D2E]">{quantity} pack{quantity > 1 ? 's' : ''}</div>
            </div>
            <button
              onClick={() => setQuantity(q => Math.min(MAX_QTY, q + 1))}
              disabled={quantity >= MAX_QTY}
              className="w-10 h-10 bg-[#B82E1F] text-[#F5EFE0] rounded-lg font-bold text-xl disabled:bg-[#3A2418]/20 disabled:cursor-not-allowed hover:bg-[#8B1A0E] transition"
            >
              +
            </button>
          </div>
        </div>
        
        {/* Total */}
        <div className="flex justify-between items-center py-4 border-y border-dashed border-[#3A2418]/20 mb-4">
          <span className="text-[#5C3D2E]">Total</span>
          <span className="font-bold text-2xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>₹{total}</span>
        </div>
        
        {/* Order Buttons */}
        <div className="flex gap-3">
          <a
           href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold text-center hover:bg-[#128C7E] hover:-translate-y-0.5 transition shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
      >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          Order on WhatsApp
      </a>
          <a
            href={`tel:${BUSINESS_CONFIG.phoneNumber}`}
            className="bg-[#3A2418] text-[#F5EFE0] px-6 py-3.5 rounded-xl font-semibold hover:bg-[#1F1410] transition"
          >
            📞 Call
          </a>
        </div>
      </div>
    </div>
  );
}