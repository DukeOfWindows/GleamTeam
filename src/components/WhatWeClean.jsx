// src/components/WhatWeClean.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import windowIcon from '../images/icons/window.png';
import gutterIcon from '../images/icons/gutter.png';
import houseIcon from '../images/icons/house.png';
import roofIcon from '../images/icons/roof.png';
import pressureIcon from '../images/icons/pressure.png';
import comwindowIcon from '../images/icons/window-dark.png';
import comgutterIcon from '../images/icons/gutter-dark.png';
import buildingIcon from '../images/icons/building-dark.png';
import compressureIcon from '../images/icons/pressure-dark.png';
import logo from '../images/logo.png';
import housePhoto from '../images/residential-house-washed-clean-result.webp';

export default function WhatWeClean() {
  const [tab, setTab] = useState('residential');

  const services = {
    residential: [
      {
        label: 'Window Cleaning',
        icon: windowIcon,
        description: "Deal to that Kapiti Coast sea spray. Guaranteed to make your neighbours jealous",
        link: '/residential-window-cleaning',
      },
            {
        label: 'House Washing',
        icon: houseIcon,
        description: "Say goodby to grime and hello to shine. Revitalize your home's exterior with well earned glow-up",
        link: '/residential-house-washing',
      },
      {
        label: 'Gutter Cleaning',
        icon: gutterIcon,
        description: "Do your gutters look more like a garden? Let's get them operating as intended",
        link: '/residential-gutter-cleaning',
      },
      {
        label: 'Roof Treatment',
        icon: roofIcon,
        description: "Utilizing a biodegradable solution that effectively eliminates moss, lichen, and algae without the need for pressure washing. ",
        link: '/residential-roof-treatment',
      },
    ],
    commercial: [
      {
        label: 'Building Washing',
        icon: buildingIcon,
        description: "Keep your building looking its best. Professional washing services for commercial and industrial properties.",
        link: '/commercial-building-washing',
      },
      {
        label: 'Window Cleaning',
        icon: comwindowIcon,
        description: "Boost your business's curb appeal with spotless, professional window cleaning tailored to your needs",
        link: '/commercial-window-cleaning',
      },
            {
        label: 'Gutter Cleaning',
        icon: comgutterIcon,
        description: "Even your gutters deserve to be high-functioning professionals.",
        link: '/commercial-gutter-cleaning',
      },
            {
        label: 'Pressure Washing',
        icon: compressureIcon,
        description: "Powerful water blasting for driveways, decks, and hard surfaces. Tough on grime, gentle on surfaces",
        link: '/commercial-pressure-washing',
      },
    ],
  };

return (
  <section className="bg-white py-20">

    {/* Content grid */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4">
      {/* Left: Services List */}
      <div>
<motion.h2
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ amount: 0.3 }}
  className="text-4xl font-cursive text-duke-dark font-bold mb-4 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2"
>
  What We Do
</motion.h2>
        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            className={`px-4 py-2 font-body rounded ${
              tab === 'residential'
                ? 'bg-duke-blue font-bold text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setTab('residential')}
          >
            Residential
          </button>
          <button
            className={`px-4 py-2 font-body rounded ${
              tab === 'commercial'
                ? 'bg-duke-dark font-bold text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setTab('commercial')}
          >
            Commercial
          </button>
        </div>

        {/* Service Cards */}
<motion.div
  key={tab} // triggers animation only when tab changes
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  className="space-y-4"
>
  {services[tab].map((item, i) => (
<Link
  to={item.link}
  key={i}
  className="flex items-start space-x-4 p-4 rounded-xl shadow-md bg-off-white hover:bg-white hover:border hover:border-duke-brown transition no-underline"
>
  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
    <img src={item.icon} alt={`${item.label} icon`} className="w-18 h-18" />
  </div>
  <div>
    <h3
      className={`font-bold text-lg ${
        tab === 'residential' ? 'text-duke-blue' : 'text-duke-dark'
      }`}
    >
      {item.label}
    </h3>
    <p className="text-sm text-gray-600">{item.description}</p>
    <span
      className={`text-sm font-semibold block mt-1 ${
        tab === 'residential' ? 'text-duke-blue' : 'text-duke-dark'
      }`}
    >
      More {item.label} →
    </span>
  </div>
</Link>
  ))}
</motion.div>


        {/* All Services Link */}
<p
  className={`block mt-6 text-base font-bold ${
    tab === 'residential' ? 'text-duke-blue' : 'text-duke-dark'
  }`}
>
  And More...
</p>
      </div>

      {/* Right: Image (if you still have one) */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ amount: 0.4 }}
  className="hidden md:block"
>
<img
  src={housePhoto}
  alt="Kapiti house exterior after washing"
  className="w-full h-full object-cover rounded-lg shadow-lg"
  loading="lazy"
/>
</motion.div>

    </div>
  </section>
);}
