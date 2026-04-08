
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl font-bold tracking-tighter font-headline text-white group-hover:text-primary transition-colors">
              V K CONSTRUCTION
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary ml-1">
              & CONSULTANTS
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Turnkey Construction Experts – Build smart, build strong. Delivering high-quality residential and commercial projects across Karnataka since 2021.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vk.construction_consultants?igsh=Z2VkbjZzcXN4NHM=" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <Instagram size={18} className="text-gray-400 group-hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Navigation */}
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
            {[
              'Turnkey Construction',
              'Residential Projects',
              'Interior Work',
              'Structural Consultancy',
              '2D & 3D Planning'
            ].map((item) => (
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
          <h4 className="text-primary uppercase tracking-widest font-bold text-sm mb-8">Get In Touch</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start space-x-4">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <span className="text-gray-400 leading-relaxed">
                High Tension Double Road, Near Dhanush Corner, <br />Vijayanagar 4th Stage, Mysore – 570017
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone size={20} className="text-primary shrink-0" />
              <span className="text-gray-400">+91 99016 20876</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={20} className="text-primary shrink-0" />
              <span className="text-gray-400 break-all">vkconstructionandconsultants@gmail.com</span>
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
        <div className="flex space-x-8">
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
