import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import TestimonialSlider from '../components/TestimonialSlider';
import testimonials from '../data/testimonialsData';
import WhatWeClean from '../components/WhatWeClean';

import heroAbout from '../images/about-gleam-team-hero.webp';
import hoganImg from '../images/Tony-Wanakas-best-window-washer.webp';
import koaImg from '../images/Brenda-Wanakas-Second-best-window-cleaner.webp';
import MattImg from '../images/matt.webp';
import PaulaImg from '../images/paula.webp';
import heartIcon from '../images/icons/heart.png';
import historyIcon from '../images/icons/history.png';
import targetIcon from '../images/icons/target.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutUs() {
  return (
    <>
<Helmet>
  <title>About Gleam Team Window Cleaning | Wanaka Window Cleaning Team</title>
  <meta
    name="description"
    content="Meet the local experts behind Gleam Team Window Cleaning—Wanaka's trusted name in window cleaning. Our story, our team, our mission."
  />
  <link rel="canonical" href="https://gleamteam.co.nz/about" />

  <meta property="og:title" content="About Gleam Team Window Cleaning | Wanaka Window Cleaning Team" />
  <meta property="og:description" content="Meet the trusted local team behind Gleam Team Window Cleaning. Learn who we are and why we care about window cleaning in Wanaka." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://gleamteam.co.nz/about" />
  <meta property="og:image" content="https://gleamteam.co.nz/src/images/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Gleam Team Window Cleaning | Wanaka Window Cleaning Team" />
  <meta name="twitter:description" content="Learn more about Gleam Team Window Cleaning - Wanaka's friendly and professional window cleaning team." />
  <meta name="twitter:image" content="https://gleamteam.co.nz/src/images/logo.png" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gleam Team Window Cleaning",
      url: "https://gleamteam.co.nz/about",
      logo: "https://gleamteam.co.nz/src/images/logo.png",
      description: "Learn more about Gleam Team Window Cleaning—Wanaka's trusted team for professional window cleaning.",
      sameAs: [
        "https://www.facebook.com/339516226705753",
        "https://www.instagram.com/gleamteamwanaka"
      ]
    })}
  </script>
</Helmet>

      <Navbar />

<section
  className="relative h-[60vh] bg-cover bg-bottom flex items-center text-white"
  style={{ backgroundImage: `url(${heroAbout})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <motion.div
    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h1 className="text-5xl font-heading font-bold mb-4">
      Meet the Gleam Team
    </h1>
    <p className="text-xl font-body">
      Where integrity, community, and elbow grease meet
    </p>
  </motion.div>
</section>

<main className="bg-white text-duke-dark py-16 px-6 max-w-7xl mx-auto space-y-20">
        {/* Origin Story */}
        <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
          <h2 className="text-4xl font-cursive font-bold mb-4 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-2">
            Our Origin Story
          </h2>
          {/* TODO: rewritten from Tony's bio on gleamteam.co.nz/about — double-check wording/details with him */}
          <p className="text-lg font-body mb-4">
            Tony Lynch has been a professional window cleaner since 1980, starting out with a commercial window cleaning business in Wellington. At the turn of the millennium, Tony and his whānau moved to Wanaka, where they ran Missy's Kitchen restaurant for eight years. In 2018, Tony picked up the squeegee again and started Gleam Team Window Cleaning.
          </p>
          <p className="text-lg font-body">
            Since then, the team has grown — but the commitment to community and detail hasn't changed. We service all areas in Wanaka, Haweaa, Luggate & Cromwell.
          </p>
        </motion.section>

{/* Meet the Team */}
<section className="grid md:grid-cols-3 gap-10">
  {/* TODO: Matt and Paula are using a placeholder team.png image and filler blurb text —
      swap in real photos and bios when available. */}
  {[
    {
      name: 'Tony',
      title: 'Founder',
      img: hoganImg,
      alt: 'Tony Lynch, Founder of Gleam Team Window Cleaning',
      desc: `Tony has been a professional window cleaner since 1980, starting out in Wellington before moving to Wanaka. In 2018 he started Gleam Team Window Cleaning.`,
    },
    {
      name: 'Brenda',
      title: 'Team Member',
      img: koaImg,
      alt: 'Brenda from Gleam Team Window Cleaning',
      desc: `Brenda is part of the Gleam Team crew, helping keep Wanaka, Hawea, Luggate and Cromwell's windows sparkling.`,
    },
    {
      name: 'Matt',
      title: 'Team Member',
      img: MattImg,
      alt: 'Matt from Gleam Team Window Cleaning',
      desc: ` Matt is our team manager and loves getting up really early in the morning. As an ex Dunedin dweller he is happy working outside in all weather conditions and is a massive asset to the Gleam Team. Matt is a qualified builder and as such can offer really good advice on all aspects of building maintenance, window and frame cleaning and building washdowns.
`,
    },
    {
      name: 'Paula',
      title: 'Team Member',
      img: PaulaImg,
      alt: 'Paula from Gleam Team Window Cleaning',
      desc: `Paula is the latest team member to join the Gleam Team. She is tall, from Mexico and has a lot of energy. She is an experienced rope access window cleaner, loves rock climbing and is a keen snowboarder. We are very pleased to have her on the team.`,
    },
  ].map((member, i) => (
    <motion.div
      key={i}
      className="text-center px-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={member.img} alt={member.alt} loading="lazy" className="rounded-xl shadow-lg mb-4" />
      <h3 className="text-3xl font-heading">{member.name}</h3>
      <p className="text-2xl font-body mb-2 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-1">
        {member.title}
      </p>
      <p className="font-body whitespace-pre-line text-gray-800">{member.desc}</p>
    </motion.div>
  ))}
</section>
        </main>

        {/* Our Mission / Values */}
<section className="w-full bg-off-white grid md:grid-cols-3 gap-10 py-16 px-6">
  {[
    {
      icon: historyIcon,
      alt: 'Timeline showing growth',
      title: 'From One Ladder to Full Crews',
      text: 'What started as one-man-band work has become a full-service operation, now serving both homes and commercial clients across Wanaka, Hawea, Luggate, Tarras and Cromwell.',
    },
    {
      icon: targetIcon,
      alt: 'Target representing mission',
      title: 'Our Mission',
      text: 'We’re here to raise the standard of exterior cleaning by delivering outstanding service with local pride.',
    },
    {
      icon: heartIcon,
      alt: 'Heart icon representing values',
      title: 'Our Values',
      text: 'Friendly. Professional. Caring. We treat every property like it’s our own — because that’s how we’d want to be treated.',
    },
  ].map((item, i) => (
    <div key={i} className="flex flex-col items-center text-duke-dark text-center px-4 py-8 bg-white shadow-md rounded-xl transition-transform hover:scale-[1.02]">
     <img src={item.icon} alt={item.alt} loading="lazy" className="w-14 h-14 mb-4" />
<h4 className="text-xl font-bold mb-3 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-1">
  {item.title}
</h4>
<p className="font-body text-sm text-gray-800">{item.text}</p>
    </div>
  ))}
</section>

<div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
  <WhatWeClean />
  {/* TODO: <OurPartners /> was here — disabled, see note in App.jsx */}
  <TestimonialSlider testimonials={testimonials} />
  <div className="text-center">
    <CTAButton href="/#quote">Request a Quote</CTAButton>
  </div>
</div>

      <Footer />
    </>
  );
}
