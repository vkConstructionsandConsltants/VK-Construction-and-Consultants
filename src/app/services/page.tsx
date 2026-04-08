
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Building2, Home as HomeIcon, Factory, Palette, Settings, CheckCircle, PencilRuler, Construction, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    id: 'turnkey',
    title: 'Turnkey Construction',
    desc: 'End-to-end solutions from planning to handover. We handle everything, so you can build with peace of mind.',
    image: 'hero-main',
    icon: Construction,
    features: ['Transparent Budgeting', 'Material Procurement', 'On-time Delivery']
  },
  {
    id: 'planning',
    title: '2D Plan & 3D Elevation',
    desc: 'Professional architectural design and 3D visualizations to help you see your dream home before we start building.',
    image: 'service-residential',
    icon: PencilRuler,
    features: ['Vastu Compliant', 'Realistic Renders', 'Space Optimization']
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    desc: 'Functional and aesthetic commercial spaces designed for efficiency and modern business needs.',
    image: 'service-commercial',
    icon: Building2,
    features: ['Sustainable Design', 'Modern Façades', 'Safety Compliant']
  },
  {
    id: 'interiors',
    title: 'Interior Work',
    desc: 'Exquisite interior transformations that blend functionality with high-end aesthetic appeal.',
    image: 'project-3',
    icon: Palette,
    features: ['Custom Cabinetry', 'Lighting Design', 'Premium Finishes']
  },
  {
    id: 'pmc',
    title: 'Project Management (PMC)',
    desc: 'Expert consultation and management services to ensure your project stays on track and within budget.',
    image: 'service-industrial',
    icon: FileSpreadsheet,
    features: ['Cost Management', 'Site Supervision', 'Quality Audits']
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Our Expertise</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Engineering <br /><span className="text-primary not-italic">Solutions</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest">Across Karnataka | Starting from ₹2000/sq ft</p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center space-x-3 bg-off-white p-4 border border-muted/20">
                      <CheckCircle size={18} className="text-primary" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative aspect-[4/3] group overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <Image 
                  src={PlaceHolderImages.find(img => img.id === service.image)?.imageUrl || PlaceHolderImages[0].imageUrl} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-[20px] border-black/5 m-6 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialities */}
      <section className="bg-black text-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Speciality</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Strategic <span className="text-primary not-italic">Execution</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'High-end Renovation', desc: 'Transforming existing structures into modern masterpieces.' },
              { title: 'Sustainable Build', desc: 'Eco-friendly practices and energy-efficient designs.' },
              { title: 'Tech-Based Execution', desc: 'Leveraging modern engineering tools for precision.' },
            ].map((item, i) => (
              <div key={i} className="relative p-12 border border-white/10 hover:border-primary transition-all group text-center">
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-4 text-primary italic">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
