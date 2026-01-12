'use client';

import Image from 'next/image';
import { Award } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      number: "01.",
      category: "Commward",
      image: "/assets/Awards/Commrade.jpeg",
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
      achievements: [
        "Best use of Facebook - ACI Fun Junction - Latim, Danguli - share photo contest",
        "Best use of Digital Media Alesha Mart launch"
      ]
    }
  ];

  return (
    <section className="w-full bg-gray-200 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-10 md:mb-16">
          Prestigious Awards
        </h2>

        {/* Awards List */}
        <div className="space-y-12 md:space-y-16">
          {awards.map((award) => (
            <div 
              key={award.id}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
            >
              {/* Award Number */}
              <div className="flex items-center justify-center md:justify-start">
                <h4 className="text-6xl md:text-7xl text-black font-extrabold opacity-50">
                  {award.number}
                </h4>
              </div>

              {/* Award Details */}
              <div className="col-span-1 md:col-span-2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  {award.category}
                </h3>
                <div className="space-y-3">
                  {award.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <Award className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-black text-sm md:text-lg leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Award Image */}
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  className="rounded-2xl object-cover"
                  alt={`${award.category} award`}
                  fill
                  src={award.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}