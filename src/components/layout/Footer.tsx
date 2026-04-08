
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl font-bold tracking-tighter font-headline text-white group-hover:text-primary transition-colors">
              GOLDENBUILD
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary ml-1">
              India
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Excellence in construction and architectural innovation. We build the future of India with integrity, precision, and luxury.
          </p>
          <div className="flex space-x-4">
            {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Icon size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white hover:pl-2 transition-all">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Services</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Commercial Projects', 'Residential Suites', 'Infrastructure', 'Interior Design'].map((item) => (
              <li key={item}>
                <Link href="/services" className="text-gray-400 hover:text-white hover:pl-2 transition-all">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Contact Us</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start space-x-4">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <span className="text-gray-400 leading-relaxed">
                45 Golden Avenue, Business District, <br />Mumbai, Maharashtra 400001
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone size={20} className="text-primary shrink-0" />
              <span className="text-gray-400">+91 (22) 5550-0198</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={20} className="text-primary shrink-0" />
              <span className="text-gray-400">contact@goldenbuild.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
        <p>© 2024 GoldenBuild India. All Rights Reserved.</p>
        <div className="flex space-x-8">
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
