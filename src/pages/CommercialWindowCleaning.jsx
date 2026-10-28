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

import { commercialWindowFaqs as faqItems } from '../data/windowFaqs';
export default function CommercialWindowCleaning() {

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
