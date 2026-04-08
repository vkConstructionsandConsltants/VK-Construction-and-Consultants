
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Target, Eye, Users, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Who We Are</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">V K <span className="text-primary not-italic">Construction</span> <br /> & Consultants</h1>
          <p className="text-gray-400 font-bold tracking-widest uppercase">Founded in 2021 by Pradeep Kumar K C</p>
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
                    <p className="text-xs">UDYAM Registered Construction Firm</p>
                  </div>
                </div>
                <p>
                  V K Construction is a trusted construction firm founded in 2021. We bring over 5 years of industry experience to every project, focusing on technical excellence and customer-centric delivery.
                </p>
              </div>
            </div>
            <div className="relative aspect-square order-1 lg:order-2">
              <Image 
                src={teamImg?.imageUrl || ''} 
                alt="Pradeep Kumar K C - Founder" 
                fill 
                className="object-cover"
              />
              <div className="absolute top-0 right-0 w-full h-full border-t-[20px] border-r-[20px] border-primary/20 pointer-events-none" />
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
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-10">Quality <span className="text-primary not-italic">Standards</span></h3>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-widest text-xs">QA & QC</h5>
              <p className="text-sm text-muted-foreground">Rigorous Quality Assurance & Quality Control measures integrated into every stage of execution.</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black uppercase tracking-widest text-xs">Technical Standards</h5>
              <p className="text-sm text-muted-foreground">Adherence to modern construction best practices and international material standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
