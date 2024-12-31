import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/BlogTypes';

interface BlogCardProps extends BlogPost {}

const BlogCard = ({ id, title, description, image, category }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative bg-gradient-to-b from-black/40 to-[#4500F9]/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#4500F9]/10 border border-[#4500F9]/20">
            <span className="text-xs font-medium text-[#CCAFFF]">{category}</span>
          </div>

          <h3 className="text-xl font-semibold text-white group-hover:text-[#4500F9] transition-colors">
            {title}
          </h3>

          <p className="text-[#CCAFFF] text-sm line-clamp-2">
            {description}
          </p>

          <div className="pt-4 flex items-center text-sm text-[#4500F9] font-medium">
            <span>Weiterlesen</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        <div className="absolute inset-0 border border-[#4500F9] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.article>
    </Link>
  );
};

export default BlogCard;