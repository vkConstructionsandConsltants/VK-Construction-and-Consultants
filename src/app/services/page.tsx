
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Building2, Home as HomeIcon, Factory, Palette, Settings, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'commercial',
    title: 'Commercial Projects',
    desc: 'High-performance office complexes, luxury retail spaces, and corporate skyscrapers designed for the modern business world.',
    image: 'service-commercial',
    icon: Building2,
    features: ['Smart Building Tech', 'Sustainable Design', 'LEED Certification']
  },
  {
    id: 'residential',
    title: 'Luxury Residential',
    desc: 'Bespoke residential estates, luxury villas, and high-end apartments that redefine contemporary living in India.',
    image: 'service-residential',
    icon: HomeIcon,
    features: ['Premium Finishes', 'Custom Architecture', 'Privacy-First Design']
  },
  {
    id: 'industrial',
    title: 'Industrial & Infra',
    desc: 'Large-scale industrial warehouses, manufacturing plants, and critical infrastructure projects built to last.',
    image: 'service-industrial',
    icon: Factory,
    features: ['Heavy Duty Engineering', 'Efficient Logistics', 'Safety Compliance']
  },
  {
    id: 'interiors',
    title: 'Interior Design',
    desc: 'Exquisite interior transformations that blend functionality with a high-end aesthetic, tailored to your brand or lifestyle.',
    image: 'project-3',
    icon: Palette,
    features: ['Curated Decor', 'Spatial Planning', 'Lighting Design']
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Our Expertise</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Comprehensive <br /><span className="text-primary not-italic">Construction</span> Services</h1>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center space-x-3 bg-off-white p-4">
                      <CheckCircle size={18} className="text-primary" />
                      <span className="text-xs uppercase tracking-widest font-bold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative aspect-[4/3] group overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Image 
                  src={PlaceHolderImages.find(img => img.id === service.image)?.imageUrl || ''} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 m-6 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black text-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Execution</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Our <span className="text-primary not-italic">Proven</span> Process</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision, budget, and requirements.' },
              { step: '02', title: 'Planning', desc: 'Strategic architectural design and engineering layout.' },
              { step: '03', title: 'Construction', desc: 'Precise execution using top-tier materials and labor.' },
              { step: '04', title: 'Delivery', desc: 'Final walkthrough and handover of your masterpiece.' },
            ].map((item, i) => (
              <div key={i} className="relative p-10 border border-gray-800 hover:border-primary transition-all group">
                <span className="text-5xl font-black text-gray-800 italic group-hover:text-primary/20 transition-colors block mb-6">{item.step}</span>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
