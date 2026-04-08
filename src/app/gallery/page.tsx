
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Residential', 'Commercial', 'Consultation', 'Interior'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  
  const projects = [
    { id: 1, title: 'Om Shanti Bhavana', category: 'Residential', location: 'Channarayapatna', image: 'project-1' },
    { id: 2, title: 'Mysore Turnkey Villa', category: 'Residential', location: 'Vijayanagar', image: 'project-2' },
    { id: 3, title: 'Corporate Office Site', category: 'Commercial', location: 'Mysore', image: 'service-commercial' },
    { id: 4, title: 'Aura Heights PMC', category: 'Consultation', location: 'Hassan', image: 'hero-main' },
    { id: 5, title: 'Luxury Penthouse', category: 'Interior', location: 'Mysore', image: 'project-3' },
    { id: 6, title: 'Rural Housing Project', category: 'Residential', location: 'Mandya', image: 'service-residential' },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-10">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Case Studies</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Featured <br /><span className="text-primary not-italic">Projects</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest">Delivering Quality Across Karnataka</p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 border-b border-muted/30 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-8 py-3 text-[10px] uppercase tracking-widest font-black border transition-all",
                activeTab === cat 
                  ? "bg-primary border-primary text-white" 
                  : "border-muted/50 text-muted-foreground hover:border-black hover:text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 py-10 mb-32 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-off-white border border-muted/20">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === project.image)?.imageUrl || PlaceHolderImages[0].imageUrl} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="text-black" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-1 italic">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{project.category} | {project.location}</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground border-b border-muted">#2024-{project.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
