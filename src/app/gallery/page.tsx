
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  "WhatsApp Image 2026-04-08 at 11.22.00 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.00.jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.01 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.01 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.01 (3).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.01.jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.02 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.02 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.02.jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.04 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.04.jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.05.jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.06 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.06 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.07 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.22.07.jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.19 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.19 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.19.jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.20 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.20 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.20.jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.21 (1).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.21 (2).jpeg",
  "WhatsApp Image 2026-04-08 at 11.26.21.jpeg",
  "WhatsApp Image 2026-04-12 at 10.03.31.jpeg",
  "WhatsApp Image 2026-04-12 at 10.04.35.jpeg",
  "WhatsApp Image 2026-04-12 at 10.43.50.jpeg",
  "WhatsApp Image 2026-04-12 at 10.43.51.jpeg",
  "WhatsApp Image 2026-04-12 at 10.43.52.jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.56.jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.57 (1).jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.57.jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.58 (1).jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.58.jpeg",
  "WhatsApp Image 2026-04-12 at 10.44.59.jpeg",
  "WhatsApp Image 2026-04-13 at 20.23.45.jpeg",
  "WhatsApp Image 2026-04-13 at 20.23.46 (1).jpeg",
  "WhatsApp Image 2026-04-13 at 20.23.46 (2).jpeg",
  "WhatsApp Image 2026-04-13 at 20.23.46.jpeg",
  "WhatsApp Image 2026-04-13 at 20.23.47.jpeg",
  "WhatsApp Image 2026-04-13 at 20.30.28.jpeg",
  "WhatsApp Image 2026-04-13 at 20.36.31.jpeg",
  "WhatsApp Image 2026-04-13 at 20.37.36.jpeg",
  "WhatsApp Image 2026-04-13 at 20.39.19.jpeg",
  "WhatsApp Image 2026-04-13 at 20.42.35.jpeg",
  "WhatsApp Image 2026-04-13 at 20.42.36.jpeg",
  "WhatsApp Image 2026-04-13 at 20.42.37 (1).jpeg",
  "WhatsApp Image 2026-04-13 at 20.42.37.jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.27 (1).jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.27.jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.28 (1).jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.28.jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.40 (1).jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.40.jpeg",
  "WhatsApp Image 2026-04-13 at 21.47.52.jpeg",
];


export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  }, [selectedImageIndex]);

  const prevImage = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-10">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4 text-center md:text-left">Portfolio</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 text-center md:text-left">Gallery <br /><span className="text-primary not-italic">Showcase</span></h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">Our latest projects and construction milestones</p>
        </div>
      </section>

      {/* Grid - Masonry Style */}
      <section className="px-6 lg:px-12 py-10 mb-32">
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={index} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden bg-off-white border border-muted/10 group-hover:border-primary/30 transition-colors">
                <Image 
                  src={`/images/gallery/${image}`} 
                  alt={`V K Construction Project ${index + 1}`} 
                  width={800}
                  height={1000}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                {/* Minimal Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 md:p-10 select-none backdrop-blur-sm"
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-full backdrop-blur-md border border-white/10"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows (Desktop) */}
            <button 
              onClick={prevImage}
              className="absolute left-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-8 z-50 text-white/50 hover:text-white transition-colors bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) prevImage();
                    if (info.offset.x < -100) nextImage();
                  }}
                  className="relative w-full max-w-6xl h-full flex items-center justify-center overflow-hidden"
                >
                  <Image 
                    src={`/images/gallery/${galleryImages[selectedImageIndex]}`} 
                    alt={`Project ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain pointer-events-none"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Swipe indicator for mobile */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/40 md:hidden pointer-events-none">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Swipe to navigate</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
