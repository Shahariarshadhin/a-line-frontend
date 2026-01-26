'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
         src="/assets/About/abouthero.jpeg"
          alt="About Hero"
          className="w-full h-full object-cover filter grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* Red Stripe with Animation */}
      <div 
        className={`absolute top-1/4 left-0 right-0 h-24 bg-red-600 z-10 transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      />

      {/* Content with Fade In */}
      <div className="relative z-20 h-full flex items-end pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 
            className={`text-white text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Who We Are
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <p 
              className={`text-white text-lg md:text-xl max-w-md transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Aligning brands so they stand out and stand for something.
            </p>
            {/* <img
              src="/api/placeholder/300/200"
              alt="Technology"
              className={`w-64 h-auto rounded-lg shadow-2xl transition-all duration-1000 delay-700 hover:scale-110 hover:shadow-red-500/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}