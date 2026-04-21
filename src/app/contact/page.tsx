"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Instagram, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#success') {
      setIsSubmitted(true);
      // Remove hash from URL without refreshing for a clean look
      window.history.replaceState(null, '', window.location.pathname);
      // Automatically hide the message after 10 seconds
      const timer = setTimeout(() => setIsSubmitted(false), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

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
              {isSubmitted ? (
                <div className="bg-primary/5 border border-primary/20 p-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-primary" size={40} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-4">Message <span className="text-primary not-italic">Sent!</span></h3>
                  <p className="text-muted-foreground font-medium mb-8">
                    Thank you for reaching out. Your inquiry has been successfully delivered. Our engineering team will review your details and contact you within 24–48 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-primary pb-2 hover:text-primary transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-8">Send A <span className="text-primary not-italic">Message</span></h3>
              <form action="https://formsubmit.co/vkconstructionandconsultants@gmail.com" method="POST" className="space-y-8">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Enquiry - VK Construction Website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://vk-construction-and-consultants.vercel.app/contact#success" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black">Full Name</label>
                    <input 
                      type="text" 
                      name="Full Name"
                      required
                      className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black">Phone Number</label>
                    <input 
                      type="tel" 
                      name="Phone Number"
                      required
                      pattern="[0-9]{10}"
                      className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" 
                      placeholder="99016XXXXX" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black">Interested Service</label>
                  <select 
                    name="Interested Service"
                    required
                    className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm appearance-none"
                  >
                    <option value="Turnkey Construction">Turnkey Construction</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Interior Work">Interior Work</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Structural Consultancy">Structural Consultancy</option>
                    <option value="2D Plan Design">2D Plan Design</option>
                    <option value="3D Elevation Design">3D Elevation Design</option>
                    <option value="Project Management & Consultation (PMC)">Project Management & Consultation (PMC)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-black">Your Message</label>
                  <textarea 
                    name="Message"
                    required
                    rows={6} 
                    className="w-full bg-off-white border border-muted/50 p-5 focus:border-primary outline-none transition-all text-sm" 
                    placeholder="Please share your plot size (e.g., 30x40), project location in Mysore, and whether you need turnkey or labour-only services..."
                  ></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all flex items-center">
                  Submit Inquiry <Send size={16} className="ml-3" />
                </button>
                  </form>
                </>
              )}
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

      {/* Map Section */}
      <section className="h-[500px] w-full relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15591.314227306236!2d76.5828453!3d12.32717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71f9f2e3a151%3A0x7d0a6c6d09e7c5b!2sVijayanagar%204th%20Stage%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712912345678!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
        />
        <div className="absolute top-8 left-8 z-10">
          <a 
            href="https://maps.google.com/maps?q=High%20Tension%20Double%20Road,%20Near%20Dhanush%20Corner,%20Vijayanagar%204th%20Stage,%20Mysore%20570017" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 text-[10px] uppercase font-bold tracking-widest flex items-center shadow-2xl hover:bg-primary transition-all"
          >
            <MapPin size={14} className="mr-3" />
            Open In Google Maps
          </a>
        </div>
      </section>

      {/* Contact FAQ / GEO section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-primary uppercase tracking-[0.3em] font-bold text-xs mb-4">Planning Your Project</h4>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">Service <span className="text-primary not-italic">Reach</span></h2>
            <p className="text-muted-foreground leading-relaxed font-medium">
              We primarily serve the <span className="text-foreground font-bold">Mysore Metropolitan Area</span> including Vijayanagar (all stages), JP Nagar, Kuvempunagar, and extended regions like Mandya, Hunsur, and Nanjangud.
            </p>
          </div>

          <div className="divide-y divide-muted">
            {[
              {
                q: "Do you offer free site visits in Mysore?",
                a: "Yes, for plots within a 20km radius of Mysore city, we offer a complimentary initial site visit and consultation to assess feasibility and provide a rough estimate."
              },
              {
                q: "What documents are required to start construction?",
                a: "You'll need the Sale Deed, Possession Certificate, Tax Paid Receipts, and MUDA/Municipal sanctioned plan. If you don't have a plan yet, our structural consultants can handle the entire approval process for you."
              }
            ].map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="font-bold text-lg mb-3 tracking-tight">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
