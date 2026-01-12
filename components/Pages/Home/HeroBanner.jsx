'use client';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/assets/Landing/who we are.png')` 
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/50 to-orange-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span className="block">BUILD UP</span>
            <span className="block">A FRESH BRAND</span>
            <span className="block">IMAGE WITH BOLDLAB_</span>
          </h1>
          <button className="bg-white text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors">
            VIEW MORE...
          </button>
        </div>
      </div>
    </div>
  );
}