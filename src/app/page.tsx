
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Award, Shield, Timer, HardHat } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-main');
  const featuredProjects = PlaceHolderImages.filter(img => img.id.startsWith('project-')).slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg?.imageUrl || ''} 
            alt={heroImg?.description || ''} 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="luxury skyscraper"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-20">
          <div className="max-w-3xl animate-fade-in-up">
            <h4 className="text-primary uppercase tracking-[0.4em] font-bold text-sm mb-6 flex items-center">
              <span className="w-12 h-px bg-primary mr-4"></span>
              Pioneers of Indian Infrastructure
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter uppercase italic">
              Building <br /><span className="text-primary not-italic">Legacy</span> In Gold
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl font-medium leading-relaxed">
              We translate architectural visions into breathtaking realities. With a focus on high-end commercial and residential construction across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/gallery" 
                className="bg-primary text-primary-foreground px-10 py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center hover:bg-secondary transition-all"
              >
                Explore Portfolio <ArrowRight className="ml-3" size={18} />
              </Link>
              <Link 
                href="/about" 
                className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center hover:bg-white/10 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 lg:px-12 border-b border-muted bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {[
            { label: 'Years Experience', value: '25+' },
            { label: 'Completed Projects', value: '150+' },
            { label: 'Awards Won', value: '12' },
            { label: 'Happy Clients', value: '300+' },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:border-r last:border-0 border-muted">
              <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-2 italic tracking-tighter">{stat.value}</h3>
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features/Values */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Core Values</h4>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Uncompromising <br />Standards of Quality</h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Every structure we build is a testament to our dedication to excellence and architectural precision. We don't just build walls; we craft experiences.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: Shield, title: 'Reliability', desc: 'Consistent delivery on every promise made.' },
                  { icon: Award, title: 'Excellence', desc: 'Finest materials and expert craftsmanship.' },
                  { icon: Timer, title: 'Punctuality', desc: 'Strict adherence to project timelines.' },
                  { icon: HardHat, title: 'Safety', desc: 'Global safety standards for our workforce.' },
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
              <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'about-team')?.imageUrl || ''} 
                  alt="Team" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-12 text-white hidden md:block">
                <span className="text-6xl font-black italic block mb-2">25</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold">Years of Architectural <br />Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-black text-white px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Iconic Landmark Projects</h2>
          </div>
          <Link href="/gallery" className="text-xs uppercase tracking-[0.3em] font-bold text-white flex items-center hover:text-primary transition-colors">
            View All Projects <ChevronRight className="ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[3/4]">
              <Image 
                src={project.imageUrl} 
                alt={project.description} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
                <h5 className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Commercial</h5>
                <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase">{project.description.split(' - ')[0]}</h3>
                <Link href="/gallery" className="text-[10px] uppercase tracking-[0.2em] font-bold inline-flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-12 bg-off-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase italic">Ready to Build Your <span className="text-primary not-italic">Vision?</span></h2>
          <p className="text-lg text-muted-foreground mb-12 font-medium">
            Contact us today for a professional consultation and discover how we can transform your concepts into architectural masterpieces.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white px-12 py-6 text-sm uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
