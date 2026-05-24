import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40 bg-[#00C6FF]/10 backdrop-blur-md border border-[#00C6FF]/30 text-[#00C6FF] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,198,255,0.2)] hover:bg-[#00C6FF] hover:text-white hover:shadow-[0_0_25px_rgba(0,198,255,0.5)] transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined font-bold text-2xl md:text-3xl transition-transform duration-300 group-hover:-translate-y-1">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
