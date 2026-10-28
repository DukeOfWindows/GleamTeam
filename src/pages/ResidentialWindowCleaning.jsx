import React from 'react';
import { Link } from 'react-router-dom';
import ResidentialTemplate from './ResidentialTemplate';
import HelmetSEO from '../components/HelmetSEO';
import heroWindow from '../images/window-cleaning-wanaka-professionals.webp'; 
import tallWindow from '../images/window-cleaning-before-after-wanaka.webp'; 
import poleImg from '../images/tools/window-cleaning-waterfed-pole.webp';
import squeegeeImg from '../images/tools/window-edge-squeegee-clean.webp';
import purewaterImg from '../images/tools/resin-filter-pure-water-setup.webp';
import windowIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import houseIcon from '../images/icons/house.png';

import { residentialWindowFaqs as faqItems } from '../data/windowFaqs';
export default function ResidentialWindowCleaning() {

  return (
    <>
<HelmetSEO
  pageTitle="Window Cleaning Wanaka | Residential | Gleam Team"
  metaDescription="Streak-free window cleaning for homes across Wanaka, Lake Hawea, Luggate, Cromwell and nearby. Trusted professionals who care about detail and safety."
  canonicalUrl="https://gleamteam.co.nz/residential-window-cleaning"
  image="https://gleamteam.co.nz/images/hero-window.jpg"
  breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Residential Window Cleaning",
    url: "https://gleamteam.co.nz/residential-window-cleaning"
  }
]}
/>


      <ResidentialTemplate
        hero={{
          image: heroWindow,
          eyebrow: "Residential",
          title: "Window Cleaning",
          description: "Transform your windows from shabby to shiny with our interior and exterior window cleaning service."
        }}

        info={{
          image: tallWindow,
          heading: "Residential Window Cleaning",
          paragraphs: [
            "Part art, part science – getting a streak-free shine on your home's windows takes know-how, the right tools, and maybe even a ladder.",
            "The difference between amazing results and unmitigated disasters comes down to a lot of experience and a little elbow grease. The team at Gleam Team are armed with both.",
            "Their top-of-the-line tools and proprietary cleaning products, coupled with their knowledge in how to use them, help deliver spotless, streak-free results.",
            "Choosing Gleam Team, our Wanaka-based window cleaning crew, means opting for high-quality, long-lasting results.",
          ],
          listItems: [
            "External window washing with pure-water technology",
            "Internal window washing with traditional squeegee and mop system",
            "Cobweb removal from window frames",
            "Deck glass and balustrade washing",
            "Skylights and clerestory windows",
            "Track and sill cleaning",
            "Removal of stickers, paint & debris",
          ]
        }}

        benefits={{
          heading: "What Clean Windows Fix",
          items: [
            { icon: windowIcon, text: "Long-term protection against water stains, etching, and scratches" },
            { icon: sunIcon, text: "Lets more natural light into your home" },
            { icon: houseIcon, text: "Better-looking windows and increased street appeal" },
          ]
        }}

        tools={{
          title: "Our Toolkit",
          subtitle: "Tools of the Trade — Not Your Neighbour’s Hose",
          description:
            "We provide window cleaning services across the Upper Clutha — including Wanaka, Cardrona, Lake Hawea, Hawea Flat, Luggate, Tarras, and Cromwell.",
          items: [
            {
              image: poleImg,
              alt: "Carbon fibre water-fed pole for exterior window washing",
              title: 'High-end Water Fed Poles',
              description: 'From tight garden accessways to three-storey homes, we’ve got a pole for every job. Our tallest carbon-fibre pole extends over 7 metres, letting us clean third-storey windows safely from the ground — no ladders or scaffolding needed.',
            },
            {
              image: squeegeeImg,
              alt: "Professional window squeegee and scrubber",
              title: 'Professional Squeegees & Scrubbers',
              description: 'On our belts: a full toolkit of commercial-grade squeegees, scrubbers, and detailing gear. In our hands: lightning-fast technique. We combine precision, speed, and elbow grease to leave every window crystal clear, inside and out.',
            },
            {
              image: purewaterImg,
              alt: "Pure water cleaning system equipment",
              title: 'Pure Water Cleaning System',
              description: 'Our deionised water system filters out all minerals and impurities — down to the microscopic level. The result? Spotless, streak-free windows that dry naturally without a single mark. No soaps, no chemicals — just science.',
            },
          ],
        }}

        testimonialTag={['window']}
        faqItems={faqItems} 
     />
    </>
  );
}
