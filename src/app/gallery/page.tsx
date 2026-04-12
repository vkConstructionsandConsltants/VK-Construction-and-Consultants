
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Residential', 'Commercial', 'Consultation', 'Interior'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  
  const projects = [
    { id: 1, title: 'Om Shanti Bhavana', category: 'Residential', location: 'Channarayapatna', image: 'project-1' },
    { id: 2, title: 'Mysore Turnkey Villa', category: 'Residential', location: 'Vijayanagar', image: 'project-2' },
    { id: 3, title: 'Corporate Office Site', category: 'Commercial', location: 'Mysore', image: 'service-commercial' },
    { id: 4, title: 'Aura Heights PMC', category: 'Consultation', location: 'Hassan', image: 'hero-main' },
    { id: 5, title: 'Luxury Penthouse', category: 'Interior', location: 'Mysore', image: 'project-3' },
    { id: 6, title: 'Rural Housing Project', category: 'Residential', location: 'Mandya', image: 'service-residential' },
    { id: 7, title: '3D Elevation Design', category: 'Consultation', location: 'Hunsur', image: 'service-3d-v2' },
    { id: 8, title: 'Modern Interior Work', category: 'Interior', location: 'Mysore', image: 'service-interiors' },
    { id: 9, title: 'Industrial Warehouse', category: 'Commercial', location: 'Mysore', image: 'service-industrial' },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const openLightbox = (index: number) => {
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextProject = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
  }, [selectedProjectIndex, filteredProjects.length]);

  const prevProject = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }, [selectedProjectIndex, filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, nextProject, prevProject]);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-10">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4 text-center md:text-left">Portfolio</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 text-center md:text-left">Signature <br /><span className="text-primary not-italic">Works</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">Excellence in every square foot</p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-start gap-4 border-b border-muted/20 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-3 text-[10px] uppercase tracking-widest font-black border transition-all duration-300",
                activeTab === cat 
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                  : "border-muted/30 text-muted-foreground hover:border-black hover:text-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid - Masonry Style */}
      <section className="px-6 lg:px-12 py-10 mb-32">
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={project.id} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden bg-off-white border border-muted/10 group-hover:border-primary/30 transition-colors">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === project.image)?.imageUrl || PlaceHolderImages[0].imageUrl} 
                  alt={project.title} 
                  width={800}
                  height={1000}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full mb-4 shadow-xl">
                      <Maximize2 size={16} />
                    </div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tighter italic">{project.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold">{project.category} | {project.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-full backdrop-blur-md"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows (Desktop) */}
            <button 
              onClick={prevProject}
              className="absolute left-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            {/* Main Image Container with Swipe/Animation */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProjectIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) prevProject();
                    if (info.offset.x < -100) nextProject();
                  }}
                  className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center overflow-hidden"
                >
                  <Image 
                    src={PlaceHolderImages.find(img => img.id === filteredProjects[selectedProjectIndex].image)?.imageUrl || PlaceHolderImages[0].imageUrl} 
                    alt={filteredProjects[selectedProjectIndex].title}
                    fill
                    className="object-contain pointer-events-none"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 md:hidden">
                <p className="text-xs font-bold uppercase tracking-widest">Swipe for more</p>
              </div>
            </div>

            {/* Info Footer (Desktop) */}
            <div className="absolute bottom-10 left-10 md:block hidden">
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                {filteredProjects[selectedProjectIndex].title}
              </h2>
              <p className="text-primary uppercase tracking-[0.2em] font-bold text-xs mt-2">
                {filteredProjects[selectedProjectIndex].category} — {filteredProjects[selectedProjectIndex].location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
