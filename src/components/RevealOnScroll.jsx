import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function RevealOnScroll({
  children,
  className = "",
  y = 16,
  amount = 0.2,
  margin = "0px 0px -10% 0px",
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, margin });
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y }}
      animate={
        prefersReducedMotion
          ? { opacity: 1 }
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : isInView
            ? {
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }
            : {
                duration: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }
      }
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
