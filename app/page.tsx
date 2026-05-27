import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { products, BUSINESS_CONFIG } from './data/products';

export default function Home() {
  const availableProducts = products.filter(p => p.available);
  
  return (
    <main className="bg-[#F5EFE0]">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#3A2418] text-[#F5EFE0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-[#F5EFE0] text-[#3A2418] p-10 rounded-3xl shadow-2xl" style={{ transform: 'rotate(-2deg)' }}>
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#E8A82C] to-[#B82E1F] flex items-center justify-center text-[#F5EFE0] font-black text-5xl mx-auto mb-5 border-4 border-[#F5EFE0]" style={{ fontFamily: 'Fraunces, serif' }}>
              R
            </div>
            <h3 className="text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
              {BUSINESS_CONFIG.ownerName}
            </h3>
            <div className="text-center text-[#B82E1F] text-sm font-bold tracking-widest uppercase mb-5">
              Founder & Chief Cook
            </div>
           <blockquote className="italic text-center text-[#5C3D2E]" style={{ fontFamily: 'Fraunces, serif' }}>
              &ldquo;I make every batch the way my grandmother taught me — slow, careful, with love.&rdquo;
          </blockquote>
          </div>
          
          <div>
            <div className="text-[#E8A82C] text-sm font-bold tracking-widest uppercase mb-3">
              — Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Fraunces, serif' }}>
              From our kitchen<br />
              to <em className="text-[#E8A82C] font-medium">yours</em>.
            </h2>
            <p className="text-[#F5EFE0]/80 mb-4">
    Four years ago, Ramya started making chilli powder from her kitchen in Hyderabad — 
    using the recipe her mother taught her. Family loved it. Friends started asking. 
    Slowly, the orders began coming in.
</p>
          <p className="text-[#F5EFE0]/80">
              Every pack is still made in small batches — sun-dried chillies from her terrace, 
              pounded slowly by hand. No shortcuts, no preservatives. Just real spice, 
              made the way it always should be.
          </p>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section id="products" className="py-24 px-6">
       <div className="text-center mb-16">
    <div className="text-[#B82E1F] text-sm font-bold tracking-widest uppercase mb-3">
      — Our Products
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-[#3A2418]" style={{ fontFamily: 'Fraunces, serif' }}>
      Order your <em className="text-[#B82E1F] font-medium">pack</em> today
    </h2>
    <p className="text-[#5C3D2E] mt-4 text-base">
      🌿 Sealed in food-safe aluminum packets to lock in freshness
    </p>
</div>
        
        <div className="space-y-8">
          {availableProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Why Us Section */}
      <section className="py-24 px-6 bg-[#EDE3CC]">
        <div className="text-center mb-12">
          <div className="text-[#B82E1F] text-sm font-bold tracking-widest uppercase mb-3">
            — Why Ramya&apos;s
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A2418]" style={{ fontFamily: 'Fraunces, serif' }}>
            What makes us <em className="text-[#B82E1F] font-medium">different</em>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: '🌾', title: 'Single Origin', desc: 'Sourced from one farm in Guntur. Same farmer, every batch.' },
            { icon: '☀️', title: 'Sun-Dried', desc: 'Naturally dried under the sun for 7 days.' },
            { icon: '⚒️', title: 'Stone-Pounded', desc: 'Hand-pounded to preserve oils and aroma.' },
            { icon: '📅', title: 'Fresh Weekly', desc: 'Small batches every week. Never sits on a shelf.' },
            { icon: '🌿', title: 'Sealed Fresh', desc: 'Food-safe aluminum packets lock in freshness.' },
          ].map((card, i) => (
            <div key={i} className="bg-[#F5EFE0] p-7 rounded-2xl border border-[#B82E1F]/8 hover:-translate-y-1 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-[#B82E1F] to-[#E8A82C] rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg">
                {card.icon}
              </div>
              <h4 className="font-bold text-lg text-[#3A2418] mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                {card.title}
              </h4>
              <p className="text-sm text-[#5C3D2E]">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#3A2418] text-[#F5EFE0] py-16 px-6 text-center">
        <div className="text-3xl font-black text-[#E8A82C] mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          {BUSINESS_CONFIG.businessName}
        </div>
        <p className="text-[#F5EFE0]/70 mb-6">Made with love in a home kitchen.</p>
        <p className="italic text-[#E8A82C] mt-6" style={{ fontFamily: 'Fraunces, serif' }}>
          Coming soon → Turmeric, Sambar Powder, Pickles ✨
        </p>
        <div className="mt-10 pt-6 border-t border-[#F5EFE0]/10 text-sm text-[#F5EFE0]/50">
          Made with <span className="text-[#D63A26]">❤</span> by Ramya&apos;s family · © 2026
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </main>
  );
}