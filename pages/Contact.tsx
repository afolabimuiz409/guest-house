
import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Visit Us</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Find Your Way Home</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Located conveniently in Babana, Niger State. We're here to welcome you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-stone-500 text-sm mb-4">For bookings and inquiries</p>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-amber-600 font-bold text-lg hover:underline transition-all">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-stone-500 text-sm mb-4">Quick chat support</p>
                <a href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-amber-600 font-bold text-lg hover:underline transition-all">
                  Chat With Us
                </a>
              </div>
            </div>

            <div className="p-8 bg-stone-900 text-white rounded-[32px] shadow-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">Our Location</h3>
                  <p className="text-stone-400 leading-relaxed mb-6">
                    {BUSINESS_INFO.address}
                  </p>
                  <a 
                    href={BUSINESS_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    Open in Maps
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                   <Clock className="w-5 h-5 text-amber-500" />
                   <div>
                     <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Opening Hours</p>
                     <p className="text-sm font-medium">Open 24/7</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <ShieldCheck className="w-5 h-5 text-amber-500" />
                   <div>
                     <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Security</p>
                     <p className="text-sm font-medium">On-site Staff</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed Placeholder */}
          <div className="h-[500px] lg:h-full min-h-[500px] bg-stone-200 rounded-[40px] overflow-hidden relative shadow-inner group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center grayscale opacity-50"></div>
            <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center p-8 text-center backdrop-blur-[2px]">
              <div className="bg-white/95 p-8 md:p-12 rounded-3xl shadow-2xl max-w-sm">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold font-display mb-4">Direct Navigation</h3>
                <p className="text-stone-600 mb-8">Click below to get step-by-step directions to our guest house via Google Maps.</p>
                <a 
                   href={BUSINESS_INFO.googleMapsLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-900/20 transition-all"
                >
                  Start Navigation
                </a>
                <p className="mt-4 text-xs text-stone-400 font-medium uppercase tracking-widest">Plus Code: {BUSINESS_INFO.plusCode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
