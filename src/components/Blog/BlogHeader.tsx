import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="relative pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center space-x-2 mb-6 bg-[#1F103B]/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-[#ffffff0f]"
        >
          <BookOpen className="w-4 h-4 text-[#4500F9]" />
          <span className="text-sm text-[#CCAFFF]">Sentrovo Blog</span>
        </motion.div>
        
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent">
          Insights & Neuigkeiten
        </h1>
        
        <p className="text-xl text-[#CCAFFF] max-w-2xl mx-auto">
          Entdecken Sie die neuesten Entwicklungen und Trends in der Welt der künstlichen Intelligenz.
        </p>
      </div>
    </div>
  );
}

export default BlogHeader;