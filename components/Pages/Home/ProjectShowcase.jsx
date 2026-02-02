'use client';

export default function ProjectShowCase() {
  const images = [
    {
      id: 1,
      src: "/assets/Work/horizontalImage/14.png",
      alt: "Architecture",
      span: "col-span-2 row-span-1",
      overlay: true,
      title: "THE SPEED OF THOUGHT"
    },
    {
      id: 2,
      src: "/assets/Work/horizontalImage/10.png",
      alt: "Portrait",
      span: "col-span-1 row-span-1"
    },
    {
      id: 3,
      src: "/assets/Work/verticalImage/5.png",
      alt: "Car Wheel",
      span: "col-span-1 row-span-2"
    },
    {
      id: 4,
      src: "/assets/Work/horizontalImage/6.png",
      alt: "Abstract",
      span: "col-span-2 row-span-2"
    },
    {
      id: 5,
      src: "/assets/Work/horizontalImage/22.png",
      alt: "Art",
      span: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src: "/assets/Work/verticalImage/3.png",
      alt: "Sky",
      span: "col-span-1 row-span-2"
    },
    {
      id: 7,
      src: "/assets/Work/horizontalImage/5.png",
      alt: "Product",
      span: "col-span-1 row-span-1"
    },
    {
      id: 8,
      src: "/assets/Work/horizontalImage/8.png",
      alt: "Group",
      span: "col-span-2 row-span-1"
    },
    {
      id: 9,
      src: "/assets/Work/verticalImage/9.png",
      alt: "Portrait Woman",
      span: "col-span-1 row-span-2"
    },
    {
      id: 10,
      src: "/assets/Work/horizontalImage/12.png",
      alt: "Mountain",
      span: "col-span-1 row-span-1"
    },
    {
      id: 11,
      src: "/assets/Work/horizontalImage/40.png",
      alt: "Rocket",
      span: "col-span-2 row-span-1"
    },
    // {
    //   id: 12,
    //   src: "/assets/Work/verticalImage/7.png",
    //   alt: "Sunset",
    //   span: "col-span-1 row-span-2"
    // },
    // {
    //   id: 13,
    //   src: "/assets/Work/horizontalImage/20.png",
    //   alt: "Nature",
    //   span: "col-span-1 row-span-1"
    // },
    // {
    //   id: 14,
    //   src: "/assets/Work/horizontalImage/15.png",
    //   alt: "City",
    //   span: "col-span-2 row-span-1"
    // },
    // {
    //   id: 15,
    //   src: "/assets/Work/verticalImage/9.png",
    //   alt: "People",
    //   span: "col-span-1 row-span-2"
    // }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Desktop Grid - 4 columns */}
        <div className="hidden md:grid grid-cols-4 auto-rows-[250px] gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${image.span} relative overflow-hidden group cursor-pointer rounded-sm`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {image.overlay && (
                  <div className="absolute inset-0 bg-orange-600/90 flex items-center justify-center">
                    <h2 className="text-white text-2xl md:text-4xl font-bold italic px-6 text-center leading-tight">
                      {image.title}
                    </h2>
                  </div>
                )}
              </div>
              
              {/* Hover Overlay */}
              {!image.overlay && (
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Grid - 2 columns with simpler layout */}
        <div className="grid md:hidden grid-cols-2 gap-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden group cursor-pointer rounded-sm aspect-square"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {image.overlay && (
                  <div className="absolute inset-0 bg-orange-600/90 flex items-center justify-center">
                    <h2 className="text-white text-lg font-bold italic px-4 text-center">
                      {image.title}
                    </h2>
                  </div>
                )}
              </div>
              
              {!image.overlay && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}