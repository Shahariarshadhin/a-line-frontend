
"use client"

import React, { useState } from 'react';
import { Grid, LayoutGrid } from 'lucide-react';

export const PortfolioPublic = () => {
  const [viewMode, setViewMode] = useState('original');

  const verticalImage = [
    { id: 1, src: "/assets/Work/verticalImage/1.png", alt: "Team collaboration", name: "KOHLER" },
    { id: 2, src: "/assets/Work/verticalImage/4.png", alt: "Office workspace", name: "KAVAZO" },
    { id: 3, src: "/assets/Work/verticalImage/7.png", alt: "Creative brainstorming", name: "Astera" },
    { id: 4, src: "/assets/Work/verticalImage/8.png", alt: "Creative brainstorming", name: "Shanta" },
    { id: 5, src: "/assets/Work/verticalImage/11.png", alt: "Creative brainstorming", name: "BMW" },
    { id: 6, src: "/assets/Work/verticalImage/12.png", alt: "Creative brainstorming", name: "Himalaya" },
    { id: 7, src: "/assets/Work/verticalImage/13.png", alt: "Creative brainstorming", name: "IELTS" },
    { id: 8, src: "/assets/Work/verticalImage/19.png", alt: "Creative brainstorming", name: "Bata" },
    { id: 9, src: "/assets/Work/verticalImage/2.png", alt: "Creative brainstorming", name: "KOHLER" },
    { id: 10, src: "/assets/Work/verticalImage/6.png", alt: "Creative brainstorming", name: "Astera" },
    { id: 11, src: "/assets/Work/verticalImage/9.png", alt: "Creative brainstorming", name: "Amy" },
    { id: 12, src: "/assets/Work/verticalImage/24.png", alt: "Creative brainstorming", name: "Power" },
    { id: 13, src: "/assets/Work/verticalImage/16.png", alt: "Creative brainstorming", name: "IELTS" },
    { id: 14, src: "/assets/Work/verticalImage/3.png", alt: "Creative brainstorming", name: "KOHLER" },
    { id: 15, src: "/assets/Work/verticalImage/25.png", alt: "Creative brainstorming", name: "Bata Sneaker" },
    { id: 16, src: "/assets/Work/verticalImage/10.png", alt: "Creative brainstorming", name: "Amy" },
    { id: 17, src: "/assets/Work/verticalImage/18.png", alt: "Creative brainstorming", name: "IELTS" },
    { id: 18, src: "/assets/Work/verticalImage/21.png", alt: "Creative brainstorming", name: "Power" },
    { id: 19, src: "/assets/Work/verticalImage/14.png", alt: "Creative brainstorming", name: "IELTS" },
    { id: 20, src: "/assets/Work/verticalImage/27.png", alt: "Creative brainstorming", name: "Bata Sneaker" },
  ];

  const horizontalImage = [
    { id: 1, src: "/assets/Work/horizontalImage/1.png", alt: "Team collaboration", name: "Bata" },
    { id: 2, src: "/assets/Work/horizontalImage/6.png", alt: "Office workspace", name: "BMW" },
    { id: 3, src: "/assets/Work/horizontalImage/12.png", alt: "Office workspace", name: "Apple" },
    { id: 4, src: "/assets/Work/horizontalImage/11.png", alt: "Office workspace", name: "Amy" },
    { id: 5, src: "/assets/Work/horizontalImage/16.png", alt: "Office workspace", name: "Sprint" },
    { id: 6, src: "/assets/Work/horizontalImage/19.png", alt: "Office workspace", name: "AMISHEE" },
    { id: 7, src: "/assets/Work/horizontalImage/24.png", alt: "Office workspace", name: "KAVAZO" },
    { id: 8, src: "/assets/Work/horizontalImage/27.png", alt: "Office workspace", name: "KIA" },
    { id: 9, src: "/assets/Work/horizontalImage/30.png", alt: "Office workspace", name: "Hongbao" },
    { id: 10, src: "/assets/Work/horizontalImage/36.png", alt: "Office workspace", name: "Ford" },
    { id: 11, src: "/assets/Work/horizontalImage/38.png", alt: "Office workspace", name: "Tobacco Free" },
    { id: 12, src: "/assets/Work/horizontalImage/40.png", alt: "Office workspace", name: "Frooto" },
    { id: 13, src: "/assets/Work/horizontalImage/10.png", alt: "Office workspace", name: "Shanta" },
    { id: 14, src: "/assets/Work/horizontalImage/2.png", alt: "Office workspace", name: "Bata" },
    { id: 15, src: "/assets/Work/horizontalImage/14.png", alt: "Office workspace", name: "Apple" },
    { id: 16, src: "/assets/Work/horizontalImage/18.png", alt: "Office workspace", name: "Sprint" },
    { id: 17, src: "/assets/Work/horizontalImage/20.png", alt: "Office workspace", name: "AMISHEE" },
    { id: 18, src: "/assets/Work/horizontalImage/32.png", alt: "Office workspace", name: "Hongbao" },
    { id: 19, src: "/assets/Work/horizontalImage/39.png", alt: "Office workspace", name: "Tobacco Free" },
    { id: 20, src: "/assets/Work/horizontalImage/43.png", alt: "Office workspace", name: "Pran Active" },
  ];

  const allImages = [...verticalImage, ...horizontalImage];

  const renderOriginalLayout = () => (
    <div className="space-y-10 py-20 mx-4">
      {verticalImage.map((vImg, index) => {
        const hImg = horizontalImage[index];
        const isEven = index % 2 === 1;
        const leftImage = isEven ? hImg : vImg;
        const rightImage = isEven ? vImg : hImg;

        return (
          <div key={index} className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Left Image with Hover */}
            <div className="relative group rounded-xl overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <img
                  src={leftImage.src}
                  alt={leftImage.alt}
                  width={leftImage === vImg ? 400 : 800}
                  height={400}
                  className="w-full h-auto md:h-[470px] rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-semibold text-xl">
                <h3 className="text-white font-semibold text-5xl">{leftImage.name}</h3>
              </div>
            </div>

            {/* Right Image with Hover */}
            <div className="relative group rounded-xl overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <img
                  src={rightImage.src}
                  alt={rightImage.alt}
                  width={rightImage === vImg ? 400 : 800}
                  height={400}
                  className="w-full h-auto md:h-[470px] rounded-xl"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-semibold text-xl">
                <h3 className="text-white font-semibold text-5xl">{rightImage.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderGridLayout = () => (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allImages.map((img, index) => (
          <div key={`grid-${index}`} className="relative group rounded-xl overflow-hidden">
            <div className="transition-transform duration-500 group-hover:scale-110">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white font-semibold text-5xl">{img.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMasonryLayout = () => (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {allImages.map((img, index) => (
          <div key={`masonry-${index}`} className="relative group rounded-xl overflow-hidden break-inside-avoid">
            <div className="transition-transform duration-500 group-hover:scale-110">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white font-semibold text-5xl">{img.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="w-full">
        <img
          className="w-full"
          alt="work banner"
          src="/assets/Work/newWorkBannner.png"
        />
      </div>

      {/* View Mode Toggle */}
      <div className="sticky top-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-end gap-2">
          <button
            onClick={() => setViewMode('original')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'original'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <LayoutGrid size={20} />
            <span className="hidden sm:inline">Original</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Grid size={20} />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              viewMode === 'masonry'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <LayoutGrid size={20} />
            <span className="hidden sm:inline">Masonry</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'original' && renderOriginalLayout()}
      {viewMode === 'grid' && renderGridLayout()}
      {viewMode === 'masonry' && renderMasonryLayout()}
    </div>
  );
};
