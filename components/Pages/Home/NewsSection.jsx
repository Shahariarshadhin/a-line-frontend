"use client";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "November 16, 2019",
      category: "Ideas",
      title: "MAKE SOMETHING OUT OF YOUR GREAT IDEAS",
      link: "#",
    },
    {
      id: 2,
      date: "December 18, 2019",
      category: "Brands",
      title: "THE BEST BRANDING CAMPAIGN OF 2019",
      link: "#",
    },
    {
      id: 3,
      date: "November 16, 2019",
      category: "Ideas",
      title: "NEW EDITION OF THE SPEED OF THOUGHT",
      link: "#",
    },
    {
      id: 4,
      date: "December 18, 2019",
      category: "Brands",
      title: "ALL ABOUT FORM IN GRAPHIC DESIGN",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              NEWS_
            </h2>
          </div>

          {/* News Grid - 2x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 col-span-2">
            {newsItems.map((item) => (
              <article key={item.id} className="group">
                {/* Meta Information */}
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 uppercase tracking-wider">
                  <span>{item.category}</span>
                  <span className="text-gray-300">•</span>
                  <time dateTime={item.date}>{item.date}</time>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  <a href={item.link} className="block">
                    {item.title}
                  </a>
                </h3>

                {/* Read More Link */}
                <a
                  href={item.link}
                  className="inline-block text-sm font-bold text-gray-900 uppercase tracking-wider group-hover:text-orange-600 transition-colors duration-300"
                >
                  READ MORE...
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
