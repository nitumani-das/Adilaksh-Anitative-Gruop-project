import { useState } from 'react';

export default function ProductGallery({ images = [], name }) {
  const list = images.length ? images : ['https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=900&q=80'];
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-square rounded-2xl overflow-hidden bg-leaf-100 shadow-soft mb-4">
        <img src={list[active]} alt={name} className="w-full h-full object-cover" />
      </div>
      {list.length > 1 && (
        <div className="flex gap-3">
          {list.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                active === i ? 'border-gold-500' : 'border-transparent'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
