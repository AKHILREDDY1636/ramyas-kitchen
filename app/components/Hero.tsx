export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <div>
        <div className="inline-flex items-center gap-2 bg-[#B82E1F]/10 text-[#8B1A0E] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#B82E1F]/20">
          <span className="w-2 h-2 bg-[#B82E1F] rounded-full animate-pulse-soft"></span>
          Fresh Batch Available
        </div>
        
       <h1 className="font-black text-5xl md:text-7xl leading-none text-[#3A2418] mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
          Real spices,<br />
          <span className="italic font-medium text-[#B82E1F]">stone-pounded</span><br />
          in Ramya&apos;s kitchen.
      </h1>
        
       <p className="text-lg text-[#5C3D2E] mb-8 max-w-lg">
          No machines. No preservatives. Just sun-dried spices pounded the traditional way 
          in our home kitchen.
      </p>
        
        <div className="flex gap-4 flex-wrap">
          <a 
            href="#products"
            className="bg-[#B82E1F] text-[#F5EFE0] px-8 py-4 rounded-full font-semibold hover:bg-[#8B1A0E] hover:-translate-y-0.5 transition shadow-xl shadow-[#B82E1F]/30"
          >
            Order Now →
          </a>
          <a 
            href="#about"
            className="border-2 border-[#3A2418] text-[#3A2418] px-8 py-4 rounded-full font-semibold hover:bg-[#3A2418] hover:text-[#F5EFE0] transition"
          >
            Meet Ramya
          </a>
        </div>
        
        <div className="flex gap-10 mt-12">
          <div>
            <div className="font-bold text-3xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>100%</div>
            <div className="text-sm text-[#5C3D2E]">Homemade</div>
          </div>
          <div>
        <div className="font-bold text-3xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>4+</div>
        <div className="text-sm text-[#5C3D2E]">Years of Care</div>
    </div>
          <div>
            <div className="font-bold text-3xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>0</div>
            <div className="text-sm text-[#5C3D2E]">Preservatives</div>
          </div>
          <div>
            <div className="font-bold text-3xl text-[#B82E1F]" style={{ fontFamily: 'Fraunces, serif' }}>1</div>
            <div className="text-sm text-[#5C3D2E]">Family Recipe</div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-[#D63A26] to-[#8B1A0E] flex items-center justify-center shadow-2xl animate-float">
          <span className="text-9xl drop-shadow-2xl animate-wobble">🌶️</span>
        </div>
      </div>
    </section>
  );
}