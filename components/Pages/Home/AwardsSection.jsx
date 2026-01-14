'use client';

import { useState, useEffect, useRef } from 'react';
import { Award, Sparkles, Trophy, Medal, Star } from 'lucide-react';

export default function AwardsSection() {
  const [activeAward, setActiveAward] = useState(null);
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [confetti, setConfetti] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const awards = [
    {
      id: 1,
      number: "01.",
      category: "Commward",
      image: "/assets/Awards/Commrade.jpeg",
      color: "from-yellow-400 to-orange-500",
      accentColor: "#fbbf24",
      icon: Trophy,
      achievements: [
        "Best use of digital media - IELTS Advocacy campaign",
        "Shurikkhito Ma, Shurikkhito Agami (Campaign for underprivileged women)",
        "Dettol Harpic - Back to school social campaign",
        "Best use of Digital Media - British Council IELTS test dates campaign"
      ]
    },
    {
      id: 2,
      number: "02.",
      category: "DMA (Digital Marketing Award)",
      image: "/assets/Awards/DMA.jpeg",
      color: "from-blue-400 to-purple-500",
      accentColor: "#60a5fa",
      icon: Medal,
      achievements: [
        "Best use of Facebook - ACI Fun Junction - Latim, Danguli - share photo contest",
        "Best use of Digital Media Alesha Mart launch"
      ]
    }
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

  const handleAwardClick = (awardId, e) => {
    const newActive = activeAward === awardId ? null : awardId;
    setActiveAward(newActive);

    if (newActive !== null) {
      // Create confetti effect
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        color: awards.find(a => a.id === awardId).accentColor,
        angle: (Math.PI * 2 * i) / 30,
        velocity: 2 + Math.random() * 3
      }));
      
      setConfetti(newConfetti);
      setTimeout(() => setConfetti([]), 2000);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="w-full bg-gray-200 py-16 md:py-20 relative overflow-hidden" ref={sectionRef}>

      {/* Confetti particles */}
      {confetti.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none w-2 h-2 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            animation: `confetti-burst 2s ease-out forwards`,
            '--angle': `${particle.angle}rad`,
            '--velocity': particle.velocity
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Section Header with animation */}
        <div className="text-center mb-10 md:mb-16 relative">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black relative">
                Prestigious Awards
                <div className="absolute -top-6 -right-6">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
              </h2>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Awards List */}
        <div className="space-y-12 md:space-y-16">
          {awards.map((award, awardIndex) => {
            const isActive = activeAward === award.id;
            const AwardIcon = award.icon;
            
            return (
              <div 
                key={award.id}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : awardIndex % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${awardIndex * 200}ms` }}
                onClick={(e) => handleAwardClick(award.id, e)}
                onMouseMove={handleMouseMove}
              >
                {/* Glow effect */}
                <div className={`
                  absolute -inset-4 bg-gradient-to-r ${award.color} rounded-3xl blur-2xl -z-10
                  transition-opacity duration-500
                  ${isActive ? 'opacity-30' : 'opacity-0'}
                `} />

                <div className={`
                  grid grid-cols-1 md:grid-cols-4 gap-8 items-center
                  p-6 md:p-8 rounded-3xl backdrop-blur-sm
                  transition-all duration-500 cursor-pointer
                  ${isActive ? 'bg-white shadow-2xl scale-105' : 'bg-white/60 hover:bg-white/80 hover:shadow-xl'}
                `}>
                  {/* Award Number with 3D effect */}
                  <div className="flex items-center justify-center md:justify-start relative">
                    <div className="relative">
                      <h4 className={`
                        text-6xl md:text-7xl font-extrabold transition-all duration-500
                        ${isActive ? `bg-gradient-to-br ${award.color} bg-clip-text text-transparent scale-110` : 'text-black opacity-50'}
                      `}>
                        {award.number}
                      </h4>
                      
                      {/* Orbiting icon */}
                      {isActive && (
                        <div className="absolute -top-4 -right-4">
                          <div className="animate-spin-slow">
                            <AwardIcon className="w-10 h-10" style={{ color: award.accentColor }} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`
                        p-3 rounded-xl transition-all duration-500
                        ${isActive ? `bg-gradient-to-br ${award.color} shadow-lg` : 'bg-gray-100'}
                      `}>
                        <AwardIcon 
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-gray-600'
                          }`}
                        />
                      </div>
                      <h3 className={`
                        text-2xl md:text-3xl font-bold transition-all duration-300
                        ${isActive ? `bg-gradient-to-r ${award.color} bg-clip-text text-transparent` : 'text-black'}
                      `}>
                        {award.category}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {award.achievements.map((achievement, index) => {
                        const isHovered = hoveredAchievement === `${award.id}-${index}`;
                        
                        return (
                          <div 
                            key={index} 
                            className={`
                              flex gap-3 items-start p-3 rounded-xl transition-all duration-300
                              ${isHovered ? 'bg-gradient-to-r ' + award.color + ' bg-opacity-10 translate-x-2 shadow-md' : 'bg-transparent'}
                              ${isActive ? 'opacity-100' : 'opacity-80'}
                            `}
                            onMouseEnter={() => setHoveredAchievement(`${award.id}-${index}`)}
                            onMouseLeave={() => setHoveredAchievement(null)}
                          >
                            <div className={`
                              p-1 rounded-full transition-all duration-300
                              ${isHovered ? 'bg-white shadow-lg scale-110' : 'bg-transparent'}
                            `}>
                              <Award 
                                className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                                  isHovered ? 'rotate-12' : 'rotate-0'
                                }`}
                                style={{ color: isHovered ? award.accentColor : '#ef4444' }}
                              />
                            </div>
                            <p className={`
                              text-black text-sm md:text-lg leading-relaxed transition-all duration-300
                              ${isHovered ? 'font-semibold' : 'font-normal'}
                            `}>
                              {achievement}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Click hint */}
                    <p className={`
                      text-xs text-gray-500 mt-4 transition-all duration-300
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                    `}>
                      ✨ Award activated! Click again to deactivate
                    </p>
                  </div>

                  {/* Award Image with parallax */}
                  <div className="relative h-64 md:h-80 w-full group">
                    {/* Spotlight effect */}
                    {isActive && (
                      <div 
                        className="absolute rounded-full pointer-events-none blur-3xl z-10 transition-opacity duration-300"
                        style={{
                          width: '300px',
                          height: '300px',
                          left: mousePos.x - 150,
                          top: mousePos.y - 150,
                          background: `radial-gradient(circle, ${award.accentColor}40, transparent 70%)`,
                        }}
                      />
                    )}

                    <div className={`
                      relative h-full w-full overflow-hidden rounded-2xl shadow-lg
                      transition-all duration-500
                      ${isActive ? 'scale-105 shadow-2xl ring-4' : 'group-hover:scale-102'}
                    `}
                      style={{ ringColor: isActive ? award.accentColor : 'transparent' }}
                    >
                      <img
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isActive ? 'scale-110 brightness-110' : 'scale-100 brightness-100 group-hover:scale-105'
                        }`}
                        alt={`${award.category} award`}
                        src={award.image}
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                        transition-opacity duration-500
                        ${isActive ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'}
                      `} />

                      {/* Shimmer effect */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                        transition-all duration-1000
                        ${isActive ? 'opacity-30 animate-shimmer-fast' : 'opacity-0'}
                      `} />
                    </div>

                    {/* Badge counter */}
                    <div className={`
                      absolute -bottom-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center
                      font-bold text-white shadow-xl transition-all duration-500
                      ${isActive ? `bg-gradient-to-br ${award.color} scale-110 rotate-12` : 'bg-gray-600 scale-100'}
                    `}>
                      {award.achievements.length}
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                {isActive && (
                  <>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 rounded-tl-xl animate-pulse"
                      style={{ borderColor: award.accentColor }} />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 rounded-br-xl animate-pulse"
                      style={{ borderColor: award.accentColor }} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-award {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.4;
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
        @keyframes confetti-burst {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(cos(var(--angle)) * var(--velocity) * 100px),
              calc(sin(var(--angle)) * var(--velocity) * 100px + 200px)
            ) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-award {
          animation: float-award 10s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}