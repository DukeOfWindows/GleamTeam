import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './blogPosts';

const BlogPostWrapper = () => {
  const { slug } = useParams();
  const match = blogPosts.find(post => post.slug === slug);

  if (!match) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">404 — Post Not Found</h1>
        <p>We couldn't find the blog post you're looking for.</p>
      </div>
    );
  }

  const PostComponent = match.component;
  return <PostComponent />;
};

export default BlogPostWrapper;
