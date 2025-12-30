"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SectionCarousel() {
  const router = useRouter();

  const sections = [
    {
      title: "WHO WE ARE",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      link: "/who-we-are",
    },
    {
      title: "PORTFOLIO",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      link: "/portfolio",
    },
    {
      title: "SERVICES",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      link: "/services",
    },
    {
      title: "TEAM",
      image:
        "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1600&q=80",
      link: "/team",
    },
    {
      title: "ASK FOR A QUOTE",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
      link: "/quote",
    },
  ];

  const [current, setCurrent] = useState(2); // Start at index 2 (SERVICES)
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const velocityRef = useRef(0);
  const lastPosRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationRef = useRef(null);

  const goToSlide = (index) => {
    if (isAnimating && !isDragging) return;
    
    setIsAnimating(true);
    setCurrent(index);
    setOffset(0);
    
    setTimeout(() => setIsAnimating(false), 400);
  };

  const nextSlide = () => {
    goToSlide((current + 1) % sections.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging && !isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [current, isDragging, isAnimating]);

  const handleStart = (clientX) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsDragging(true);
    setIsAnimating(false);
    setStartPos(clientX);
    setDragDistance(0);
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

    const threshold = 80;
    const velocityThreshold = 0.5;

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
      const newIndex = (current + direction + sections.length) % sections.length;
      setIsAnimating(true);
      setCurrent(newIndex);
      setOffset(0);
      setTimeout(() => setIsAnimating(false), 400);
    } else {
      // Snap back
      setIsAnimating(true);
      setOffset(0);
      setTimeout(() => setIsAnimating(false), 300);
    }

    setStartPos(0);
    setDragDistance(0);
    velocityRef.current = 0;
  };

  const handleTextClick = (index, e) => {
    if (Math.abs(dragDistance) > 5) {
      e.preventDefault();
      return;
    }

    const position = (index - current + sections.length) % sections.length;
    const isCurrent = position === 0;

    if (isCurrent) {
      router.push(sections[index].link);
    } else {
      goToSlide(index);
    }
  };

  // Create infinite loop array
  const getVisibleSections = () => {
    const items = [];
    const visibleCount = 5;
    
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
      {/* Background Images */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.5s ease-in-out",
          }}
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

      {/* Content Container - Continuous Loop */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 overflow-hidden">
        <div
          className="flex items-center justify-center gap-12 lg:gap-20"
          style={{
            transform: `translateX(${offset}px)`,
            transition: !isDragging && isAnimating ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
          }}
        >
          {visibleSections.map((section, idx) => {
            const isCurrent = section.position === 0;
            const isAdjacent = Math.abs(section.position) === 1;

            return (
              <div
                key={`${section.actualIndex}-${idx}`}
                onClick={(e) => handleTextClick(section.actualIndex, e)}
                className={`${
                  isCurrent
                    ? "opacity-100 scale-100 cursor-pointer"
                    : isAdjacent
                    ? "opacity-30 scale-75 cursor-pointer hover:opacity-50 hidden lg:block"
                    : "opacity-0 scale-50 hidden lg:block pointer-events-none"
                }`}
                style={{
                  transition: isDragging || isAnimating ? "none" : "opacity 0.4s ease-out, transform 0.4s ease-out",
                }}
              >
                <h1
                  className={`font-black whitespace-nowrap ${
                    isCurrent
                      ? "text-5xl md:text-6xl lg:text-7xl hover:scale-105 bg-white py-3 px-2 text-black"
                      : "text-5xl md:text-6xl lg:text-7xl text-white"
                  }`}
                  draggable="false"
                >
                  {section.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}