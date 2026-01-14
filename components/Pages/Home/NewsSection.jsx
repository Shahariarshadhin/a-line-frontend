"use client";

import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function NewsSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const newsItems = [
    {
      id: 1,
      date: "November 16, 2019",
      category: "Ideas",
      title: "MAKE SOMETHING OUT OF YOUR GREAT IDEAS",
      excerpt: "Discover how to transform your creative concepts into tangible success stories.",
      color: "from-orange-500 to-red-500",
      accentColor: "#f97316",
      link: "#",
    },
    {
      id: 2,
      date: "December 18, 2019",
      category: "Brands",
      title: "THE BEST BRANDING CAMPAIGN OF 2019",
      excerpt: "Explore the most innovative and impactful branding strategies of the year.",
      color: "from-blue-500 to-cyan-500",
      accentColor: "#3b82f6",
      link: "#",
    },
    {
      id: 3,
      date: "November 16, 2019",
      category: "Ideas",
      title: "NEW EDITION OF THE SPEED OF THOUGHT",
      excerpt: "Experience the latest insights on rapid innovation and creative thinking.",
      color: "from-purple-500 to-pink-500",
      accentColor: "#a855f7",
      link: "#",
    },
    {
      id: 4,
      date: "December 18, 2019",
      category: "Brands",
      title: "ALL ABOUT FORM IN GRAPHIC DESIGN",
      excerpt: "Master the fundamentals of form and composition in modern design.",
      color: "from-green-500 to-emerald-500",
      accentColor: "#22c55e",
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating background shapes */}
      {newsItems.map((item, index) => (
        <div
          key={`bg-${item.id}`}
          className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
            hoveredId === item.id ? 'opacity-20 scale-150' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(135deg, ${item.accentColor}40, ${item.accentColor}20)`,
            left: `${(index % 2) * 50 + 10}%`,
            top: `${Math.floor(index / 2) * 40 + 20}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          {/* Section Header with animation */}
          <div className="mb-12 relative">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              NEWS_
            </h2>
            
            {/* Animated underline */}
            <div className={`mt-4 h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000 ${
              isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
            }`} />

            {/* Decorative element */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-32 h-32 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow opacity-50" />
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 col-span-2">
            {newsItems.map((item, index) => {
              const isHovered = hoveredId === item.id;
              const isExpanded = expandedId === item.id;
              
              return (
                <article 
                  key={item.id} 
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    setMousePos({ x: 0, y: 0 });
                  }}
                  onMouseMove={(e) => handleMouseMove(e, item.id)}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  {/* Spotlight effect */}
                  {isHovered && (
                    <div 
                      className="absolute rounded-full pointer-events-none transition-opacity duration-300 blur-2xl"
                      style={{
                        width: '200px',
                        height: '200px',
                        left: mousePos.x - 100,
                        top: mousePos.y - 100,
                        background: `radial-gradient(circle, ${item.accentColor}30, transparent 70%)`,
                      }}
                    />
                  )}

                  {/* Card container */}
                  <div className={`
                    relative p-6 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                    ${isExpanded ? 'border-transparent shadow-2xl bg-white' : 'border-gray-100 bg-white/50'}
                    ${isHovered && !isExpanded ? 'border-gray-200 shadow-xl -translate-y-2' : ''}
                  `}>
                    {/* Gradient overlay on hover */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500
                      ${isExpanded ? 'opacity-5' : ''}
                    `} />

                    {/* Corner accent */}
                    <div className={`
                      absolute top-0 right-0 w-20 h-20 transition-all duration-500
                      ${isHovered || isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                    `}>
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full`} />
                    </div>

                    {/* Category badge */}
                    <div className={`
                      inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3
                      transition-all duration-300
                      ${isExpanded ? `bg-gradient-to-r ${item.color} text-white shadow-lg` : 'bg-gray-100 text-gray-600'}
                    `}>
                      <Tag size={12} />
                      {item.category}
                    </div>

                    {/* Date with icon */}
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 uppercase tracking-wider">
                      <Calendar size={12} className={`transition-colors duration-300 ${isHovered ? 'text-orange-500' : ''}`} />
                      <time dateTime={item.date}>{item.date}</time>
                    </div>

                    {/* Title with character reveal */}
                    <h3 className={`
                      text-xl md:text-2xl font-bold mb-4 leading-tight relative z-10
                      transition-all duration-300
                      ${isExpanded ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent` : 'text-gray-900'}
                    `}>
                      <a href={item.link} className="block">
                        {item.title.split('').map((char, i) => (
                          <span
                            key={i}
                            className={`inline-block transition-all duration-300 ${
                              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-100'
                            }`}
                            style={{
                              transitionDelay: isHovered ? `${i * 20}ms` : '0ms',
                              transform: isHovered ? `translateY(-2px)` : 'translateY(0)'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </a>
                    </h3>

                    {/* Expandable excerpt */}
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isExpanded ? 'max-h-20 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* Progress bar */}
                    <div className={`
                      h-0.5 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 mb-4
                      ${isHovered || isExpanded ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <div 
                        className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ${
                          isExpanded ? 'w-full' : isHovered ? 'w-1/2' : 'w-0'
                        }`}
                      />
                    </div>

                    {/* Read More with arrow animation */}
                    <a
                      href={item.link}
                      className={`
                        inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                        transition-all duration-300 relative z-10
                        ${isExpanded ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent` : 'text-gray-900'}
                      `}
                    >
                      <span>READ MORE</span>
                      <ArrowRight 
                        size={16} 
                        className={`transition-all duration-300 ${
                          isHovered ? 'translate-x-2' : 'translate-x-0'
                        } ${isExpanded ? 'rotate-45' : ''}`}
                        style={{ color: isExpanded ? item.accentColor : 'currentColor' }}
                      />
                    </a>

                    {/* Floating particles */}
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute pointer-events-none"
                            style={{
                              left: `${20 + i * 30}%`,
                              bottom: '10%',
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full animate-float-up"
                              style={{
                                backgroundColor: item.accentColor,
                                animationDelay: `${i * 0.2}s`,
                                boxShadow: `0 0 8px ${item.accentColor}`
                              }}
                            />
                          </div>
                        ))}
                      </>
                    )}

                    {/* Number indicator */}
                    <div className={`
                      absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                      font-bold text-xs transition-all duration-500
                      ${isExpanded ? `bg-gradient-to-br ${item.color} text-white shadow-lg scale-110` : 'bg-gray-100 text-gray-400'}
                    `}>
                      {item.id}
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`
                    absolute -inset-1 bg-gradient-to-br ${item.color} rounded-2xl blur-xl -z-10
                    transition-opacity duration-500
                    ${isExpanded ? 'opacity-30' : 'opacity-0'}
                  `} />
                </article>
              );
            })}
          </div>
        </div>
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
            transform: translateY(-80px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
