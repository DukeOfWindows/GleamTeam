// src/pages/Quote.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Quote() {
  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Gleam Team Window Cleaning Wanaka</title>
        <meta
          name="description"
          content="Request a free quote for window cleaning from Gleam Team Window Cleaning. Proudly serving Wanaka, Hawea, Luggate, Tarras and Cromwell."
        />
      </Helmet>

      <Navbar />
      <main className="py-16 px-6 bg-off-white min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ContactForm />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
