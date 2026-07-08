import React from 'react';
import { motion } from 'framer-motion';
import teamPhoto from '../images/Tony-Wanakas-best-window-washer.webp';
import iconKapiti from '../images/icons/kapiti-dark.png';
import iconGear from '../images/icons/gear-dark.png';
import iconTeam from '../images/icons/trained-dark.png';
import iconEstimate from '../images/icons/arrange-dark.png';
import iconSafety from '../images/icons/safety-dark.png';
import iconService from '../images/icons/results-dark.png';

export default function WhyUs() {
  const features = [
    {
      icon: iconKapiti,
      alt: 'Kapiti icon',
      title: 'Locally owned & operated',
      description: 'Wanaka-based and proudly servicing from HERE to THERE.',
    },
    {
      icon: iconGear,
      alt: 'Gear icon',
      title: 'Industry-leading techniques and equipment',
      description: 'Using the best cleaning tech and tools for spotless results.',
    },
    {
      icon: iconTeam,
      alt: 'Team icon',
      title: 'Fully trained team',
      description: 'Our Wanaka crew is fully trained and friendly as.',
    },
    {
      icon: iconEstimate,
      alt: 'Quote icon',
      title: 'Free quotes',
      description: 'No-pressure quotes to help you make the right decision.',
    },
    {
      icon: iconSafety,
      alt: 'Safety icon',
      title: 'Strict safety protocols and fully insured',
      description: 'We follow rigorous safety standards—peace of mind guaranteed.',
    },
    {
      icon: iconService,
      alt: 'Service icon',
      title: 'Comprehensive service',
      description: 'From first call to final sparkle—residential or commercial.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-stretch">
        {/* Left: Animated Image */}
        <motion.div
          className="flex justify-center items-center h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <img
            src={teamPhoto}
            alt="Our local Wanaka-based Gleam Team"
            className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-4xl font-cursive font-bold text-duke-dark mb-8 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2">
            Why Choose the Gleam Team?
          </h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                viewport={{ amount: 0.3 }}
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-12 h-12 mt-1"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-duke-dark">{item.title}</h4>
                  <p className="text-gray-700 font-body text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
