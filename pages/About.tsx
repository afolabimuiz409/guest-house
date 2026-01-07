
import React from 'react';
import { Heart, Shield, Award, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" 
                  alt="Ifeanyi Lovers Hospitality" 
                  className="rounded-[40px] shadow-2xl w-full"
                />
                <div className="absolute -bottom-10 -right-10 hidden md:block w-64 p-8 glass rounded-3xl shadow-xl border border-white/50">
                  <p className="text-amber-600 text-4xl font-bold font-display mb-2">10+</p>
                  <p className="text-stone-600 font-medium">Years of Serving the Babana Community</p>
                </div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Hospitality with a Heart</h1>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Ifeanyi Lovers Guest House was founded on the principle that every traveler deserves a clean, 
                  comfortable, and safe place to rest, regardless of their budget.
                </p>
                <p>
                  Located in the vibrant border town of Babana, we have become a trusted landmark for 
                  travelers and residents alike. We don't just provide a room; we provide a home-like 
                  environment where you are treated as family.
                </p>
                <p>
                  Our fusion of comfortable accommodation and authentic culinary excellence ensures that 
                  your stay in Niger State is memorable, convenient, and truly refreshing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-stone-100 text-center hover:translate-y-[-8px] transition-transform">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Care</h3>
              <p className="text-stone-500 text-sm">We care deeply about your comfort and well-being during your stay.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-stone-100 text-center hover:translate-y-[-8px] transition-transform">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Trust</h3>
              <p className="text-stone-500 text-sm">Building trust through consistent quality and reliable security services.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-stone-100 text-center hover:translate-y-[-8px] transition-transform">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Quality</h3>
              <p className="text-stone-500 text-sm">Maintaining high standards in both our rooms and our restaurant menu.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-stone-100 text-center hover:translate-y-[-8px] transition-transform">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Community</h3>
              <p className="text-stone-500 text-sm">Proudly serving the people and visitors of Babana with local integrity.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
