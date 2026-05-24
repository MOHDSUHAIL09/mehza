import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); 
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e) => {
      if (e.target.closest('button, a, .group, .premium-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#00C6FF] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#8E2DE2]/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(142, 45, 226, 0.1)" : "rgba(142, 45, 226, 0)",
          borderColor: isHovering ? "#00C6FF" : "#8E2DE2",
        }}
      />
    </>
  );
};

export default CustomCursor;





// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       if (!isVisible) setIsVisible(true);
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseLeave = () => {
//       setIsVisible(false);
//     };

//     window.addEventListener('mousemove', updateMousePosition);
//     document.body.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       document.body.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, [isVisible]);

//   if (!isVisible) return null;

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#00C6FF]/15 rounded-full blur-[120px] pointer-events-none z-[-1]"
//       animate={{
//         x: mousePosition.x - 250,
//         y: mousePosition.y - 250,
//       }}
//       transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
//     />
//   );
// };

// export default CustomCursor;
