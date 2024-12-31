import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-20">
      <h2 className="text-6xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 
          bg-gradient-to-r from-white/5 to-white/10
          backdrop-blur-xl rounded-full
          border border-white/10
          shadow-[0_0_20px_rgba(69,0,249,0.15)]
          hover:border-[#4500F9]/30 hover:shadow-[0_0_30px_rgba(69,0,249,0.2)]
          transition-all duration-300"
      >
        <span className="text-sm font-medium bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
          {subtitle}
        </span>
      </motion.div>
    </div>
  );
};

export default SectionHeading;