import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from './blogPosts';

const BlogHome = () => {
  return (
    <>
      <Helmet>
        <title>Gleam Team Window Cleaning | Wanaka Window Cleaning Experts</title>
        <meta
          name="description"
          content="Friendly, reliable, and professional window cleaning across Wanaka, Hawea, Luggate, Tarras and Cromwell. Gleam Team offers residential and commercial window cleaning, pure water cleaning, and more."
        />
        <link rel="canonical" href="https://gleamteam.co.nz/blog" />

        <meta property="og:title" content="Gleam Team Window Cleaning | Wanaka Window Cleaning Experts" />
        <meta property="og:description" content="Window cleaning for homes and businesses across Wanaka, Hawea, Luggate, Tarras and Cromwell — by friendly, reliable professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gleamteam.co.nz/blog" />
        <meta property="og:image" content="https://gleamteam.co.nz/src/images/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gleam Team Window Cleaning | Wanaka Window Cleaning Experts" />
        <meta name="twitter:description" content="Window cleaning services for homes and businesses throughout Wanaka, Hawea, Luggate, Tarras and Cromwell." />
        <meta name="twitter:image" content="https://gleamteam.co.nz/src/images/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://gleamteam.co.nz",
            name: "Gleam Team Window Cleaning",
            image: "https://gleamteam.co.nz/src/images/logo.png",
            url: "https://gleamteam.co.nz",
            telephone: "+64 22 436 7611",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Wanaka",
              postalCode: "9305",
              addressRegion: "Otago",
              addressCountry: "NZ"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -44.7032,
              longitude: 169.1321
            },
            description:
              "Gleam Team Window Cleaning offers professional window cleaning in Wanaka, including residential and commercial window cleaning, pure water cleaning, builders cleans and building wash-downs.",
            areaServed: {
              "@type": "Place",
              name: "Wanaka, Albert Town, Lake Hawea, Luggate, Tarras, Cromwell, and the Upper Clutha"
            },
            openingHours: [
              "Mo-Fr 09:00-17:00"
            ],
            sameAs: [
              "https://www.facebook.com/339516226705753",
              "https://www.instagram.com/gleamteamwanaka"
            ]
          })}
        </script>
      </Helmet>

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Property Care Tips & Advice</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Expert insights and seasonal tips to help you keep your property looking great — all year round.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map(post => (
            <div key={post.slug} className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </Link>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogHome;
