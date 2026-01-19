'use client';
import { useEffect, useRef, useState } from 'react';

export default function VisionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            Our Vision
          </h2>
          {[0, 1, 2].map((index) => (
            <p 
              key={index}
              className={`text-gray-600 mb-4 leading-relaxed transition-all duration-1000 hover:text-gray-900 hover:translate-x-2 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              It started in a simple way, like a plain document of an empty canvas. A spark of creativity to create something new. We create these narratives, and like this residual sequence to be a reflection.
            </p>
          ))}
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg transform rotate-3 transition-transform duration-500 group-hover:rotate-6 opacity-20" />
          <img
            src="/api/placeholder/600/700"
            alt="Team Meeting"
            className={`relative w-full h-auto rounded-lg shadow-xl transition-all duration-1000 group-hover:scale-105 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          />
        </div>
      </div>
    </section>
  );
}
