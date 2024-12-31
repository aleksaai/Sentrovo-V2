import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  showArrow?: boolean;
  className?: string;
}

const CTAButton = ({ text, showArrow = true, className = '' }: CTAButtonProps) => {
  return (
    <Link to="/contact">
      <div className="relative inline-block group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#4500F9] to-[#6E3FFE] rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-300" />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4500F9] to-[#6E3FFE] rounded-xl text-lg font-semibold text-white hover:shadow-lg hover:shadow-[#4500F9]/20 transition-all duration-300 ${className}`}
        >
          <span>{text}</span>
          {showArrow && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </motion.button>
      </div>
    </Link>
  );
};

export default CTAButton;