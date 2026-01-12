'use client';

import Image from 'next/image';

export default function FeaturedClients() {
  const logos = [
    "/assets/partnership/bata.png",
    "/assets/partnership/Apex.png",
    "/assets/partnership/Brac.png",
    "/assets/partnership/City Bank.png",
    "/assets/partnership/DBL.png",
    "/assets/partnership/Dekko.png",
    "/assets/partnership/ECG.png",
    "/assets/partnership/Ford.png",
    "/assets/partnership/Union.png",
    "/assets/partnership/Meghna.png",
    "/assets/partnership/bmw.png",
    "/assets/partnership/Praava.png",
    "/assets/partnership/Sajida.png",
    "/assets/partnership/Toyota.png",
    "/assets/partnership/Transcom.png",
    "/assets/partnership/Unicef.png",
    "/assets/partnership/Banglalink.png",
    "/assets/partnership/Audi.png",
    "/assets/partnership/Bajaj.png",
    "/assets/partnership/Bangladesh-Navy.png",
    "/assets/partnership/BAT.png",
    "/assets/partnership/Bolo.png",
    "/assets/partnership/british-council.png",
    "/assets/partnership/Dettol.png",
    "/assets/partnership/Durex.png",
    "/assets/partnership/Gaviscon.png",
    "/assets/partnership/GP.png",
    "/assets/partnership/Green-Delta-Insurance.png",
    "/assets/partnership/Himalaya.png",
    "/assets/partnership/I2-cure.png",
    "/assets/partnership/Kavazo.png",
    "/assets/partnership/Kelvinator.png",
    "/assets/partnership/LAFZ.png",
    "/assets/partnership/Lee-Cooper.png",
    "/assets/partnership/Lysol.png",
    "/assets/partnership/Mobil.png",
    "/assets/partnership/Mortein.png",
    "/assets/partnership/Mutual-Trust-Bank.png",
    "/assets/partnership/Prime-Bank.png",
    "/assets/partnership/Rangs-Electronics.png",
    "/assets/partnership/reckitt.png",
    "/assets/partnership/Renaissance-Hotels.png",
    "/assets/partnership/Robi.png",
    "/assets/partnership/Shahi.png",
    "/assets/partnership/ssd-tech.png",
    "/assets/partnership/Standard-Chartered.png",
    "/assets/partnership/Trix.png",
    "/assets/partnership/Veet.png",
  ];

  return (
    <section className="w-full bg-neutral-900 py-16 md:py-20">
      <div className=" px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 md:mb-20">
          Our Clients
        </h2>

        {/* Clients Grid */}
        <div className="grid grid-rows-3 gap-8">
          {[0, 1, 2].map((rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-8"
            >
              {logos
                .slice(
                  rowIndex * Math.ceil(logos.length / 3),
                  (rowIndex + 1) * Math.ceil(logos.length / 3)
                )
                .map((logo, i) => (
                  <div 
                    key={i} 
                    className="w-32 h-20 relative group cursor-pointer"
                  >
                    <Image
                      src={logo}
                      alt={`Client logo ${i + 1}`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}