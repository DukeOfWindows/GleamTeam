import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroComWindow from '../images/commercial-window-cleaning-signage-safe.webp';
import comwindowImg from '../images/commercial-window-dirt-example.webp';
import squeegeeImg from '../images/tools/commercial-squeegee-tool-window.webp';
import poleImg from '../images/tools/waterfed-pole-commercial-window.webp';
import purewaterImg from '../images/tools/pure-water-system-window-cleaning.webp';
import windowIcon from '../images/icons/window-dark.png';
import sunIcon from '../images/icons/sun-dark.png';
import houseIcon from '../images/icons/building-dark.png';

export default function CommercialWindowCleaning() {
  const faqItems = [
  {
    question: "What types of commercial buildings do you service?",
    answer: (
      <>
        We clean <strong>offices, retail storefronts, apartment complexes, schools, medical centres, warehouses — you name it</strong>. If it’s got glass, we’ve got a system for it.
      </>
    ),
  },
  {
    question: "Do you offer regular scheduled cleaning?",
    answer: (
      <>
        Definitely. We offer <strong>weekly, fortnightly, monthly, or custom maintenance plans</strong> so your building always looks its best. Set and forget — we’ll take care of the rest.
      </>
    ),
  },
  {
    question: "Can you clean multi-storey buildings?",
    answer: (
      <>
        <strong>Yes — we use water-fed pole systems for up to 3 storeys</strong>. For taller buildings, we’ll assess whether elevated work platforms or abseiling is appropriate.
      </>
    ),
  },
  {
    question: "Do we need to be on-site during the clean?",
    answer: (
      <>
        <strong>No — we’re happy to clean early morning, after hours, or during off-peak times</strong>. Just give us access and we’ll work around your schedule and foot traffic.
      </>
    ),
  },
  {
    question: "Are you insured and health & safety compliant?",
    answer: (
      <>
        Absolutely. We’re <strong>fully insured and Site Safe aware</strong>. Safety is baked into everything we do — especially when we’re working at height or around the public.
      </>
    ),
  },
  {
  question: "What are your payment terms?",
  answer: (
    <>
      <strong>Payment is due upon completion</strong> unless other arrangements have been made in advance. We offer flexible payment options for commercial clients where needed.
    </>
  ),
}
];

  return (
    <>
<HelmetSEO
  pageTitle="Commercial Window Cleaning Wanaka | Gleam Team"
  metaDescription="Professional window cleaning for shopfronts, offices, schools, and multi-storey buildings across the Upper Clutha. Reliable, insured, and safety-compliant."
  canonicalUrl="https://gleamteam.co.nz/commercial-window-cleaning"
  image="https://gleamteam.co.nz/images/hero-commercial-window.jpg"
  breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Commercial Window Cleaning",
    url: "https://gleamteam.co.nz/commercial-window-cleaning"
  }
]}

/>

    <CommercialTemplate
      hero={{
        image: heroComWindow,
        eyebrow: "Commercial",
        title: "Window Cleaning",
        description: "Keep your business looking sharp with spotless, high-reach commercial window cleaning — tailored for coffee shacks, complexes, and everything in between."
      }}

      info={{
        image: comwindowImg,
        heading: "Commercial Window Cleaning",
        paragraphs: [
          "First impressions matter. Clean windows speak volumes about your business — and we’re here to make sure they shine.",
          "From local storefronts to multi-storey office buildings, our commercial window cleaning service uses advanced tools and techniques for sparkling results without the fuss.",
          "Our trained team works efficiently, safely, and discreetly — so you can get on with business while we handle the shine.",
          "We make regular visits to businesses in Wanaka, Lake Hawea, Cromwell, and everywhere in between.",
        ],
        listItems: [
          "Pure water-fed pole system for up to 3 storeys",
          "Spot-free finish using deionised water",
          "Traditional internal window cleaning available",
          "Flexible scheduling to minimise disruption",
          "Full safety compliant for elevated work",
        ]
      }}

      benefits={{
        heading: "Why Clean Windows Matter for Business",
        items: [
          { icon: windowIcon, text: "Crystal-clear glass projects professionalism and pride" },
          { icon: sunIcon, text: "More natural light improves staff wellbeing and energy" },
          { icon: houseIcon, text: "Boosts street appeal and visibility for customers" },
        ]
      }}

      tools={{
        title: 'Our Commercial-Grade Toolkit',
        subtitle: "Built for Efficiency, Reach, and Results",
        description: "Servicing commercial clients from Wanaka to Cromwell — including Lake Hawea, Luggate, Tarras, and more.",
        items: [
          {
            image: poleImg,
            title: 'Telescopic Water-Fed Poles',
            description: 'Easily reach upper-storey windows with our carbon-fibre pole system. No ladders, no scaffolding, no downtime.',
          },
          {
            image: purewaterImg,
            title: 'Pure Water System',
            description: 'Removes minerals and impurities for a streak-free dry. Ideal for external glass on commercial properties.',
          },
          {
            image: squeegeeImg,
            title: 'Traditional Internal Equipment',
            description: 'For interior jobs, our team uses pro-grade squeegees and detailing gear to make sure every pane is flawless.',
          },
        ]
      }}

      testimonialTag={['window', 'general']}
      faqItems={faqItems}
    />
    </>
  );
}
