
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/VK Logo (1).jpeg';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col items-start group">
            <Image 
              src={logo} 
              alt="V K Construction Logo" 
              width={80} 
              height={80} 
              className="mb-4 transition-all duration-500"
            />
            <span className="text-2xl font-bold tracking-tighter font-headline text-white group-hover:text-primary transition-colors">
              V K CONSTRUCTION
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary ml-1">
              & CONSULTANTS
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            UDYAM Registered turnkey construction experts in Mysore. Specializing in high-performance residential and commercial builds across Karnataka. Build your legacy with confidence.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vk.construction_consultants?igsh=Z2VkbjZzcXN4NHM=" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <Instagram size={18} className="text-gray-400 group-hover:text-white" />
            </a>
            <a href="https://wa.me/919901620876" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all group">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-[18px] h-[18px] text-gray-400 group-hover:text-white"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={
                    item === 'Home' ? '/' : 
                    item === 'Gallery' ? '/projects' : 
                    `/${item.toLowerCase().replace(' ', '')}`
                  } 
                  className="text-gray-400 hover:text-white hover:pl-2 transition-all"
                >
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
            {[
              { name: 'Turnkey Construction', id: 'turnkey' },
              { name: 'Residential Construction', id: 'residential' },
              { name: 'Commercial Construction', id: 'commercial' },
              { name: 'Interior Work', id: 'interiors' },
              { name: 'Renovation', id: 'renovation' },
              { name: 'Structural Consultancy', id: 'consultancy' },
              { name: '2D Plan Design', id: '2d-plan' },
              { name: '3D Elevation Design', id: '3d-elevation' },
              { name: 'Project Management', id: 'pmc' }
            ].map((service) => (
              <li key={service.id}>
                <Link href={`/services#${service.id}`} className="text-gray-400 hover:text-white hover:pl-2 transition-all">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Get In Touch</h4>
          <ul className="space-y-6 text-sm">
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=High+Tension+Double+Road+Dhanush+Corner+Vijayanagar+4th+Stage+Mysore+570017" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group"
              >
                <MapPin size={20} className="text-primary shrink-0 mt-1 transition-transform group-hover:scale-110" />
                <span className="text-gray-400 leading-relaxed group-hover:text-white transition-colors">
                  High Tension Double Road, Near Dhanush Corner, <br />Vijayanagar 4th Stage, Mysore – 570017
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+919901620876" className="flex items-center space-x-4 group">
                <Phone size={20} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-gray-400 group-hover:text-white transition-colors">+91 99016 20876</span>
              </a>
            </li>
            <li>
              <a href="mailto:vkconstructionandconsultants@gmail.com" className="flex items-center space-x-4 group">
                <Mail size={20} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                <span className="text-gray-400 break-all group-hover:text-white transition-colors">vkconstructionandconsultants@gmail.com</span>
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <Clock size={20} className="text-primary shrink-0" />
              <span className="text-gray-400">Mon–Sat, 9 AM – 8 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
        <p>© 2024 V K Construction & Consultants. UDYAM Registered.</p>
      </div>
    </footer>
  );
}
