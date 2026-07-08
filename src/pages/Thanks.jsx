import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/logo.png';

export default function Thanks() {
  return (
    <>
      <Helmet>
        <title>Thank You | Gleam Team Window Cleaning</title>
        <meta
          name="description"
          content="Thanks for getting in touch with Gleam Team Window Cleaning. We'll respond shortly and look forward to helping you!"
        />
      </Helmet>

      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#f7f8f6]">
        <h1 className="text-4xl font-heading font-bold text-duke-dark mb-4">Thanks for Reaching Out!</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          We’ve received your message and will be in touch shortly. We look forward to helping you get your property sparkling.
        </p>
        <img src={logo} alt="Duke Property Services logo" className="w-40 mt-10" />
      </main>
      <Footer />
    </>
  );
}
