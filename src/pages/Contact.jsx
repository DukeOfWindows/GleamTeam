import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import contactHero from '../images/contacthero-image.webp'; // swap with your hero image
import contactPhoto from '../images/tools/commercial-pressure-gun-closeup.webp';   // swap with your portrait
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mapImage from '../images/service-area-map-upper-clutha.webp';
import OurPartners from '../components/OurPartners';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Gleam Team Window Cleaning | Wanaka Window Cleaners</title>
        <meta
          name="description"
          content="Get in touch with Gleam Team Window Cleaning. We're here to help with window cleaning, pure water cleaning, and more across Wanaka, Hawea, Luggate and Tarras."
        />
      </Helmet>
<Navbar />
      {/* Hero Section */}
<section
  className="w-full h-[600px] bg-cover bg-center md:bg-fixed flex items-center justify-center text-white text-center"
  style={{ backgroundImage: `url(${contactHero})` }}
>
</section>

      {/* Contact Info + Image */}
<motion.section
  className="w-full bg-white py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
    <img
      src={contactPhoto}
      alt="Tony from Gleam Team Window Cleaning"
      className="w-64 h-64 object-cover rounded-xl shadow-lg"
    />
<div className="w-full md:flex-1 md:pr-6 text-duke-dark font-body space-y-4">
  <h2 className="text-3xl md:text-4xl font-cursive font-bold text-duke-dark mb-8 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2">
    Let&apos;s Chat
  </h2>
      <p className="text-lg">
        Whether you’ve got a quick question or want to request a quote, we’d love to hear from you.
      </p>
      <div>
        <p className="font-semibold">Phone:</p>
        <a href="tel:+64224367611" className="text-duke-blue hover:underline">
          022 436 7611
        </a>
      </div>
      <div>
        <p className="font-semibold">Email:</p>
        <a href="mailto:info@gleamteam.co.nz" className="text-duke-blue hover:underline">
          info@gleamteam.co.nz
    </a>
            </div>
          </div>
        </div>
</motion.section>

<motion.section
  className="w-full bg-off-white py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-6xl mx-auto px-6">
    <ContactForm />
  </div>
</motion.section>

<motion.section
  id="service-area"
  className="w-full py-12 bg-white"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">
    {/* Map Image */}
    <div className="md:w-2/3">
      <img
        src={mapImage}
        alt="Gleam Team Window Cleaning service area coverage map"
        className="w-full h-auto rounded-xl shadow-md"
      />
      {/* TODO: mapImage above is still Duke's Kapiti Coast map graphic — swap for a Wanaka/Upper Clutha map when photos are updated.
          TODO: the interactive map link below was Duke's custom Google My Maps — create a new one for Gleam Team's service area, or link to Google Maps directly. */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Wanaka+Hawea+Luggate+Tarras+New+Zealand"
        target="_blank"
        rel="noopener noreferrer"
        className="text-duke-blue underline block mt-4 text-center"
      >
        View interactive map
      </a>
    </div>

    {/* Service Area Text */}
    <div className="md:w-1/3 text-duke-dark font-body">
      <h2 className="text-3xl font-cursive font-bold mb-6 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2">
        Where We Work
      </h2>
      <p className="text-base leading-relaxed">
        We proudly service the Upper Clutha, including:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li>Wanaka</li>
        <li>Cardrona</li>
        <li>Lake Hawea</li>
        <li>Hawea Flat</li>
        <li>Luggate</li>
        <li>Tarras</li>
        <li>Cromwell</li>
      </ul>
    </div>
  </div>
</motion.section>

      {/* ⬇ Add CTA, Testimonials, Map, etc. below here ⬇ */}

      {/* TODO: <OurPartners /> disabled — see note in App.jsx, same issue */}
              <Footer />
    </>
  );
}
