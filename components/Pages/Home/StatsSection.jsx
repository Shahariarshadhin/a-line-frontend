'use client';

import { Users, Briefcase, Award, Heart, Coffee } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "235",
      label: "Projects Completed",
      icon: Briefcase
    },
    {
      id: 2,
      number: "100",
      label: "Happy Clients",
      icon: Users
    },
    {
      id: 3,
      number: "28",
      label: "Awards Won",
      icon: Award
    },
    {
      id: 4,
      number: "720",
      label: "Hours Worked",
      icon: Coffee
    },
    {
      id: 5,
      number: "80",
      label: "Team Members",
      icon: Heart
    }
  ];

  return (
    <section className="w-full">
      {/* Stats Counter */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="mb-3 text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
                  <stat.icon size={32} strokeWidth={1.5} />
                </div>
                
                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
                
                {/* Separator line (not for last item on desktop) */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orange Gradient Banner with Image */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 overflow-hidden">
        {/* Abstract shapes/decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Central Image/Illustration Area */}
        <div className="relative h-full flex items-center justify-center">
          <div 
            className="w-48 h-48 md:w-64 md:h-64 bg-contain bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('/assets/illustrations/spinning-top.png')` 
            }}
          >
            {/* Fallback if image doesn't load - show a decorative element */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-yellow-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-600/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}