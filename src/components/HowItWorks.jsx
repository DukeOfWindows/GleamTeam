import React from 'react';
import { motion } from 'framer-motion';
import iconEstimate from '../images/icons/arrange.png';
import iconBook from '../images/icons/book.png';
import iconThumbsUp from '../images/icons/results.png';
import CTAButton from './CTAButton';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-off-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-cursive font-bold text-duke-dark inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2">
          How We Work
        </h2>
      </div>

      {/* Steps */}
      <motion.div
        className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <img src={iconEstimate} alt="Get a quote icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-duke-dark mb-1">1. Get a Free Quote</h3>
          <p className="text-gray-700 font-body">
            Tell us what you need and we’ll provide a no-obligation quote—fast and free across the Kapiti Coast.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img src={iconBook} alt="Book a service icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-duke-dark mb-1">2. Book Your Service</h3>
          <p className="text-gray-700 font-body">
            Choose a time that suits you. We show up on time—Paraparaumu to Waikanae and beyond.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <img src={iconThumbsUp} alt="Enjoy the results icon" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-duke-dark mb-1">3. Enjoy the Results</h3>
          <p className="text-gray-700 font-body">
            Sit back and admire the shine. We leave your place cleaner than we found it—guaranteed.
          </p>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <CTAButton />
      </div>
    </section>
  );
}
