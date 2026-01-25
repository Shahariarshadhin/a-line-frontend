'use client';
import { useEffect, useRef, useState } from 'react';

export default function ApproachSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div 
          className="order-2 md:order-1 relative overflow-hidden rounded-lg group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 z-10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          <img
            src="/assets/About/Approach.jpg"
            alt="Creative Workspace"
            className={`w-full h-auto rounded-lg shadow-xl transition-all duration-1000 group-hover:scale-110 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            Our Approach
          </h2>
          {[0, 1, 2].map((index) => (
            <p 
              key={index}
              className={`text-gray-600 mb-4 leading-relaxed transition-all duration-700 hover:text-gray-900 hover:translate-x-2 cursor-default ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              It started in a simple way, like a plain document of an empty canvas. A spark of creativity to create something new. We have been envisioning a lifestyle of aesthetic.
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
