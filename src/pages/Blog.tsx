import React from 'react';
import Navigation from '../components/Navigation';
import GridBackground from '../components/GridBackground';
import BlogHeader from '../components/Blog/BlogHeader';
import BlogGrid from '../components/Blog/BlogGrid';
import FooterSection from '../components/Footer/FooterSection';
import { useScrollToTop } from '../utils/scrollUtils';

const Blog = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white font-sans antialiased">
      <GridBackground />
      <Navigation />
      <BlogHeader />
      <BlogGrid />
      <FooterSection />
    </div>
  );
};

export default Blog;