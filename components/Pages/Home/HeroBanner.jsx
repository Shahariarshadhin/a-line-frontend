'use client';

import { useState, useEffect } from 'react';

const PARTICLES = [
  { id: 0, width: 3.2, height: 3.2, left: 15, top: 20, delay: 0.5, duration: 15 },
  { id: 1, width: 2.5, height: 2.5, left: 45, top: 10, delay: 1.2, duration: 18 },
  { id: 2, width: 4.1, height: 4.1, left: 75, top: 30, delay: 2.0, duration: 12 },
  { id: 3, width: 3.8, height: 3.8, left: 25, top: 60, delay: 0.8, duration: 16 },
  { id: 4, width: 2.8, height: 2.8, left: 85, top: 15, delay: 1.5, duration: 14 },
  { id: 5, width: 3.5, height: 3.5, left: 55, top: 75, delay: 2.5, duration: 19 },
  { id: 6, width: 2.2, height: 2.2, left: 35, top: 45, delay: 0.3, duration: 13 },
  { id: 7, width: 4.5, height: 4.5, left: 65, top: 55, delay: 1.8, duration: 17 },
  { id: 8, width: 3.0, height: 3.0, left: 10, top: 80, delay: 2.2, duration: 15 },
  { id: 9, width: 2.7, height: 2.7, left: 90, top: 40, delay: 0.9, duration: 14 },
  { id: 10, width: 3.9, height: 3.9, left: 50, top: 25, delay: 1.4, duration: 16 },
  { id: 11, width: 2.4, height: 2.4, left: 20, top: 70, delay: 2.8, duration: 18 },
  { id: 12, width: 4.2, height: 4.2, left: 70, top: 5, delay: 0.6, duration: 12 },
  { id: 13, width: 3.3, height: 3.3, left: 40, top: 85, delay: 1.9, duration: 19 },
  { id: 14, width: 2.9, height: 2.9, left: 80, top: 65, delay: 2.4, duration: 13 },
  { id: 15, width: 3.6, height: 3.6, left: 30, top: 35, delay: 0.7, duration: 17 },
  { id: 16, width: 2.3, height: 2.3, left: 60, top: 90, delay: 1.6, duration: 15 },
  { id: 17, width: 4.0, height: 4.0, left: 5, top: 50, delay: 2.1, duration: 14 },
  { id: 18, width: 3.1, height: 3.1, left: 95, top: 20, delay: 0.4, duration: 16 },
  { id: 19, width: 2.6, height: 2.6, left: 48, top: 62, delay: 1.3, duration: 18 }
];

export default function HeroBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: `url('/assets/Landing/who we are.png')`,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/50 to-orange-900/30"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span 
              className={`block transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              BUILD UP
            </span>
            <span 
              className={`block transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              A FRESH BRAND
            </span>
            <span 
              className={`block bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              IMAGE WITH BOLDLAB_
            </span>
          </h2>
          <button 
            className={`group relative bg-white text-black px-8 py-3 text-sm font-bold tracking-wider overflow-hidden transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              VIEW MORE...
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      {/* Floating Arrow Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`} style={{ transitionDelay: '1000ms' }}>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}