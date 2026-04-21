"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Building2, Home as HomeIcon, Factory, Palette, Settings, CheckCircle, PencilRuler, Construction, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    id: 'turnkey',
    title: 'Turnkey Construction',
    desc: 'Our comprehensive "Start-to-Finish" service. From architectural planning and government approvals (MUDA/NOCs) to material selection and final painting, we handle everything under one professional contract.',
    image: 'service-turnkey',
    icon: Construction,
    features: ['MUDA/Municipal Approvals', 'Structural Design & Execution', 'Quality Material Procurement', 'Final Handover with Warranty'],
    details: [
      { label: 'Process', value: 'Concept → 2D/3D Design → Budgeting → Construction → Final Handover' },
      { label: 'Timeline', value: '8 – 12 months for standard duplex residential builds.' },
      { label: 'Cost Model', value: 'Lump-sum contract based on mutually agreed BOQ.' }
    ]
  },
  {
    id: 'residential',
    title: 'Residential Construction',
    desc: 'Specializing in individual villas, bungalows, and duplex houses. We focus on Vastu-compliant designs and earthquake-resistant structural safety using premium grade steel and cement.',
    image: 'service-residential',
    icon: HomeIcon,
    features: ['Individual Villas & Bungalows', 'Foundation to Finish (Labour/Material)', 'Vastu Compliant Planning', 'Structural Warranty'],
    details: [
      { label: 'Pricing', value: 'Starts at ₹2,000/sq ft (Basic) to ₹2,400+/sq ft (Premium).' },
      { label: 'Coverage', value: 'Mysore, Mandya, Hunsur, and surrounding regions.' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    desc: 'Expert construction of complex retail, office, and hospitality spaces. We understand building codes, safety regulations, and the need for business-ready infrastructure.',
    image: 'service-commercial',
    icon: Building2,
    features: ['Office Buildings & Tech Parks', 'Retail Shops & Shopping Complexes', 'Industrial Sheds & Warehouses', 'Rigid Quality & Safety Compliance'],
    details: [
      { label: 'Timeline', value: 'Varies based on scale (Average 12-24 months).' },
      { label: 'Standard', value: 'High-grade commercial concrete and structural glazing.' }
    ]
  },
  {
    id: 'interiors',
    title: 'Interior Work',
    desc: 'Bespoke interior design and turnkey execution. From modular kitchens and wardrobes to high-end false ceilings and custom lighting design.',
    image: 'service-interiors',
    icon: Palette,
    features: ['Modular Kitchen & Wardrobes', 'Luxury False Ceiling & POP', 'Custom Lighting & Electricals', 'Premium Flooring & Wallpaper'],
    details: [
      { label: 'Packages', value: 'Standard, Premium, and Luxury options available.' },
      { label: 'Turnaround', value: '45 – 90 days from design sign-off.' }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation',
    desc: 'Giving new life to existing structures. We specialize in structural retrofitting, architectural redesign, and complete building modernization.',
    image: 'service-renovation',
    icon: Settings,
    features: ['Structural Strengthening', 'Bathroom & Kitchen Remodeling', 'Floor Replacement & Painting', 'Electrical & Plumbing Overhaul'],
    details: [
      { label: 'Focus', value: 'Structural stability and modern aesthetic upgrade.' },
      { label: 'Estimate', value: 'Detailed site audit required before quotation.' }
    ]
  },
  {
    id: 'consultancy',
    title: 'Structural Consultancy',
    desc: 'Advanced structural engineering services. We provide load analysis, stability audits, and technical designs for projects of all sizes.',
    image: 'service-structural',
    icon: CheckCircle,
    features: ['Load Bearing Analysis', 'RCC Structural Design', 'Stability Certificates', 'Site Technical Audits'],
    details: [
      { label: 'Expertise', value: 'MTech Qualified Engineering Consultancy.' },
      { label: 'Coverage', value: 'Mysore, Bangalore, and all major Karnataka districts.' }
    ]
  },
  {
    id: '2d-plan',
    title: '2D Plan Design',
    desc: 'Precision architectural drafting. Vastu-compliant floor plans that optimize spatial efficiency and natural light.',
    image: 'service-2d',
    icon: PencilRuler,
    features: ['Vastu Compliant Layouts', 'MUDA/Municipal Approval Drawings', 'Working Architectural Details', 'Spatial Efficiency Planning'],
    details: [
      { label: 'Delivery', value: 'PDF & CAD soft copies + Hard copy sets.' },
      { label: 'Timeframe', value: '3 – 7 working days based on plot size.' }
    ]
  },
  {
    id: '3d-elevation',
    title: '3D Elevation Design',
    desc: 'Photorealistic 3D building visualizations. See your dream home in stunning detail before the first brick is laid.',
    image: 'service-3d',
    icon: Factory,
    features: ['High-Res Realistic Renders', 'Material Palette Selection', 'Landscape & Night-view Analysis', 'Walkthrough Animations (Optional)'],
    details: [
      { label: 'Quality', value: 'Photorealistic 4K Render Resolution.' },
      { label: 'Revision', value: 'Multiple design iterations to suit your taste.' }
    ]
  },
  {
    id: 'pmc',
    title: 'Project Management & Consultation (PMC)',
    desc: 'Third-party project monitoring to ensure quality and budget control for developers and independent owners.',
    image: 'service-pmc',
    icon: FileSpreadsheet,
    features: ['Bill Verification & Auditing', 'Quality Control Inspections', 'Project Timeline Monitoring', 'Vendor Management & Coordination'],
    details: [
      { label: 'Objective', value: 'Zero cost-overrun and 100% quality assurance.' },
      { label: 'Fee Model', value: 'Percentage or Fixed-fee based models.' }
    ]
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
                
                {service.details && (
                  <div className="mb-10 space-y-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm border-b border-muted/20 pb-3">
                        <span className="font-black uppercase tracking-widest text-[10px] text-primary sm:w-24">{detail.label}</span>
                        <span className="text-muted-foreground font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}

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
                  priority={i === 0}
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
