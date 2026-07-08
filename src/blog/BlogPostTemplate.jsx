import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = ({ title, description, date, image, content, slug }) => {
  const canonicalUrl = `https://www.gleamteam.co.nz/blog/${slug}`;

  return (
    <>
      <Helmet>
        <title>{title} | Gleam Team Window Cleaning</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | Gleam Team Window Cleaning`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Gleam Team Window Cleaning`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>
        {image && <img src={image} alt={title} className="mb-6 rounded-xl" loading="lazy" />}
        <article className="prose lg:prose-xl max-w-none">{content}</article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
