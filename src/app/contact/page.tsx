
import { Mail, Phone, MapPin, Send, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Get In Touch</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Build Your <br /><span className="text-primary not-italic">Legacy</span> With Us</h1>
          <p className="text-gray-400 font-bold uppercase tracking-widest">Service across all over Karnataka</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-12 py-20 mb-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Form */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-8">Send A <span className="text-primary not-italic">Message</span></h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black">Full Name</label>
                    <input type="text" className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black">Phone Number</label>
                    <input type="tel" className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" placeholder="99016XXXXX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black">Interested Service</label>
                  <select className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm appearance-none">
                    <option>Turnkey Construction</option>
                    <option>Residential Project</option>
                    <option>Commercial Construction</option>
                    <option>2D Plan & 3D Elevation</option>
                    <option>Interior Work</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black">Your Message</label>
                  <textarea rows={6} className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" placeholder="Tell us about your project location and requirements..."></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all flex items-center">
                  Submit Inquiry <Send size={16} className="ml-3" />
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-12">
              <div>
                <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-8">Business Info</h4>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Office Address</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        High Tension Double Road, Near Dhanush Corner, <br />Vijayanagar 4th Stage, Mysore – 570017
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Contact</h5>
                      <p className="text-sm text-muted-foreground">+91 9901620876</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Email</h5>
                      <p className="text-sm text-muted-foreground break-all">vkconstructionandconsultants@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Working Hours</h5>
                      <p className="text-sm text-muted-foreground">Mon–Sat, 9 AM – 8 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-12 text-white shadow-xl">
                <Instagram size={40} className="mb-6" />
                <h4 className="text-xl uppercase tracking-tighter font-black mb-4 italic leading-tight">Follow Our Journey</h4>
                <p className="text-xs leading-relaxed mb-8 opacity-90">
                  See our ongoing projects and site updates daily on Instagram.
                </p>
                <a 
                  href="https://www.instagram.com/vk.construction_consultants?igsh=Z2VkbjZzcXN4NHM=" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest font-bold border-b-2 border-white pb-2 hover:opacity-80 transition-opacity"
                >
                  Visit Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-off-white relative overflow-hidden grayscale contrast-125 border-t border-muted">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
               <MapPin size={48} className="text-primary mx-auto mb-4" />
               <p className="text-xs uppercase tracking-widest font-bold">Vijayanagar 4th Stage, Mysore</p>
            </div>
         </div>
      </section>
    </div>
  );
}
