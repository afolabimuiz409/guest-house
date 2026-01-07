
import React from 'react';
import { Check, Phone } from 'lucide-react';
import { ROOMS, BUSINESS_INFO, AMENITIES_ICONS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Accommodation</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Restful Stays in Babana</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Our rooms are designed to provide a peaceful sanctuary after your journey. 
            Discover modern comfort and warm hospitality.
          </p>
        </div>

        <div className="space-y-24">
          {ROOMS.map((room, index) => (
            <div 
              key={room.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{room.name}</h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {room.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-amber-600"></span>
                    Room Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-y-4">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-3 text-stone-700">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                          {AMENITIES_ICONS[amenity] || <Check className="w-4 h-4" />}
                        </div>
                        <span className="text-sm font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">Starting From</p>
                      <p className="text-2xl font-bold text-stone-900">{room.price}</p>
                    </div>
                    <a 
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-stone-800"
                    >
                      <Phone className="w-5 h-5" />
                      Book This Room
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Amenities Overview */}
        <section className="mt-32 p-12 bg-white rounded-[40px] shadow-sm border border-stone-100">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">Everything You Need</h2>
              <p className="text-stone-500">We prioritize your comfort and safety throughout your stay.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Clean Linens</h4>
                <p className="text-sm text-stone-500">Hygiene is our top priority.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Reliable Power</h4>
                <p className="text-sm text-stone-500">In-house generator backup.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Secure Parking</h4>
                <p className="text-sm text-stone-500">Safe parking for your vehicles.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">24/7 Security</h4>
                <p className="text-sm text-stone-500">On-site personnel for safety.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Rooms;
