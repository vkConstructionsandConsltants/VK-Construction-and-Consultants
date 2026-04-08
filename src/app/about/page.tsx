
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Target, Eye, Users, Briefcase } from 'lucide-react';

export default function About() {
  const teamImg = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Our Legacy</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Engineering <br /><span className="text-primary not-italic">Excellence</span></h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-2xl font-bold leading-relaxed mb-8 text-foreground uppercase italic tracking-tighter">
                GoldenBuild India is a premier construction firm dedicated to setting new benchmarks in the Indian real estate and infrastructure landscape.
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Established in 1999, we began as a small family venture with a big vision: to build with integrity and innovation. Over two decades, we have evolved into a technology-driven engineering powerhouse, completing some of the most challenging projects in the subcontinent.
                </p>
                <p>
                  Our commitment to 'The Golden Standard' ensures that every project—from luxury residential villas to high-rise corporate hubs—receives meticulous attention to detail and superior craftsmanship.
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image 
                src={teamImg?.imageUrl || ''} 
                alt="Our Team" 
                fill 
                className="object-cover"
              />
              <div className="absolute top-0 right-0 w-full h-full border-t-[20px] border-r-[20px] border-primary/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-off-white py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white p-16 shadow-sm border-t-4 border-primary">
            <Target className="text-primary mb-8" size={48} />
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver superior quality construction through innovative engineering and sustainable practices, creating lasting value for our clients and the communities we serve.
            </p>
          </div>
          <div className="bg-white p-16 shadow-sm border-t-4 border-secondary">
            <Eye className="text-secondary mb-8" size={48} />
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted and respected construction partner, recognized globally for architectural brilliance, ethical standards, and transformative infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Leadership</h4>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">The Minds <span className="text-primary not-italic">Behind</span> The Vision</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { name: 'Vikram Singh', role: 'Founder & CEO', icon: Briefcase },
            { name: 'Anjali Sharma', role: 'Head of Architecture', icon: Users },
            { name: 'Rajesh Mehta', role: 'Chief Engineer', icon: Briefcase },
          ].map((member, i) => (
            <div key={i} className="group border border-muted p-12 text-center hover:bg-black hover:text-white transition-all duration-500">
              <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-8 rounded-full group-hover:bg-primary transition-colors">
                <member.icon size={32} className="text-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tighter mb-2">{member.name}</h4>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
