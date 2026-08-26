"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Target, Eye, Users, Briefcase, GraduationCap, Award, Shield, CheckCircle } from 'lucide-react';

export default function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <div className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="bg-black text-white py-20 md:py-32 px-6 lg:px-12 mb-12 md:mb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs mb-4 md:mb-6 animate-in slide-in-from-bottom-4 duration-500">Who We Are</h4>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase italic mb-6 md:mb-10 leading-none animate-in slide-in-from-bottom-6 duration-700">
            V K <span className="text-primary not-italic">Construction</span> <br className="hidden sm:block" /> & Consultants
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs animate-in slide-in-from-bottom-8 duration-1000">
            Founded in 2021 by Pradeep Kumar K C
          </p>
        </div>
      </section>

      {/* Founder & Credibility */}
      <section className="px-6 lg:px-12 py-20 bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-8">Engineering <span className="text-primary not-italic">Background</span></h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-xl text-foreground font-bold italic tracking-tight">
                  "Our mission is to deliver quality projects safely, on time, and within budget, becoming a trusted leader through innovation and sustainability."
                </p>
                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  <div className="bg-white p-6 shadow-sm border-l-4 border-primary">
                    <GraduationCap className="text-primary mb-4" />
                    <h4 className="font-bold uppercase text-sm mb-2">Qualifications</h4>
                    <p className="text-xs">BE in Civil Engineering, MTech in Construction Technology and Management</p>
                  </div>
                  <div className="bg-white p-6 shadow-sm border-l-4 border-secondary">
                    <Award className="text-secondary mb-4" />
                    <h4 className="font-bold uppercase text-sm mb-2">Registration</h4>
                    <p className="text-xs">UDYAM Registered Construction Firm<br/>GST Number - 29CWYPP4384C1ZQ</p>
                  </div>
                </div>
                <p>
                  Founded in 2021 by Pradeep Kumar K C, VK Construction & Consultants was established to bridge the gap between quality construction and affordable turnkey solutions in Mysore. Pradeep's background in Civil Engineering (BE) and MTech in Construction Technology & Management ensures that every project is backed by deep technical expertise.
                </p>
                <p>
                  Today, we are a leading construction firm in Mysore, known for our UDYAM-registered operations and a growing footprint across Karnataka. We specialize in residential bungalows, commercial complexes, and luxury interior design.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-[1.6/1] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-muted/10 bg-white group">
                <Image 
                  src={teamImg?.imageUrl || ''} 
                  alt="V K Construction Visiting Card" 
                  fill
                  className="object-contain p-1 transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-off-white p-16 border-t-4 border-primary">
            <Target className="text-primary mb-8" size={48} />
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver quality projects safely, on time, and within budget, while maintaining the highest standards of transparency and client communication.
            </p>
          </div>
          <div className="bg-off-white p-16 border-t-4 border-secondary">
            <Eye className="text-secondary mb-8" size={48} />
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted leader in the construction industry across Karnataka through innovation, sustainability, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us List */}
      <section className="py-32 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Values</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">The V K <span className="text-primary not-italic">Difference</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Proven Expertise', desc: '5+ years of solid engineering and management experience.' },
              { title: 'Transparent Costs', desc: 'Detailed and effective cost management with no hidden fees.' },
              { title: 'Timely Delivery', desc: 'Projects delivered on schedule without quality compromises.' },
              { title: 'Custom Flexibility', desc: 'High degree of customization to suit your specific vision.' },
            ].map((item, i) => (
              <div key={i} className="border border-white/10 p-10 hover:border-primary transition-all">
                <h4 className="text-primary font-bold uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Commitment</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">Quality <span className="text-primary not-italic">Standards</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group p-10 bg-off-white border border-transparent hover:border-primary transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full">
                  <Shield size={24} className="text-primary transform group-hover:rotate-12 transition-transform" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-sm">QA & QC</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Rigorous Quality Assurance & Quality Control measures are integrated into every stage of execution to ensure structural integrity and aesthetic excellence.
              </p>
            </div>

            <div className="group p-10 bg-off-white border border-transparent hover:border-secondary transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full">
                  <CheckCircle size={24} className="text-secondary transform group-hover:rotate-12 transition-transform" />
                </div>
                <h4 className="font-black uppercase tracking-widest text-sm">Technical Standards</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Strict adherence to modern construction best practices and international material standards is maintained throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section for GEO/AEO */}
      <section className="py-32 px-6 lg:px-12 bg-off-white border-t border-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">At a Glance</h4>
              <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">Quick <span className="text-primary not-italic">Facts</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                As a UDYAM Registered firm, we adhere to the highest standards of transparency and quality as mandated by the Ministry of MSME, Government of India.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden border border-muted bg-white">
                <table className="w-full text-left text-sm">
                  <tbody>
                    <tr className="border-b border-muted">
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px] w-1/3">Company Name</th>
                      <td className="p-6 font-medium">VK Construction & Consultants</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px]">Founder & CEO</th>
                      <td className="p-6 font-medium">Pradeep Kumar K C (BE, MTech)</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px]">Headquarters</th>
                      <td className="p-6 font-medium">#4086, Ground Floor, Vijayanagara 4th Stage, 3rd Phase, Mysore – 570017</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px]">Registration</th>
                      <td className="p-6 font-medium">UDYAM Registered — Government of India<br/>GST Number - 29CWYPP4384C1ZQ</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px]">Project Zones</th>
                      <td className="p-6 font-medium">Mysore, Mandya, Hunsur, Bangalore & Across Karnataka</td>
                    </tr>
                    <tr>
                      <th className="p-6 bg-muted/20 font-bold uppercase tracking-widest text-[10px]">Service Model</th>
                      <td className="p-6 font-medium">Lump Sum, Item-Rate, and Turnkey Contracts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
