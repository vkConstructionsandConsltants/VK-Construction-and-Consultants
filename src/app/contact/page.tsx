
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-black text-white py-24 px-6 lg:px-12 mb-20">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Get In Touch</h4>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">Start Your <br /><span className="text-primary not-italic">Journey</span> With Us</h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-12 py-20 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Form */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-8">Send A <span className="text-primary not-italic">Message</span></h3>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold">Full Name</label>
                    <input type="text" className="w-full bg-off-white border border-muted p-5 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold">Email Address</label>
                    <input type="email" className="w-full bg-off-white border border-muted p-5 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Subject</label>
                  <select className="w-full bg-off-white border border-muted p-5 focus:border-primary outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Commercial Project</option>
                    <option>Residential Construction</option>
                    <option>Interior Design</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Your Message</label>
                  <textarea rows={6} className="w-full bg-off-white border border-muted p-5 focus:border-primary outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all flex items-center">
                  Submit Inquiry <Send size={16} className="ml-3" />
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-12">
              <div>
                <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-8">Contact Info</h4>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Our Office</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        45 Golden Avenue, Business District, <br />Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Phone</h5>
                      <p className="text-sm text-muted-foreground">+91 (22) 5550-0198</p>
                      <p className="text-sm text-muted-foreground">+91 (22) 5550-0199</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold uppercase tracking-tighter mb-2">Email</h5>
                      <p className="text-sm text-muted-foreground">contact@goldenbuild.in</p>
                      <p className="text-sm text-muted-foreground">careers@goldenbuild.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-12 text-white">
                <h4 className="text-sm uppercase tracking-widest font-black mb-4 italic">Quick Estimate?</h4>
                <p className="text-xs leading-relaxed mb-8 opacity-90">
                  Fill out our detailed project brief form for a more accurate quote and timeline projection.
                </p>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b-2 border-white pb-2 hover:opacity-80 transition-opacity">
                  Download Project Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-muted relative overflow-hidden grayscale contrast-125">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
               <MapPin size={48} className="text-primary mx-auto mb-4" />
               <p className="text-xs uppercase tracking-widest font-bold">Interactive Map Integration</p>
            </div>
         </div>
      </section>
    </div>
  );
}
