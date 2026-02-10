'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  variants: {
    hidden: object;
    visible: object;
  };
  delay?: number;
  staggerChildren?: number;
}

export function ScrollAnimation({
  children,
  className,
  variants,
  delay = 0,
  staggerChildren,
}: ScrollAnimationProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
        staggerChildren: staggerChildren,
      }}
    >
      {children}
    </motion.div>
  );
}
