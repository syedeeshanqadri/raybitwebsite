"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-r from-primary via-[#00d084] to-primary bg-[length:200%_100%] animate-gradient"
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          
          <div className="relative mx-auto px-4 py-3 md:py-2.5 flex items-center justify-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 md:gap-3"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="text-xl md:text-2xl"
              >
                🎉
              </motion.span>
              
              <p className="text-white font-medium text-sm md:text-base lg:text-lg text-center">
                <span className="font-semibold">Codemites</span> is now{" "}
                <span className="font-bold text-yellow-300">Raybit Technologies</span>
              </p>

              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="text-xl md:text-2xl"
              >
                ✨
              </motion.span>
            </motion.div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close announcement"
            >
              <X size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
