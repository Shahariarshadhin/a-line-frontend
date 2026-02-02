'use client';

import { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Award, Heart, Coffee } from 'lucide-react';

export default function StatsSection() {
  const [counters, setCounters] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      number: 235,
      label: "Projects Completed",
      icon: Briefcase,
      color: "from-orange-500 to-red-500",
      accentColor: "#f97316"
    },
    {
      id: 2,
      number: 100,
      label: "Happy Clients",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      accentColor: "#3b82f6"
    },
    {
      id: 3,
      number: 28,
      label: "Awards Won",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      accentColor: "#a855f7"
    },
    {
      id: 4,
      number: 720,
      label: "Hours Worked",
      icon: Coffee,
      color: "from-amber-500 to-yellow-500",
      accentColor: "#f59e0b"
    },
    {
      id: 5,
      number: 80,
      label: "Team Members",
      icon: Heart,
      color: "from-rose-500 to-pink-500",
      accentColor: "#f43f5e"
    }
  ];

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, interval);
    });
  }, [isVisible]);

  return (
    <section className="w-full" ref={sectionRef}>
      {/* Stats Counter */}
      <div className="bg-linear-to-b from-gray-50 to-gray-100 py-12 md:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating orbs */}
        {stats.map((stat, index) => (
          <div
            key={`orb-${stat.id}`}
            className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
              hoveredId === stat.id ? 'opacity-30 scale-150' : 'opacity-0'
            }`}
            style={{
              background: `linear-gradient(135deg, ${stat.accentColor}40, ${stat.accentColor}20)`,
              left: `${(index * 20)}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-8 md:gap-4">
            {stats.map((stat, index) => {
              const isHovered = hoveredId === stat.id;
              const currentCount = counters[stat.id] || 0;
              
              return (
                <div 
                  key={stat.id} 
                  className={`relative flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredId(stat.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Glow effect */}
                  <div className={`
                    absolute inset-0 bg-linear-to-b ${stat.color} rounded-3xl blur-2xl -z-10
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-20' : 'opacity-0'}
                  `} />

                  {/* Icon Container */}
                  <div className="relative mb-4">
                    {/* Pulsing ring */}
                    <div className={`
                      absolute inset-0 rounded-full transition-all duration-700
                      ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
                    `}>
                      <div 
                        className="w-16 h-16 mx-auto rounded-full border-2 border-dashed animate-spin-slow"
                        style={{ borderColor: stat.accentColor }}
                      />
                    </div>

                    {/* Icon */}
                    <div className={`
                      relative p-3 rounded-2xl transition-all duration-500
                      ${isHovered ? `bg-linear-to-br ${stat.color} shadow-xl scale-110 rotate-12` : 'bg-white/50 backdrop-blur-sm'}
                    `}>
                      <stat.icon 
                        size={32} 
                        strokeWidth={1.5}
                        className={`transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-gray-700'
                        }`}
                      />
                    </div>

                    {/* Floating particles */}
                    {isHovered && (
                      <>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute pointer-events-none"
                            style={{
                              left: `${50 + (i - 1.5) * 20}%`,
                              top: '50%',
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full animate-particle-burst"
                              style={{
                                backgroundColor: stat.accentColor,
                                animationDelay: `${i * 0.1}s`,
                                boxShadow: `0 0 8px ${stat.accentColor}`
                              }}
                            />
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  
                  {/* Number with counting animation */}
                  <div className="relative mb-2">
                    <div className={`
                      text-4xl md:text-5xl font-bold transition-all duration-300
                      ${isHovered ? `bg-linear-to-r ${stat.color} bg-clip-text text-transparent scale-110` : 'text-gray-900'}
                    `}>
                      {currentCount}
                      {isHovered && currentCount === stat.number && (
                        <span className="inline-block animate-bounce ml-1">+</span>
                      )}
                    </div>
                    
                    {/* Progress circle */}
                    <svg 
                      className="absolute -inset-4 w-24 h-24 -z-10"
                      style={{ 
                        transform: 'rotate(-90deg)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.5s'
                      }}
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="44"
                        fill="none"
                        stroke={stat.accentColor}
                        strokeWidth="2"
                        strokeDasharray={276}
                        strokeDashoffset={276 - (276 * currentCount) / stat.number}
                        className="transition-all duration-500"
                        style={{ opacity: isHovered ? 0.5 : 0 }}
                      />
                    </svg>
                  </div>
                  
                  {/* Label */}
                  <div className={`
                    text-sm uppercase tracking-wide font-medium transition-all duration-300
                    ${isHovered ? 'text-gray-900 scale-105' : 'text-gray-600'}
                  `}>
                    {stat.label}
                  </div>

                  {/* Animated underline */}
                  <div className={`
                    mt-2 h-0.5 bg-linear-to-r ${stat.color} rounded-full transition-all duration-500
                    ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
                  `} />

                  {/* Separator line */}
                  {index < stats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Orange Gradient Banner with 3D Animation */}
      <div className="relative w-full h-64 md:h-80 bg-linear-to-r from-orange-500 via-orange-400 to-yellow-400 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-orange-600/0 via-yellow-300/30 to-orange-600/0 animate-shimmer-banner"></div>
        
        {/* Floating shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-0 left-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
              style={{
                left: `${(i * 5 + 10) % 100}%`,
                top: `${(i * 7 + 15) % 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Central Image/Illustration with 3D effect */}
        <div className="relative h-full flex items-center justify-center">
          <div 
            className="w-48 h-48 md:w-64 md:h-64 bg-contain bg-center bg-no-repeat animate-spin-3d"
            style={{ 
              backgroundImage: `url('/assets/illustrations/spinning-top.png')` 
            }}
          >
            {/* Fallback decorative element with enhanced animation */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-yellow-200/50 backdrop-blur-sm flex items-center justify-center animate-pulse-slow">
                <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center animate-spin-slow">
                  <div className="w-16 h-16 rounded-full bg-orange-600/40 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-72 h-72 animate-spin-very-slow">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-white/60 shadow-lg"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 60}deg) translateX(140px) translateY(-50%)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes particle-burst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 40px), var(--ty, -40px)) scale(0);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-3d {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer-banner {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-particle-burst {
          animation: particle-burst 1.5s ease-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }
        .animate-spin-3d {
          animation: spin-3d 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-shimmer-banner {
          animation: shimmer-banner 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}