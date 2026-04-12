
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Building2, Home as HomeIcon, Factory, Palette, Settings, CheckCircle, PencilRuler, Construction, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    id: 'turnkey',
    title: 'Turnkey Construction',
    desc: 'Complete end-to-end construction service — from design, planning, approvals, materials, labour, execution to final handover.',
    image: 'service-turnkey',
    icon: Construction,
    features: ['Approvals & Planning', 'Material Procurement', 'Final Handover']
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    desc: 'Construction of individual houses, villas, duplex homes with quality materials and structural safety.',
    image: 'service-residential',
    icon: HomeIcon,
    features: ['Villas & Duplex', 'Structural Safety', 'Quality Materials']
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    desc: 'Construction of offices, shops, commercial complexes and business buildings.',
    image: 'service-commercial',
    icon: Building2,
    features: ['Office Spaces', 'Shops & Complexes', 'Modern Design']
  },
  {
    id: 'interiors',
    title: 'Interior Work',
    desc: 'Interior design and execution including modular kitchen, wardrobes, false ceiling, lighting and finishes.',
    image: 'service-interiors',
    icon: Palette,
    features: ['Modular Kitchen', 'False Ceiling', 'Premium Finishes']
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Upgrading or modifying existing buildings including structural changes, redesign and improvements.',
    image: 'service-renovation',
    icon: Settings,
    features: ['Structural Changes', 'Redesign', 'Building Improvement']
  },
  {
    id: 'consultancy',
    title: 'Structural Consultancy',
    desc: 'Expert advice on structural safety, load calculations and construction feasibility.',
    image: 'service-structural',
    icon: CheckCircle,
    features: ['Safety Analysis', 'Load Calculations', 'Feasibility Study']
  },
  {
    id: '2d-plan',
    title: '2D Plan Design',
    desc: 'Detailed architectural floor plans showing layout, room sizes and spatial planning.',
    image: 'service-2d',
    icon: PencilRuler,
    features: ['Floor Layout', 'Spatial Planning', 'Vastu Compliant']
  },
  {
    id: '3d-elevation',
    title: '3D Elevation Design',
    desc: '3D visual representation of building exterior before construction begins.',
    image: 'service-3d',
    icon: Factory,
    features: ['Visual Mockups', 'Exterior Design', 'Realistic Renders']
  },
  {
    id: 'pmc',
    title: 'Project Management & Consultation (PMC)',
    desc: 'Professional guidance for planning, budgeting, monitoring and managing construction projects efficiently.',
    image: 'service-pmc',
    icon: FileSpreadsheet,
    features: ['Budgeting', 'Project Monitoring', 'Efficient Management']
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
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
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
