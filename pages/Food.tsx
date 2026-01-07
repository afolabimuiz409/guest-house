
import React, { useState } from 'react';
import { Utensils, Truck, ShoppingBag, Phone, Clock } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../constants';

const Food: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast' | 'main' | 'drinks'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Restaurant</span>
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Delicious Dining & Fast Delivery</h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-lg">
          From mouth-watering Jollof to savory grills, experience the best flavors of Babana right here or at your home.
        </p>
      </div>

      {/* Service Types */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
              <Utensils className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Dine-In</h3>
              <p className="text-stone-500 text-sm">Comfortable & clean atmosphere</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
              <ShoppingBag className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Takeaway</h3>
              <p className="text-stone-500 text-sm">Ready when you are</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm flex items-center gap-6">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
              <Truck className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Delivery</h3>
              <p className="text-stone-500 text-sm">Fast delivery across Babana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'breakfast', 'main', 'drinks'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/20' 
                  : 'bg-white text-stone-600 border-stone-200 hover:border-amber-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-stone-100 hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Ready in 20-30 mins
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-display">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {item.description}
                </p>
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-stone-900 text-white font-bold hover:bg-amber-600 transition-all active:scale-95 shadow-lg shadow-stone-900/10"
                >
                  <Phone className="w-5 h-5" />
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Special Banner */}
        <div className="mt-24 bg-stone-900 rounded-[40px] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Hosting a Special Occasion?</h2>
              <p className="text-stone-400 text-lg">
                We provide catering services for parties, meetings, and gatherings. 
                Talk to us today for a custom menu tailored to your event.
              </p>
            </div>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-900/20 transition-all active:scale-95"
            >
              Get Event Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
