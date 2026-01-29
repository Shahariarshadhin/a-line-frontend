"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ContactForm from "../Pages/ContactPublic/ContactPublicPage";

export default function FloatingButtons({ 
  children, 
  isModalOpen: externalIsModalOpen, 
  setIsModalOpen: externalSetIsModalOpen 
}) {
  const [showGoTop, setShowGoTop] = useState(false);
  
  // Use internal state as fallback if props aren't provided
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isModalOpen = externalIsModalOpen ?? internalModalOpen;
  const setIsModalOpen = externalSetIsModalOpen ?? setInternalModalOpen;

  useEffect(() => {
    const handleScroll = () => setShowGoTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Modal state changed:", isModalOpen);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {children}

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
        {/* Go to Top */}
        {showGoTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white rounded-full shadow-lg hover:bg-gray-200 w-12 h-12 text-2xl flex items-center justify-center"
          >
            ↑
          </motion.button>
        )}

        {/* Message Button */}
        <motion.button
          onClick={() => {
            console.log("Message button clicked");
            console.log("setIsModalOpen type:", typeof setIsModalOpen);
            setIsModalOpen(true);
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black text-white rounded-full shadow-lg w-12 h-12 transition-colors flex items-center justify-center text-xl"
        >
          💬
        </motion.button>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent w-full max-w-6xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-4">
                <button
                  className="text-white text-3xl hover:text-gray-300 transition-colors bg-white/10 rounded-full w-12 h-12 flex items-center justify-center"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
              </div>
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}