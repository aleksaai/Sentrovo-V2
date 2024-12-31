import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogLayout from '../components/Blog/BlogPost/BlogLayout';
import { blogPosts } from '../types/BlogTypes';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogLayout post={post} />;
}

export default BlogPost;