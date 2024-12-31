import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <div className="mb-12">
      <Link 
        to="/blog"
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F103B]/30 backdrop-blur-sm rounded-full border border-[#ffffff0f] text-[#CCAFFF] hover:text-white hover:border-[#4500F9]/30 transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Zurück zum Blog</span>
      </Link>
    </div>
  );
};

export default BlogHeader;