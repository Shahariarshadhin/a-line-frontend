'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

export default function FeaturedClients() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const logos = [
    "/assets/partnership/bata.png",
    "/assets/partnership/Apex.png",
    "/assets/partnership/Brac.png",
    "/assets/partnership/City Bank.png",
    "/assets/partnership/DBL.png",
    "/assets/partnership/Dekko.png",
    "/assets/partnership/ECG.png",
    "/assets/partnership/Ford.png",
    "/assets/partnership/Union.png",
    "/assets/partnership/Meghna.png",
    "/assets/partnership/bmw.png",
    "/assets/partnership/Praava.png",
    "/assets/partnership/Sajida.png",
    "/assets/partnership/Toyota.png",
    "/assets/partnership/Transcom.png",
    "/assets/partnership/Unicef.png",
    "/assets/partnership/Banglalink.png",
    "/assets/partnership/Audi.png",
    "/assets/partnership/Bajaj.png",
    "/assets/partnership/Bangladesh-Navy.png",
    "/assets/partnership/BAT.png",
    "/assets/partnership/Bolo.png",
    "/assets/partnership/british-council.png",
    "/assets/partnership/Dettol.png",
    "/assets/partnership/Durex.png",
    "/assets/partnership/Gaviscon.png",
    "/assets/partnership/GP.png",
    "/assets/partnership/Green-Delta-Insurance.png",
    "/assets/partnership/Himalaya.png",
    "/assets/partnership/I2-cure.png",
    "/assets/partnership/Kavazo.png",
    "/assets/partnership/Kelvinator.png",
    "/assets/partnership/LAFZ.png",
    "/assets/partnership/Lee-Cooper.png",
    "/assets/partnership/Lysol.png",
    "/assets/partnership/Mobil.png",
    "/assets/partnership/Mortein.png",
    "/assets/partnership/Mutual-Trust-Bank.png",
    "/assets/partnership/Prime-Bank.png",
    "/assets/partnership/Rangs-Electronics.png",
    "/assets/partnership/reckitt.png",
    "/assets/partnership/Renaissance-Hotels.png",
    "/assets/partnership/Robi.png",
    "/assets/partnership/Shahi.png",
    "/assets/partnership/ssd-tech.png",
    "/assets/partnership/Standard-Chartered.png",
    "/assets/partnership/Trix.png",
    "/assets/partnership/Veet.png",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-linear-to-b from-neutral-900 via-neutral-800 to-neutral-900 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Spotlight effect */}
      {hoveredIndex !== null && (
        <div 
          className="absolute rounded-full pointer-events-none transition-opacity duration-300 blur-3xl z-0"
          style={{
            width: '400px',
            height: '400px',
            left: mousePos.x - 200,
            top: mousePos.y - 200,
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)`,
          }}
        />
      )}

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">{logos.length}+ Clients</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-white">Growing Partnership</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-white">Industry Leaders</span>
              </div>
            </div>

            {/* Title */}
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative">
                Our Clients_
                <div className="absolute -top-6 -right-6">
                  <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
              </h2>
              <div className="mt-4 h-1 bg-linear-to-r from-yellow-500 via-white to-black animate-shimmer" />
            </div>

            <p className="text-gray-400 mt-6 text-lg max-w-2xl">
              Trusted by industry leaders and innovative brands worldwide
            </p>
          </div>
        </div>

        {/* Clients Grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 "
          onMouseMove={handleMouseMove}
        >
          {logos.map((logo, index) => {
            const isHovered = hoveredIndex === index;
            const delay = index * 30;
            
            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card container */}
                <div className={`
                  relative h-32 rounded-2xl border transition-all duration-500 overflow-hidden
                  ${isHovered 
                    ? 'border-blue-500/50 bg-white/10 shadow-2xl shadow-blue-500/20 -translate-y-2 scale-105' 
                    : 'border-white/5 bg-white/5 hover:bg-white/10'
                  }
                `}>
                  {/* Gradient overlay */}
                  <div className={`
                    absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                  `} />

                  {/* Shimmer effect */}
                  <div className={`
                    absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent
                    transition-all duration-1000
                    ${isHovered ? 'opacity-100 animate-shimmer-fast' : 'opacity-0'}
                  `} />

                  {/* Corner accent */}
                  <div className={`
                    absolute top-0 right-0 w-16 h-16 transition-all duration-500
                    ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                  `}>
                    <div className="absolute top-0 right-0 w-full h-full bg-linear-to-br from-blue-500/20 to-transparent rounded-bl-full" />
                  </div>

                  {/* Logo container */}
                  <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo}
                        alt={`Client logo ${index + 1}`}
                        fill
                        className={`
                          object-contain transition-all duration-500
                          ${isHovered 
                            ? 'grayscale-0 scale-110 brightness-110' 
                            : 'grayscale brightness-90 group-hover:grayscale-0'
                          }
                        `}
                      />
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`
                    absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg -z-10
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-50' : 'opacity-0'}
                  `} />

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
                            className="w-1 h-1 rounded-full bg-blue-400 animate-float-up"
                            style={{
                              animationDelay: `${i * 0.2}s`,
                              boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)'
                            }}
                          />
                        </div>
                      ))}
                    </>
                  )}

                  {/* Index number */}
                  <div className={`
                    absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center
                    text-xs font-bold transition-all duration-500
                    ${isHovered 
                      ? 'bg-linear-to-br from-blue-500 to-purple-500 text-white scale-110' 
                      : 'bg-white/10 text-white/40'
                    }
                  `}>
                    {index + 1}
                  </div>
                </div>

                {/* Decorative corners when hovered */}
                {isHovered && (
                  <>
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-blue-500 rounded-tl-lg animate-pulse" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-purple-500 rounded-br-lg animate-pulse" />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className={`
          mt-16 text-center transition-all duration-1000 delay-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-white/80 text-sm">Want to join our growing family?</span>
            <button className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div> */}
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
            transform: translateY(-60px) scale(0);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-slow-delay {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-slow-delay {
          animation: float-slow-delay 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}