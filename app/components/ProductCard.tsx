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
    const message = `Hello ${BUSINESS_CONFIG.ownerName} 🌶️%0A%0AI'd like to order:%0A• ${product.name} — ${display} (${quantity} pack${quantity > 1 ? 's' : ''})%0A• Total: ₹${total}%0A%0AMy Details:%0AName: %0AAddress: %0APhone: `;
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
            className="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold text-center hover:bg-[#128C7E] hover:-translate-y-0.5 transition shadow-lg shadow-green-500/30"
          >
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