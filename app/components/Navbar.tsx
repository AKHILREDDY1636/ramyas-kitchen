'use client';
import { BUSINESS_CONFIG } from '../data/products';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-[#F5EFE0]/90 backdrop-blur-md border-b border-[#B82E1F]/10 flex justify-between items-center">
      <a href="#" className="flex items-center gap-2 font-serif font-black text-xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>
        <span className="w-8 h-8 bg-[#B82E1F] rounded-full flex items-center justify-center text-[#F5EFE0] italic font-bold text-base">
          R
        </span>
        {BUSINESS_CONFIG.businessName}
      </a>
      
      <div className="flex gap-6 md:gap-8 items-center">
        <a href="#about" className="hidden md:block text-[#3A2418] hover:text-[#B82E1F] transition font-medium">Our Story</a>
        <a href="#products" className="hidden md:block text-[#3A2418] hover:text-[#B82E1F] transition font-medium">Products</a>
        <a 
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-green-500/30"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}