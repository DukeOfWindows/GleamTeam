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

export default function ResidentialInteriorWindowCleaning() {
  const faqItems = [
  {
    question: "Do I need to move furniture or blinds?",
    answer: (
      <>
        We’ll work around most things, but it helps if you <strong>pull back curtains and move fragile items</strong> off windowsills. If something’s tricky, we’ll give you a hand.
      </>
    ),
  },
{
  question: "What products do you use inside?",
  answer: (
    <>
      For interior window cleaning, we use a classic <strong>squeegee-and-mop system</strong> with a generous squirt of <strong>Dawn® — a gentle, US-made dish soap</strong> that’s safe for kids, pets, and your glass. It’s super effective, and trusted by window pros worldwide.
    </>
  ),
},
  {
    question: "Will there be drips or mess inside?",
    answer: (
      <>
        We carry towels and drop cloths, and we’re pretty tidy operators. <strong>Your floors and furnishings are always protected</strong> — no soggy carpet, pinky promise.
      </>
    ),
  },
  {
    question: "Can you clean high interior windows?",
    answer: (
      <>
        <strong>Yes — we use extension poles and adjustable squeegees</strong> to reach clerestory or stairwell windows without damaging your walls or flooring.
      </>
    ),
  },
  {
    question: "Can you remove marks or stickers on interior glass?",
    answer: (
      <>
        We sure can. <strong>Just let us know ahead of time</strong> so we can bring the right tools for paint spots, decals, or sticky residue. Additional costs may apply. 
      </>
    ),
  },
  {
  question: "What are your payment terms?",
  answer: (
    <>
      The job is <strong>invoiced and payment is due upon completion</strong>. You can pay by <strong>bank transfer, EFTPOS, or cash</strong> — whichever works best for you.
    </>
  ),
}
];

  
  return (
    <>
<HelmetSEO
  pageTitle="Interior Window Cleaning | Gleam Team Window Cleaning"
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
          "We proudly service the Kapiti Coast and beyond, including Paraparaumu, Raumati, Waikanae, Ōtaki — and everywhere between Newlands and Levin.",
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
