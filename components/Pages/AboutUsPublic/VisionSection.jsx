'use client';
import { useEffect, useRef, useState } from 'react';

const visionPoints = [
  {
    title: "Clarity with Depth",
    content: [
      "We strip away the noise to reveal meaning.",
      "Every idea, every word, every design element must serve a purpose, to bring focus, not clutter.",
      "Because true creativity doesn't hide behind complexity; it shines through simplicity."
    ]
  },
  {
    title: "Creativity with Intent",
    content: [
      "We design with direction.",
      "Every concept begins with insight and ends with impact, art balanced with reason. We believe imagination is powerful only when it moves a brand forward."
    ]
  },
  {
    title: "Alignment in Action",
    content: [
      "We bridge what brands believe with how they behave. Strategy, storytelling, and execution all flow in sync, united by one line of truth. Because when everything aligns, momentum begins."
    ]
  }
];

export default function VisionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            Our Vision
          </h2>
          {visionPoints.map((point, index) => (
            <div 
              key={point.title}
              className={`mb-3 transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <h3 className="text-lg font-medium mb-2 text-black transition-colors duration-300">
                {point.title}
              </h3>
              {point.content.map((paragraph, pIndex) => (
                <p 
                  key={pIndex}
                  className="text-gray-600 mb-2 leading-relaxed hover:text-gray-900 transition-colors duration-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg transform rotate-3 transition-transform duration-500 group-hover:rotate-6 opacity-20" />
          <img
            src="/assets/About/teammeeting.jpg"
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