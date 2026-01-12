'use client';

import { Pencil, Play, Coffee, Repeat } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Pencil,
      title: "DRAW",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio."
    },
    {
      icon: Play,
      title: "ANIMATE",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio."
    },
    {
      icon: Coffee,
      title: "REST",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio."
    },
    {
      icon: Repeat,
      title: "REPEAT",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon 
                  size={64} 
                  className="text-gray-800" 
                  strokeWidth={1.5}
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-wide">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}