'use client';
import { useEffect, useRef, useState } from 'react';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const steps = [
    { title: 'Discover', color: 'from-red-500 to-orange-500' },
    { title: 'Design', color: 'from-orange-500 to-yellow-500' },
    { title: 'Develop', color: 'from-yellow-500 to-green-500' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            Our Process
          </h2>
          
          {/* Interactive Process Steps */}
          <div className="mb-8 flex gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-500 ${
                  activeStep === index
                    ? `bg-gradient-to-r ${step.color} text-white scale-110 shadow-lg`
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {[0, 1, 2].map((index) => (
            <p 
              key={index}
              className={`text-gray-600 mb-4 leading-relaxed transition-all duration-700 hover:text-gray-900 hover:translate-x-2 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              It started in a simple way, like a plain document of an empty canvas. A spark of creativity to create something new. We have been envisioning a lifestyle of aesthetic.
            </p>
          ))}
        </div>
        <div className="relative group">
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${steps[activeStep].color} rounded-lg transform -rotate-3 transition-all duration-500 group-hover:-rotate-6 opacity-20`}
          />
          <img
            src="/assets/About/process.png"
            alt="Interior Design"
            className={`relative w-full h-auto rounded-lg shadow-xl transition-all duration-1000 group-hover:scale-105 ${
              isVisible ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-10 opacity-0 rotate-3'
            }`}
            style={{ transitionDelay: '600ms' }}
          />
          
          {/* Animated Corner Badge */}
          <div 
            className={`absolute top-4 right-4 bg-gradient-to-r ${steps[activeStep].color} text-white px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {steps[activeStep].title}
          </div>
        </div>
      </div>
    </section>
  );
}
