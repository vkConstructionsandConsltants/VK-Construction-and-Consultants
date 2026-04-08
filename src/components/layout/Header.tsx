
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex flex-col items-start group">
          <span className="text-2xl font-bold tracking-tighter font-headline text-foreground group-hover:text-primary transition-colors">
            V K CONSTRUCTION
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary ml-1">
            & CONSULTANTS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-widest font-semibold transition-all hover:text-primary relative group",
                pathname === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                pathname === item.href ? "w-full" : ""
              )}></span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-secondary transition-all"
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background shadow-xl border-t border-muted md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg uppercase tracking-widest font-bold",
                  pathname === item.href ? "text-primary border-l-4 border-primary pl-4" : "text-foreground pl-4"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
