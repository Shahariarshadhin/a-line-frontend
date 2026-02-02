'use client';

import { useState, useEffect } from 'react';
import { Award, Trophy, Medal, Calendar, ArrowRight } from 'lucide-react';

export default function AwardsSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const awards = [
    {
      id: 1,
      category: "Commward",
      image: "/assets/Awards/Commrade.jpeg",
      color: "from-yellow-400 to-orange-500",
      accentColor: "#fbbf24",
      icon: Trophy,
      year: "Multiple Years",
      achievements: [
        "Best use of digital media - IELTS Advocacy campaign",
        "Shurikkhito Ma, Shurikkhito Agami (Campaign for underprivileged women)",
        "Dettol Harpic - Back to school social campaign",
        "Best use of Digital Media - British Council IELTS test dates campaign"
      ]
    },
    {
      id: 2,
      category: "DMA (Digital Marketing Award)",
      image: "/assets/Awards/DMA.jpeg",
      color: "from-blue-400 to-purple-500",
      accentColor: "#60a5fa",
      icon: Medal,
      year: "Multiple Years",
      achievements: [
        "Best use of Facebook - ACI Fun Junction - Latim, Danguli - share photo contest",
        "Best use of Digital Media Alesha Mart launch"
      ]
    }
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
    <section className="w-full py-16 md:py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating background shapes */}
      {awards.map((award, index) => (
        <div
          key={`bg-${award.id}`}
          className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
            hoveredId === award.id ? 'opacity-20 scale-150' : 'opacity-0'
          }`}
          style={{
            background: `linear-gradient(135deg, ${award.accentColor}40, ${award.accentColor}20)`,
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
              AWARDS_
            </h2>
            
            {/* Animated underline */}
            <div className={`mt-4 h-1 bg-linear-to-r from-yellow-400 to-orange-500 transition-all duration-1000 ${
              isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
            }`} />

            {/* Decorative element */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-32 h-32 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow opacity-50" />
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 col-span-2">
            {awards.map((award, index) => {
              const isHovered = hoveredId === award.id;
              const isExpanded = expandedId === award.id;
              const AwardIcon = award.icon;
              
              return (
                <article 
                  key={award.id} 
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  onMouseEnter={() => setHoveredId(award.id)}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    setMousePos({ x: 0, y: 0 });
                  }}
                  onMouseMove={(e) => handleMouseMove(e, award.id)}
                  onClick={() => setExpandedId(isExpanded ? null : award.id)}
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
                        background: `radial-gradient(circle, ${award.accentColor}30, transparent 70%)`,
                      }}
                    />
                  )}

                  {/* Card container */}
                  <div className={`
                    relative rounded-2xl border-2 transition-all duration-500 overflow-hidden
                    ${isExpanded ? 'border-transparent shadow-2xl bg-white' : 'border-gray-100 bg-white/50'}
                    ${isHovered && !isExpanded ? 'border-gray-200 shadow-xl -translate-y-2' : ''}
                  `}>
                    {/* Award Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={award.image}
                        alt={`${award.category} award`}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isExpanded ? 'scale-110 brightness-110' : 'scale-100 brightness-100'
                        } ${isHovered ? 'scale-105' : ''}`}
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`
                        absolute inset-0 bg-linear-to-t from-black/60 to-transparent
                        transition-opacity duration-500
                        ${isExpanded ? 'opacity-40' : 'opacity-30'}
                      `} />

                      {/* Icon badge on image */}
                      <div className={`
                        absolute top-4 right-4 p-3 rounded-xl transition-all duration-500
                        ${isExpanded ? `bg-linear-to-br ${award.color} shadow-lg scale-110` : 'bg-white/90 backdrop-blur-sm'}
                      `}>
                        <AwardIcon 
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isExpanded ? 'text-white' : 'text-gray-700'
                          }`}
                        />
                      </div>

                      {/* Achievement count badge */}
                      <div className={`
                        absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold
                        transition-all duration-300
                        ${isExpanded ? `bg-linear-to-r ${award.color} text-white` : 'bg-white/90 backdrop-blur-sm text-gray-700'}
                      `}>
                        {award.achievements.length} Awards
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                      {/* Gradient overlay on content */}
                      <div className={`
                        absolute inset-0 bg-linear-to-br ${award.color} opacity-0 transition-opacity duration-500
                        ${isExpanded ? 'opacity-5' : ''}
                      `} />

                      {/* Corner accent */}
                      <div className={`
                        absolute top-48 right-0 w-20 h-20 transition-all duration-500
                        ${isHovered || isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                      `}>
                        <div className={`absolute top-0 right-0 w-full h-full bg-linear-to-br ${award.color} opacity-10 rounded-bl-full`} />
                      </div>

                      {/* Year with icon */}
                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-500 uppercase tracking-wider">
                        <Calendar size={12} className={`transition-colors duration-300 ${isHovered ? 'text-yellow-500' : ''}`} />
                        <time>{award.year}</time>
                      </div>

                      {/* Category title with character reveal */}
                      <h3 className={`
                        text-xl md:text-2xl font-bold mb-4 leading-tight relative z-10
                        transition-all duration-300
                        ${isExpanded ? `bg-linear-to-r ${award.color} bg-clip-text text-transparent` : 'text-gray-900'}
                      `}>
                        {award.category.split('').map((char, i) => (
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
                      </h3>

                      {/* Expandable achievements list */}
                      <div className={`
                        overflow-hidden transition-all duration-500
                        ${isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                      `}>
                        <div className="space-y-2">
                          {award.achievements.map((achievement, achievementIndex) => (
                            <div 
                              key={achievementIndex}
                              className="flex gap-2 items-start text-sm text-gray-600 leading-relaxed"
                            >
                              <Award 
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: award.accentColor }}
                              />
                              <p>{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className={`
                        h-0.5 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 mb-4
                        ${isHovered || isExpanded ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <div 
                          className={`h-full bg-linear-to-r ${award.color} transition-all duration-1000 ${
                            isExpanded ? 'w-full' : isHovered ? 'w-1/2' : 'w-0'
                          }`}
                        />
                      </div>

                      {/* View Details with arrow animation */}
                      <button
                        className={`
                          inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider
                          transition-all duration-300 relative z-10
                          ${isExpanded ? `bg-linear-to-r ${award.color} bg-clip-text text-transparent` : 'text-gray-900'}
                        `}
                      >
                        <span>{isExpanded ? 'COLLAPSE' : 'VIEW DETAILS'}</span>
                        <ArrowRight 
                          size={16} 
                          className={`transition-all duration-300 ${
                            isHovered ? 'translate-x-2' : 'translate-x-0'
                          } ${isExpanded ? 'rotate-90' : ''}`}
                          style={{ color: isExpanded ? award.accentColor : 'currentColor' }}
                        />
                      </button>

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
                                  backgroundColor: award.accentColor,
                                  animationDelay: `${i * 0.2}s`,
                                  boxShadow: `0 0 8px ${award.accentColor}`
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
                        ${isExpanded ? `bg-linear-to-br ${award.color} text-white shadow-lg scale-110` : 'bg-gray-100 text-gray-400'}
                      `}>
                        {award.id}
                      </div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`
                    absolute -inset-1 bg-linear-to-br ${award.color} rounded-2xl blur-xl -z-10
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