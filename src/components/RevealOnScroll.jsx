import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function RevealOnScroll({
  children,
  className = "",
  y = 16,
  amount = 0.2,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.26,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
