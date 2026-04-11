
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Award, Shield, Timer, HardHat, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-villa');
  const featuredProjects = [
    { 
      id: 'project-1', 
      title: 'Om Shanti Bhavana', 
      type: 'Residential', 
      location: 'Channarayapatna, Hassan', 
      area: '5000 sq ft',
      imageUrl: '/images/project-om-shanti.jpeg'
    },
    { 
      id: 'project-2', 
      title: 'Mr. Divakar Residence', 
      type: 'Technical Support', 
      location: 'K R Nagar', 
      area: '2400 sq ft',
      imageUrl: '/images/project-divakar.jpeg'
    },
    { 
      id: 'project-3', 
      title: 'Mr. Girish Residence', 
      type: 'New Construction', 
      location: 'K R Nagar', 
      area: '3200 sq ft',
      imageUrl: '/images/project-girish.jpeg'
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg?.imageUrl || ''} 
            alt="V K Construction Hero" 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="modern construction"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h4 className="text-primary uppercase tracking-[0.4em] font-bold text-sm mb-6 flex items-center">
              <span className="w-12 h-px bg-primary mr-4"></span>
              ESTABLISHED 2021
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase italic">
              Build Smart <br /><span className="text-primary not-italic">Build Strong</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
              V K Construction & Consultants are your Turnkey Construction Experts. Delivering high-quality residential and commercial projects across Karnataka within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/gallery" 
                className="bg-primary text-primary-foreground px-10 py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center hover:bg-secondary transition-all"
              >
                Our Portfolio <ArrowRight className="ml-3" size={18} />
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center hover:bg-white/10 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-12 border-b border-muted bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {[
            { label: 'Consultations Done', value: '200+' },
            { label: 'Happy Clients', value: '200+' },
            { label: 'Material Contracts', value: '10+' },
            { label: 'Years Experience', value: '5+' },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:border-r last:border-0 border-muted">
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-2 italic tracking-tighter">{stat.value}</h3>
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">The V K Edge</h4>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic">Excellence in <br />Construction</h2>
                <p className="text-muted-foreground leading-relaxed max-w-md font-medium">
                  We are a trusted construction firm delivering projects with a primary focus on safety, quality, and timely delivery within your budget.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: Shield, title: 'Quality Assurance', desc: 'Strict adherence to material & technical standards.' },
                  { icon: CheckCircle2, title: 'Transparency', desc: 'Clear and effective cost management.' },
                  { icon: Timer, title: 'On-Time Delivery', desc: 'Committed to finishing projects as promised.' },
                  { icon: HardHat, title: 'Safety First', desc: 'Modern construction best practices for safety.' },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <item.icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h5 className="font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative overflow-hidden shadow-2xl bg-black">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'vk-full-official')?.imageUrl || ''} 
                  alt="V K Construction Excellence" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Om Shanti Bhavana */}
      <section className="py-32 bg-black text-white px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Our Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Signature Projects</h2>
            <p className="text-primary mt-2 font-bold tracking-widest">RESIDENTIAL | COMMERCIAL | TURNKEY</p>
          </div>
          <Link href="/gallery" className="text-xs uppercase tracking-[0.3em] font-bold text-white flex items-center hover:text-primary transition-colors">
            Explore All Projects <ChevronRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <div key={project.id} className="group relative overflow-hidden aspect-[3/4] border border-white/10">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <h5 className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{project.type}</h5>
                <h3 className="text-2xl font-bold mb-1 tracking-tighter uppercase italic">{project.title}</h3>
                <p className="text-[10px] text-gray-400 mb-4 uppercase tracking-widest">{project.location}</p>
                <Link href="/gallery" className="text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase italic">Ready to Build Your <span className="text-primary not-italic">Dream?</span></h2>
          <p className="text-lg text-muted-foreground mb-12 font-medium">
            Starting Price: ₹2000 – ₹2400 per sq ft. Get in touch with Pradeep Kumar K C for expert consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/contact" 
              className="inline-block bg-black text-white px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all"
            >
              Start Consultation
            </Link>
            <a 
              href="https://wa.me/919901620876" 
              className="inline-block border-2 border-black px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
