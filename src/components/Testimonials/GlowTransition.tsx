import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlowTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const glowSize = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "150%"]);
  const glowColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(255, 255, 255, 0.1)", "rgba(69, 0, 249, 0.3)", "rgba(69, 0, 249, 0.2)"]
  );

  return (
    <div ref={containerRef} className="absolute inset-x-0 -top-32 h-64 overflow-hidden">
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          width: glowSize,
          height: glowSize,
          opacity: glowOpacity,
          background: glowColor,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default GlowTransition;