import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'left' | 'right' | 'none'
  once = true,
  threshold = 0.15,
  disabled = false,
}) => {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

    const variants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 40 : 0,
        x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
