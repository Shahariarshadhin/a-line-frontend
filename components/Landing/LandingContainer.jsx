"use client";

import { useState, useEffect, useRef } from "react";

export default function SectionCarousel() {
  const sections = [
    {
      title: "WHO WE ARE",
      image: "/assets/Landing/who we are.png",
      link: "/who-we-are",
    },
    {
      title: "PORTFOLIO",
      image: "/assets/Landing/A-line portfolio.png",
      link: "/portfolio",
    },
    {
      title: "SERVICES",
      image: "/assets/Landing/Services.png",
      link: "/services",
    },
    {
      title: "TEAM",
      image: "/assets/Landing/Team.png",
      link: "/team",
    },
    {
      title: "ASK FOR A QUOTE",
      image: "/assets/Landing/askforq.png",
      link: "/quote",
    },
  ];

  const [current, setCurrent] = useState(2);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [baseSpacing, setBaseSpacing] = useState(380);
  
  const velocityRef = useRef(0);
  const lastPosRef = useRef(0);
  const lastTimeRef = useRef(0);
  const autoPlayTimerRef = useRef(null);
  const clickStartTimeRef = useRef(0);

  useEffect(() => {
    const updateSpacing = () => {
      if (window.innerWidth > 1024) {
        setBaseSpacing(450);
      } else if (window.innerWidth > 768) {
        setBaseSpacing(380);
      } else {
        setBaseSpacing(320);
      }
    };

    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, []);

  const goToSlide = (index, skipAnimation = false) => {
    if (isAnimating && !skipAnimation) return;

    setIsAnimating(true);
    setCurrent(index);
    setOffset(0);

    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((current + 1) % sections.length);
  };

  const resetAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      if (!isDragging && !isAnimating) {
        nextSlide();
      }
    }, 5000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [current, isDragging, isAnimating]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setIsAnimating(false);
    setStartPos(clientX);
    setDragDistance(0);
    clickStartTimeRef.current = Date.now();
    lastPosRef.current = clientX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;

    const now = Date.now();
    const timeDiff = now - lastTimeRef.current;

    if (timeDiff > 0) {
      velocityRef.current = (clientX - lastPosRef.current) / timeDiff;
    }

    lastPosRef.current = clientX;
    lastTimeRef.current = now;

    const distance = clientX - startPos;
    setDragDistance(distance);
    setOffset(distance);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    const threshold = 50;
    const velocityThreshold = 0.3;
    const clickTimeThreshold = 200;
    const clickDistanceThreshold = 10;

    const clickDuration = Date.now() - clickStartTimeRef.current;
    const wasClick = 
      clickDuration < clickTimeThreshold && 
      Math.abs(dragDistance) < clickDistanceThreshold;

    if (wasClick) {
      setOffset(0);
      setDragDistance(0);
      velocityRef.current = 0;
      return;
    }

    let shouldChange = false;
    let direction = 0;

    if (Math.abs(velocityRef.current) > velocityThreshold) {
      shouldChange = true;
      direction = velocityRef.current > 0 ? -1 : 1;
    } else if (Math.abs(dragDistance) > threshold) {
      shouldChange = true;
      direction = dragDistance > 0 ? -1 : 1;
    }

    if (shouldChange) {
      const newIndex =
        (current + direction + sections.length) % sections.length;
      setIsAnimating(true);
      setCurrent(newIndex);
      setOffset(0);
      setTimeout(() => setIsAnimating(false), 500);
      resetAutoPlay();
    } else {
      setIsAnimating(true);
      setOffset(0);
      setTimeout(() => setIsAnimating(false), 300);
    }

    setStartPos(0);
    setDragDistance(0);
    velocityRef.current = 0;
  };

  const handleTextClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    const clickTimeThreshold = 200;
    const clickDistanceThreshold = 10;
    
    // Check if this was a drag or a click
    if (Math.abs(dragDistance) > clickDistanceThreshold) {
      return;
    }

    if (index === current) {
      // Only allow navigation for PORTFOLIO section (index 1)
      if (index === 1) {
        const link = sections[index].link;
        setTimeout(() => {
          window.open(link, '_self');
        }, 0);
      }
      // All other sections do nothing when clicked
    } else {
      goToSlide(index);
      resetAutoPlay();
    }
  };

  const getVisibleSections = () => {
    const items = [];

    for (let i = -2; i <= 2; i++) {
      const index = (current + i + sections.length) % sections.length;
      items.push({
        ...sections[index],
        actualIndex: index,
        position: i,
      });
    }

    return items;
  };

  const visibleSections = getVisibleSections();

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-900 select-none touch-none"
      onMouseDown={(e) => {
        e.preventDefault();
        handleStart(e.clientX);
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <style jsx>{`
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        .blink-underscore {
          animation: blink 1s infinite;
        }
      `}</style>

      {/* Background Images */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 overflow-hidden">
        {visibleSections.map((section, idx) => {
          const isCurrent = section.position === 0;
          const isAdjacent = Math.abs(section.position) === 1;
          
          // Calculate position based on index relative to center
          const position = section.position * baseSpacing;

          return (
            <div
              key={`${section.actualIndex}-${idx}`}
              onClick={(e) => handleTextClick(section.actualIndex, e)}
              className={`absolute transition-all duration-500 ease-out ${
                isCurrent
                  ? "opacity-100 scale-100 cursor-pointer z-30"
                  : isAdjacent
                  ? "opacity-40 scale-75 cursor-pointer hover:opacity-60 hover:scale-80 z-20"
                  : "opacity-15 scale-50 cursor-pointer hover:opacity-30 hover:scale-55 z-10"
              }`}
              style={{
                left: isCurrent ? '50%' : `calc(50% + ${position + offset}px)`,
                top: '50%',
                transform: isCurrent ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
                transition:
                  !isDragging && isAnimating
                    ? "left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out, transform 0.5s ease-out"
                    : isDragging
                    ? "opacity 0.5s ease-out, transform 0.5s ease-out"
                    : "opacity 0.5s ease-out, transform 0.5s ease-out",
              }}
            >
              <h1
                className={`font-black whitespace-nowrap transition-all duration-300 ${
                  isCurrent
                    ? "text-4xl md:text-5xl lg:text-5xl hover:scale-105 bg-white py-3 px-2 text-black shadow-2xl"
                    : "text-4xl md:text-5xl lg:text-5xl text-white"
                }`}
                draggable="false"
              >
                {section.title}
                {isCurrent ? (
                  <span className="blink-underscore">_</span>
                ) : (
                  "_"
                )}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              resetAutoPlay();
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}