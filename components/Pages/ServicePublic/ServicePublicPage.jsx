"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "/assets/Work/horizontalImage/24.png",
    alt: "Business consultancy",
    title: "Business consultancy",
    category: "Brand Identity",
    description: [
      "We help businesses see the bigger picture, and act on it.From go- to - market strategies to operational optimization, our consultancy bridges insight with action to drive sustainable growth.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/26.png",
    alt: "Brand consultancy and design",
    title: "Brand consultancy and design",
    category: "UI/UX Design",
    description: [
      "Your brand is an experience, not just a logo. It’s how the world sees you.We shape distinct brand identities through strategic positioning, storytelling, and striking visual design that connect with your audience and stand the test of time.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/28.png",
    alt: "Creative",
    title: "Creative",
    category: "Web Development",
    description: [
      "We bring ideas to life with concepts that cut through the noise. From a disruptive campaign to a subtle narrative shift, our creative work sparks emotion, builds engagement, and drives results.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/8.png",
    alt: "PR & Public affairs",
    title: "PR & Public affairs",
    category: "3D Design",
    description: [
      "Perception is power. We manage reputations, shape publicnarratives, and build trust across media, stakeholders, andpolicy spaces. With strong networks and sharp messaging, we keep you in control of the conversation.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/2.png",
    alt: "⁠Brand partnership and sponsorship, Events",
    title: "⁠Brand partnership and sponsorship, Events",
    category: "3D Design",
    description: [
      "We connect brands to the right moments, platforms,and people.From high- impact partnerships toimmersive event experiences, we build engagement strategies that extend your brand’s reach and relevance.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/21.png",
    alt: "Production and content",
    title: "Production and content",
    category: "3D Design",
    description: [
      "From scripts to screen and everything in between, we produce content that captivates. Be it video, digital, print, or experiential, our production management ensures every frame speaks your personalized brand language.",
    ],
  },
  {
    src: "/assets/Work/horizontalImage/25.png",
    alt: "UI/UX Design",
    title: "UI/UX Design",
    category: "3D Design",
    description: [
      "Seamless, smart, and user-first. We design digital experiences that feel intuitive and look stunning.From wireframes to final launch, we blend aesthetics with functionality to drive engagement and conversion.",
    ],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export default function ServicePublic() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((img, index) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => {
            setLoaded((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            resolve();
          };
          image.onerror = reject;
          image.src = img.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setAllImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setAllImagesPreloaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const items = itemsRef.current;

    // Set initial positions - all cards except first start at 100% translateY
    items.forEach((item, index) => {
      if (item && index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: `+=${images.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    // Animate each card
    images.forEach((_, index) => {
      // Scale down and add border radius to current card
      tl.to(items[index], {
        scale: 0.9,
        borderRadius: "10px",
      });

      // Slide up the next card at the same time
      if (images[index + 1]) {
        tl.to(items[index + 1], { yPercent: 0 }, "<");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="">
      {/* Hero Section */}
      <div className="flex items-center justify-center">
        <div className="w-full grid grid-cols-1  items-center px-6 md:p-12 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-medium">
                Our Work
              </span>
            </motion.div> */}

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight text-right pt-28">
              Our Services That
              <span className="text-red-500 relative inline-block pl-3">
                Speak
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-red-500/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>
            </h1>

            {/* <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl">
              Transforming visions into exceptional digital experiences that
              captivate, engage, and inspire action.
            </p> */}

            {/* <motion.button
              className="px-8 py-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button> */}
          </motion.div>

          {/* <motion.div
            className="relative h-[400px] lg:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Featured work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
      {/* Loading Overlay */}
      {!allImagesPreloaded && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading experience...</p>
            <p className="text-gray-400 text-sm mt-2">
              {loaded.filter(Boolean).length} / {images.length} images loaded
            </p>
          </div>
        </div>
      )}

      {/* Vertical Scroll Section with GSAP */}
      <div ref={sectionRef} className="scroll-section vertical-section section">
        <div className="wrapper h-screen overflow-hidden">
          <div role="list" className="list relative h-full">
            {images.map((img, i) => (
              <div
                key={i}
                role="listitem"
                className="item absolute inset-0 will-change-transform"
                ref={(el) => (itemsRef.current[i] = el)}
              >
                <div className="h-full w-full bg-white">
                  <div className="relative w-full h-full flex flex-col">
                    {/* Title Section */}
                    <div className="px-6 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-8">
                      <div className="flex items-start justify-between">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black uppercase leading-tight max-w-4xl">
                          {img.title}
                        </h2>
                        <div className="text-black/20 text-6xl md:text-8xl lg:text-9xl font-bold">
                          0{i + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Image Left, Info Right */}

                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                      {/* Left - Image */}
                      <div className="relative h-full  bg-gradient-to-br from-red-100 via-red-50 to-black  overflow-hidden">
                        {!loaded[i] && (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
                            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="eager"
                            decoding="async"
                            className={`max-w-full max-h-full object-contain transition-opacity duration-700 ${
                              loaded[i] ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Right - Information */}
                      <div className="bg-white flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12">
                        <span className="text-red-500 text-sm font-bold mb-4 tracking-wider uppercase">
                          {img.category}
                        </span>

                        {img.description.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-700 text-base md:text-2xl leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}

                        <div>
                          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white font-bold text-sm md:text-base uppercase tracking-wide hover:bg-red-600 transition-all">
                            Explore More
                            <span className="transform group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(to_right, text-black p-6">
        <div className="container mx-auto pt-10">
          <h2 className=" text-3xl md:text-5xl font-extrabold">
            Why Choose <span className="text-red-500">US</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-6">
            <div>
              <h4 className="font-bold text-2xl pb-2">
                <Quote />
              </h4>
              <h4 className="font-bold text-2xl py-4">Marketing That Hits</h4>
              <p>
                At Slingshot Media, we don’t shoot in the dark — we use data,
                strategy, and creativity to deliver campaigns that convert.
                Every click counts.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-2xl pb-2">
                <Quote />
              </h4>
              <h4 className="font-bold text-2xl py-4">Built for Your Growth</h4>
              <p>
                We align our strategies with your business goals, ensuring that
                every marketing dollar delivers measurable results and
                sustainable growth.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-2xl pb-2">
                <Quote />
              </h4>
              <h4 className="font-bold text-2xl py-4">
                Results-Driven Strategy
              </h4>
              <p>
                From SEO to paid media, we combine smart tech with sharp minds
                to deliver consistent ROI and help brands stand out in the
                digital noise.
              </p>
            </div>
          </div>
          <h4 className="text-2xl md:text-3xl font-bold py-5 md:py-16 text-center">
            From bold ideas to real results —
            <span className="bg-red-500">
              we build marketing that performs.
            </span>
          </h4>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="flex items-center justify-center py-10 md:py-28">
        <div className="text-center max-w-4xl px-6 md:px-12">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Create Something Amazing?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s collaborate and bring your vision to life
          </motion.p>
          <motion.button
            className="px-10 py-5 bg-red-500 text-white rounded-full font-medium text-lg hover:bg-red-600 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </div>
  );
}
