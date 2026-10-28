import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
import heroInterior from '../images/interior-window-cleaning-service.webp';
import tallInterior from '../images/interior-glass-clean-example.webp';
import clothImg from '../images/tools/microfibre-cloth-detailing.webp';
import SqueegeeImg from '../images/tools/residential-squeegee-tool.webp';
import PoleImg from '../images/tools/reach-pole-glass-cleaning.webp';
import sparkleIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import airIcon from '../images/icons/cleanAir.png';

import { interiorWindowFaqs as faqItems } from '../data/windowFaqs';
export default function ResidentialInteriorWindowCleaning() {

  
  return (
    <>
<HelmetSEO
  pageTitle="Interior Window Cleaning Wanaka | Gleam Team"
  metaDescription="Crystal-clear interior windows, mirrors, and glass surfaces cleaned with care and respect for your home. Trusted by homeowners across Wanaka."
  canonicalUrl="https://gleamteam.co.nz/residential-interior-window-cleaning"
  image="https://gleamteam.co.nz/images/hero-interior.jpg"
breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Interior Window Cleaning",
    url: "https://gleamteam.co.nz/residential-interior-window-cleaning"
  }
]}

/>

    <ResidentialTemplate
      hero={{
        image: heroInterior,
        eyebrow: "Residential",
        title: "Interior Window Cleaning",
        description: "Let the sunshine in. We make your indoor glass sparkle — streak-free and spotless.",
      }}

      info={{
        image: tallInterior,
        heading: "Interior Window Cleaning",
        paragraphs: [
          "Fingerprints, smudges, and dust don’t stand a chance. We clean every inch of your interior glass — carefully and efficiently.",
          "Our interior window cleaning is done with precision tools and lint-free cloths to ensure a crystal-clear, streak-free finish.",
          "We’re respectful of your space, working cleanly around furniture, curtains, and delicate surfaces.",
          "Your view deserves to look good from both sides — not just the outside.",
          "We proudly service the Upper Clutha area, including Wanaka, Cardrona, Lake Hawea, Hawea Flat, Luggate, Tarras and Cromwell.",
        ],
        listItems: [
          "Interior window panes cleaned by hand",
          "Track and sill detailing",
          "Mirror and glass door polishing",
          "High and hard-to-reach windows",
          "No drips, streaks, or residue left behind",
        ],
      }}
      benefits={{
        heading: "What Interior Window Cleaning Fixes",
        items: [
          {
            icon: sparkleIcon,
            text: "Removes smudges, fingerprints, and grime from everyday life — especially in busy family homes",
          },
          {
            icon: sunIcon,
            text: "Lets natural light pour in with streak-free glass and crystal-clear interior windows",
          },
          {
            icon: airIcon,
            text: "Improves air quality by removing dust and allergens from window panes and sills",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Streak-Free Inside, No Drips or Drama",
        description: "Interior glass deserves a gentle touch. Our tools are designed to leave your windows spotless without making a mess of your home.",
        items: [
          {
            image: SqueegeeImg,
            alt: "Precision squeegee for streak-free glass",
            title: "Precision Squeegees",
            description: "Professional-grade squeegees with replaceable rubber for streak-free finishes on every swipe.",
          },
          {
            image: clothImg,
            alt: "Lint-free window cleaning cloths",
            title: "Specialty Linen Detailing Cloths",
            description: "Perfect for frames, edges, and final touch-ups — leaves no lint, just shine.",
          },
          {
            image: PoleImg,
            alt: "Extension pole for indoor window access",
            title: "Compact Extension Poles",
            description: "Our lightweight, indoor-friendly poles reach high windows and skylights without leaning ladders on your walls or squeezing into tight corners.",
          },
        ],
      }}
      testimonialTag={['window', 'general']}
      faqItems={faqItems}
    />
    </>
  );
}
