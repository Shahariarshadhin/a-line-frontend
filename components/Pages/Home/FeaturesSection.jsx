"use client"

import { useState } from 'react';
import { Pencil, Play, Coffee, Repeat } from 'lucide-react';

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Pencil,
      title: "DRAW",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Play,
      title: "ANIMATE",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Coffee,
      title: "REST",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio.",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Repeat,
      title: "REPEAT",
      description: "Quisque posuere mollis ipsum et molestie. Fusce cursus, risus vel scelerisque porttitor, leo quam vulputate mi, et mollis odio.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        {features.map((_, index) => (
          <div
            key={index}
            className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
              hoveredIndex === index ? 'opacity-40 scale-150' : 'opacity-0 scale-100'
            }`}
            style={{
              left: `${(index * 25)}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: `linear-gradient(135deg, ${
                index === 0 ? '#fb923c, #ef4444' :
                index === 1 ? '#60a5fa, #22d3ee' :
                index === 2 ? '#c084fc, #ec4899' :
                '#4ade80, #10b981'
              })`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Card Container */}
                <div className={`
                  w-full p-6 rounded-2xl transition-all duration-500
                  ${isActive ? feature.bgColor + ' shadow-2xl -translate-y-4' : 'bg-transparent'}
                  ${isHovered && !isActive ? 'bg-white/50 shadow-lg -translate-y-2' : ''}
                `}>
                  {/* Icon Container with Ripple Effect */}
                  <div className="relative mb-6 flex justify-center">
                    {/* Ripple rings */}
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-700
                      ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'}
                    `}>
                      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${feature.color} opacity-20 animate-ping`}></div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`
                      relative p-4 rounded-full transition-all duration-500
                      ${isActive ? `bg-gradient-to-br ${feature.color}` : 'bg-gray-100'}
                      ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                    `}>
                      <feature.icon 
                        size={48} 
                        className={`transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-gray-800'
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`
                    text-xl font-bold mb-4 tracking-wide transition-all duration-300
                    ${isActive ? 'bg-gradient-to-r ' + feature.color + ' bg-clip-text text-transparent scale-110' : 'text-gray-900'}
                  `}>
                    {feature.title}
                  </h3>
                  
                  {/* Description with expand animation */}
                  <div className={`
                    overflow-hidden transition-all duration-500
                    ${isActive ? 'max-h-40 opacity-100' : 'max-h-20 opacity-70'}
                  `}>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Interactive indicator */}
                  <div className={`
                    mt-4 h-1 rounded-full transition-all duration-500
                    ${isActive ? `bg-gradient-to-r ${feature.color} w-full` : 'bg-gray-300 w-0'}
                  `}></div>
                </div>

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} animate-float-up`}
                        style={{
                          left: `${50 + (i - 1) * 20}%`,
                          bottom: '20%',
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Hint text */}
        <p className="text-center mt-12 text-sm text-gray-500 animate-pulse">
          Click on any feature to explore more
        </p>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }
      `}</style>
    </section>
  );
}