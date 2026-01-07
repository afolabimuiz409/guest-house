
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800', category: 'Rooms' },
    { url: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe?auto=format&fit=crop&q=80&w=800', category: 'Lobby' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800', category: 'Interiors' },
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', category: 'Restaurant' },
    { url: 'https://images.unsplash.com/photo-1596701062351-df1f8d4689e3?auto=format&fit=crop&q=80&w=800', category: 'Rooms' },
    { url: 'https://images.unsplash.com/photo-1632778149975-40046e10948e?auto=format&fit=crop&q=80&w=800', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', category: 'Architecture' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Visual Journey</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Gallery</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            A glimpse into the life and style of Ifeanyi Lovers Guest House. 
            Comfort you can see and taste.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={image.url} 
                alt={`Gallery ${idx}`} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-bold tracking-widest uppercase text-xs bg-amber-600/80 px-3 py-1 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
