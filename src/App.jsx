import React from 'react';
import { Helmet } from 'react-helmet';
import allTestimonials from './data/testimonialsData';
import getTestimonialsByService from './utils/getTestimonialsByService';
import TestimonialSlider from './components/TestimonialSlider';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import WhyUs from './components/WhyUs';
import heroImage from './images/hero-image.webp'; 
import Footer from './components/Footer';
import WhatWeClean from './components/WhatWeClean';
import CTAButton from './components/CTAButton';
import OurPartners from './components/OurPartners'; // adjust path if needed


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const testimonials = shuffleArray(allTestimonials);

  return (
    <>
      <Helmet>
        <title>Window Cleaning Wanaka | Gleam Team Window Cleaning</title>
        <meta
          name="description"
          content="Friendly, reliable, and professional window cleaning across Wanaka, Hawea, Luggate, Tarras and Cromwell. Gleam Team offers residential and commercial window cleaning, pure water cleaning, and more."
        />
          {/* TODO: confirm final domain — assumed gleamteam.co.nz (their existing domain) */}
          <link rel="canonical" href="https://gleamteam.co.nz" />

        <meta property="og:title" content="Gleam Team Window Cleaning | Wanaka Window Cleaning Experts" />
        <meta property="og:description" content="Window cleaning for homes and businesses across Wanaka, Hawea, Luggate, Tarras and Cromwell — by friendly, reliable professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gleamteam.co.nz" />
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
    // TODO: no public street address found — mobile service, no storefront. Confirm with Tony.
    address: {
  "@type": "PostalAddress",
  "addressLocality": "Wanaka",
  "postalCode": "9305",
  "addressRegion": "Otago",
  "addressCountry": "NZ"
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
      <main>
<section
  className="relative text-white flex items-center justify-center bg-no-repeat bg-cover bg-center min-h-[500px] md:min-h-[90vh]"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
  aria-label="Hero banner showing clean exterior surface"
>
  <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true" />

  <div className="relative z-10 text-center px-6 py-20 sm:py-24">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
      Exterior Cleaning Done Right
    </h1>
    <p className="text-base sm:text-lg md:text-xl font-body mb-8 max-w-2xl mx-auto">
      Friendly, reliable, and professional property services for homes and businesses.
    </p>
    <CTAButton />
  </div>
</section>
       <WhatWeClean />
        <WhyUs />
        <HowItWorks />
        <section id="testimonials" className="scroll-mt-24 ...">
        <TestimonialSlider testimonials={testimonials} />
        </section>
        {/* TODO: <OurPartners /> disabled — it listed Hogan's own Kapiti Coast/Hamilton business
            contacts (including, confusingly, Gleam Team itself as one of "Duke's" partners).
            Doesn't belong on Gleam Team's own site. Re-enable with Tony's real local partners
            if he wants a partners section, or delete the component/import if not needed. */}

        <Footer />
      </main>
    </>
  );
}

export default App;
