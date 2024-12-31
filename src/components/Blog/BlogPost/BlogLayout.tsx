import React from 'react';
import Navigation from '../../Navigation';
import GridBackground from '../../GridBackground';
import FooterSection from '../../Footer/FooterSection';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import { BlogPost } from '../../../types/BlogTypes';

interface BlogLayoutProps {
  post: BlogPost;
}

const BlogLayout = ({ post }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <div className="pt-44 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[#4500F9]/20 via-[#4500F9]/10 to-transparent blur-xl" />
            
            {/* Content */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
              <BlogHeader />
              <BlogContent title={post.title} content={post.content} />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default BlogLayout;