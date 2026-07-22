import React from 'react';
import { motion } from 'framer-motion';
import CTAButtonCommercial from './CTAButtonCommercial';

export default function HeroCommercial({
  backgroundImage,
  eyebrow,
  title,
  description,
  pageTitle = "Commercial Window Cleaning | Gleam Team Window Cleaning",
  metaDescription = "Professional commercial window cleaning across Wanaka, Hawea, Luggate, Tarras and Cromwell.",
  children,
}) {
  return (
    <>
      <section
        className="relative h-[60vh] md:h-[70vh] bg-top md:bg-center bg-no-repeat bg-cover md:bg-fixed flex items-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col h-full">
          <div className="flex-1 flex items-center justify-end text-right">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-duke-dark font-cursive text-2xl mb-1 relative inline-block after:content-[''] after:absolute after:top-1/2 after:right-full after:mr-2 after:w-10 after:h-[2px] after:bg-duke-brown after:transform after:-translate-y-1/2">
                {eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{title}</h1>
              <p className="text-lg font-body mb-6">{description}</p>
              <div className="flex justify-end">
                <CTAButtonCommercial />
              </div>
            </motion.div>
          </div>

          {/* Optional white content box */}
          {children}
        </div>
      </section>
    </>
  );
}
