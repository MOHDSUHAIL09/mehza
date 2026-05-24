import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const reviews = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Principal, Delhi Public School",
    rating: 5.0,
    date: "12 Oct, 2025",
    text: "The installation was seamless — zero disruption to our students. The real-time dashboard has completely transformed how we manage restocking.",
    initial: "P",
    color: "#8E2DE2"
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Facilities Head, Infosys Campus",
    rating: 4.9,
    date: "05 Jan, 2026",
    text: "Within 3 months of deployment, our HR team reported a measurable improvement in employee satisfaction scores. Worth every rupee.",
    initial: "A",
    color: "#0072FF"
  },
  {
    id: 3,
    name: "Sunita Kapoor",
    role: "Operations Director, Select Citywalk",
    rating: 5.0,
    date: "28 Feb, 2026",
    text: "We rolled it out across 4 malls simultaneously. The Mehza team handled everything — from site survey to go-live. Exceptional service.",
    initial: "S",
    color: "#00C6FF"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Map the 3 visible slots based on currentIndex
  // Slot 0: Top, Slot 1: Middle, Slot 2: Bottom
  const visibleItems = [
    { ...reviews[(currentIndex + 1) % reviews.length], slot: 0, uid: currentIndex + 1 },
    { ...reviews[currentIndex % reviews.length], slot: 1, uid: currentIndex },
    { ...reviews[(currentIndex - 1) % reviews.length], slot: 2, uid: currentIndex - 1 }
  ].sort((a, b) => a.uid - b.uid);

  const activeReview = reviews[currentIndex % reviews.length];

  return (
    <section className="relative pt-12 md:pt-24 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-visible bg-transparent">
  {/* Retained background ambient glow */}
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8E2DE2]/10 rounded-full blur-[120px] pointer-events-none z-0" />
  
  <AnimatedSection direction="up" className="mb-16 relative z-10">
    <div className="w-12 h-1 bg-[#00C6FF] mb-6"></div>
    <h2 className="text-4xl md:text-5xl font-black font-headline text-slate-900 dark:text-white tracking-tight transition-colors duration-500">
      Customer Reviews
    </h2>
  </AnimatedSection>

  <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start relative">
    
    <div className="relative w-full md:w-[35%] h-[300px] flex-shrink-0">
      
      <div className="absolute left-[31px] top-0 bottom-0 w-[2px] z-0 pointer-events-none overflow-visible bg-gradient-to-b from-transparent via-slate-200/50 dark:via-white/20 to-transparent transition-colors duration-500"></div>

      <div className="relative w-full h-full z-10">
        <AnimatePresence>
          {visibleItems.map((item) => {
            const isActive = item.slot === 1;
            const topPosition = item.slot * 100; // 0, 100, 200

            return (
              <motion.div
                key={item.uid}
                initial={{ opacity: 0, y: -100, x: 0 }}
                animate={{ opacity: isActive ? 1 : 0.5, y: topPosition, x: 0 }}
                exit={{ opacity: 0, y: 300, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute left-0 flex items-center gap-6 cursor-pointer group h-[100px] w-full"
              >
                <div className="w-16 flex justify-center flex-shrink-0">
                  <div 
                    className={`relative transition-all duration-500 rounded-full flex items-center justify-center font-black ${isActive ? 'w-16 h-16 text-2xl z-20' : 'w-12 h-12 text-lg z-10'}`}
                    style={{ 
                      border: isActive ? `3px solid ${item.color}` : `1px solid ${item.color}40`,
                      backgroundColor: isActive ? `${item.color}20` : `${item.color}10`,
                      boxShadow: isActive ? `0 0 20px ${item.color}40` : 'none',
                    }}
                  >
                    <span className={`${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-gray-500'} transition-colors duration-500`}>
                      {item.initial}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col transition-all duration-500">
                  <h4 className={`font-bold font-headline transition-colors duration-500 ${
                    isActive 
                      ? 'text-slate-900 dark:text-white text-lg' 
                      : 'text-slate-400 dark:text-gray-500 text-base'
                  }`}>
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>

    {/* Right Side: Quote Content */}
    <div className="w-full md:w-[65%] relative min-h-[250px] md:min-h-[350px] flex items-start">
      <div className="absolute top-0 left-0 text-slate-200/20 dark:text-white/5 font-serif leading-none pointer-events-none select-none transition-colors duration-500" style={{ fontSize: '240px', transform: 'translateY(-60px) translateX(-30px)' }}>“</div>
      
      <div className="relative z-10 w-full pt-12 md:pt-[100px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeReview.id}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-2xl md:text-3xl lg:text-[2rem] text-slate-800 dark:text-white font-serif leading-[1.4] italic tracking-wide transition-colors duration-500">
              {activeReview.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

  </div>
</section>
  );
};

export default Testimonials;
