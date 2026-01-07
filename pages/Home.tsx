
import React from 'react';
import { Star, Phone, Navigation, ArrowRight, Utensils, BedDouble, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, ROOMS, MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-amber-600/30">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium tracking-wide uppercase">{BUSINESS_INFO.rating} Star Comfort</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold font-display mb-6 leading-tight">
            Comfortable Stay. <br />
            <span className="text-amber-500">Great Food.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Experience the warmth of Babana at Ifeanyi Lovers Guest House. Your perfect home away from home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-900/20 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call to Book
            </a>
            <a 
              href={BUSINESS_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
           <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
             <div className="w-1.5 h-3 bg-white rounded-full"></div>
           </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <BedDouble className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Premium Rooms</h3>
              <p className="text-stone-600 mb-6">Clean, cozy, and fully equipped rooms designed for your absolute relaxation.</p>
              <Link to="/rooms" className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                See Rooms <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Delicious Cuisine</h3>
              <p className="text-stone-600 mb-6">Authentic local and continental dishes prepared fresh daily by our expert chefs.</p>
              <Link to="/food" className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-stone-50 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Takeaway & Delivery</h3>
              <h3 className="text-sm text-stone-500 font-medium mb-4 uppercase tracking-wider">Babana & Environs</h3>
              <p className="text-stone-600 mb-6">Can't make it to us? We'll bring the flavor to your doorstep with fast delivery.</p>
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Order Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Accommodation</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display">Our Guest Rooms</h2>
              <p className="mt-4 text-stone-600">Discover the perfect room for your stay, from executive suites to standard deluxe comfort.</p>
            </div>
            <Link to="/rooms" className="hidden md:flex items-center gap-2 bg-white border border-stone-200 px-6 py-3 rounded-full font-semibold hover:border-amber-600 hover:text-amber-600 transition-all">
              View All Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-600 shadow-sm">
                    {room.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 font-display">{room.name}</h3>
                  <p className="text-stone-600 text-sm mb-6 line-clamp-2">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} className="text-[10px] uppercase tracking-wider font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                    className="block w-full text-center py-3 rounded-xl border border-stone-200 font-bold group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all"
                  >
                    Call to Reserve
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
            <Link to="/rooms" className="flex items-center justify-center gap-2 bg-white border border-stone-200 w-full py-4 rounded-xl font-bold">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Ready for a comfortable stay?</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Contact us today to book your room or order your favorite meal for delivery in Babana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-amber-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl transition-all hover:bg-stone-100 active:scale-95"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-700/30 text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:bg-amber-700/50"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
