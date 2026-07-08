import React from 'react';
import { Link } from 'react-router-dom';
import ResidentialTemplate from './ResidentialTemplate';
import HelmetSEO from '../components/HelmetSEO';

import pressureHero from '../images/pressure-washing-concrete-driveway.webp';
import tallPressure from '../images/high-pressure-wash-example-driveway.webp';
import pressureGunImg from '../images/tools/commercial-pressure-gun-closeup.webp';
import surfaceCleanerImg from '../images/tools/multi-surface-pressure-cleaning.webp';
import fanImg from '../images/tools/fan-nozzle-softwash-sprayer.webp';
import grimeIcon from '../images/icons/pressure.png';
import slipIcon from '../images/icons/slip.png';
import patioIcon from '../images/icons/house.png';

export default function ResidentialPressureWashing() {
  const faqItems = [
  {
    question: "What surfaces can you pressure wash?",
    answer: (
      <>
        We commonly pressure wash <strong>driveways, concrete paths, patios, fences, and retaining walls</strong>. If it’s grubby and hard, we can probably blast it clean!
      </>
    ),
  },
  {
    question: "Will it damage my concrete or pavers?",
    answer: (
      <>
        Not with us. We use the right PSI and <strong>surface-specific nozzles</strong> to avoid etching or scarring. Old or soft concrete? We'll assess first and adjust our method if needed.
      </>
    ),
  },
  {
    question: "What about oil stains or rust marks?",
    answer: (
      <>
        Pressure washing helps, but for heavy stains we often <strong>pre-treat with specialised products</strong>. We’ll let you know what to expect after a quick look.
      </>
    ),
  },
  {
    question: "Do you bring your own water?",
    answer: (
      <>
        We usually <strong>hook up to your outdoor tap</strong> — but we can discuss water cartage if needed. Our equipment is high-efficiency so we don’t use more than necessary.
      </>
    ),
  },
  {
    question: "Will it make a mess?",
    answer: (
      <>
        Some splashback is normal, but we always do a tidy-up after. We’ll <strong>rinse surrounding areas and paths</strong> so it looks better than when we arrived.
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
  pageTitle="Residential Pressure Washing | Gleam Team Window Cleaning"
  metaDescription="Professional pressure washing for driveways, paths, and patios. Trusted by homeowners across Wanaka, Hawea, Luggate and Tarras."
  canonicalUrl="https://gleamteam.co.nz/residential-pressure-washing"
  image="https://gleamteam.co.nz/images/hero-pressure.jpg"
breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Residential Pressure Washing",
    url: "https://gleamteam.co.nz/residential-pressure-washing"
  }
]}

/>


    <ResidentialTemplate
      hero={{
        image: pressureHero,
        eyebrow: "Residential",
        title: "Pressure Washing",
        description:
          "Blast away years of grime with our professional high-pressure washing for driveways, concrete, pavers, and more.",
      backgroundPosition: "center bottom"
        }}

      info={{
        image: tallPressure,
        heading: "Residential Pressure Washing",
        paragraphs: [
          "Your hard surfaces take a beating — moss, oil, grime, and age can turn paths and patios into slippery eyesores.",
          "Our pressure washing restores surfaces to their original glory without damage.",
          "We adjust pressure and nozzles depending on the surface — from delicate pavers to stubborn stains.",
          "Available from Waikanae to Whitby - we service the Kapiti Coast and beyond.",
          "We clean, you relax — and enjoy a fresh new look outside.",
        ],
        listItems: [
          "Driveways, paths, and patios",
          "Pavers, brick, concrete, and tiles",
          "Moss, algae, lichen, and grime removal",
          "Oil stain treatment and degreasing",
          "Fence and retaining wall refresh",
        ],
      }}
      benefits={{
        heading: "What Pressure Washing Solves",
        items: [
          {
            icon: grimeIcon,
            text: "Removes years of built-up grime, stubborn stains, and weathered dirt from driveways, paths, and garden walls",
          },
          {
            icon: slipIcon,
            text: "Eliminates slippery moss and algae from walkways, steps, and patios to keep your family safe",
          },
          {
            icon: patioIcon,
            text: "Restores outdoor living areas like decks, fences, and patios — boosting both comfort and street appeal",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Precision Pressure, Powerful Results",
        description: "Every surface is different. That’s why we use the right pressure, attachments, and techniques for the job — all without causing damage.",
        items: [
          {
            image: pressureGunImg,
            alt: "Pressure washing gun with adjustable settings",
            title: "Variable Pressure Systems",
            description: "From concrete to decking, we adjust the water pressure to match the surface — tough on grime, safe on structure.",
          },
          {
            image: surfaceCleanerImg,
            alt: "Rotary surface cleaner for flat surfaces",
            title: "Rotary Surface Cleaners",
            description: "Evenly distributes pressure across large flat areas like driveways and patios, reducing streaks and improving efficiency.",
          },
          {
            image: fanImg,
            alt: "Fan and turbo pressure nozzles",
            title: "Turbo & Fan Nozzles",
            description: "Specialty nozzles for different cleaning intensities — ideal for edging, deep stains, and tight corners and tricky spots.",
          },
        ],
      }}
      testimonialTag={['pressure', 'general']}
        faqItems={faqItems}
    />
    </>
  );
}
