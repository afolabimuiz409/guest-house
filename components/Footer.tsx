
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold font-display mb-4">Ifeanyi Lovers</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Comfortable stays, great food, and exceptional hospitality in the heart of Babana, Niger State.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Quick Links</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-amber-500 transition-colors">Our Rooms</Link></li>
              <li><Link to="/food" className="hover:text-amber-500 transition-colors">Restaurant Menu</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Visit Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Services</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li>Guest Rooms</li>
              <li>Dine-in Restaurant</li>
              <li>Takeaway Services</li>
              <li>Home/Office Delivery</li>
              <li>Event Catering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-display">Contact Us</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>contact@ifeanyilovers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Ifeanyi Lovers Guest House. All rights reserved. Babana, Niger State.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
