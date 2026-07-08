import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
import gutterHero from '../images/gutter-cleaning-paraparaumu-waikanae.webp';
import tallGutter from '../images/gutter-blockage-example-kapiti.webp';
import ladderImg from '../images/tools/ladder-placement-gutter-access.webp';
import harnessImg from '../images/tools/fall-arrest-harness-hooked.webp';
import softwashImg from '../images/tools/softwash-nozzle-low-pressure.webp';
import foundationIcon from '../images/icons/foundation.png';
import shieldIcon from '../images/icons/shield.png';
import gutterpest from '../images/icons/gutter-pest.png';

export default function ResidentialGutterCleaning() {
 const faqItems = [
  {
    question: "How often should I get my gutters cleaned?",
    answer: (
      <>
        We recommend <strong>cleaning your gutters at least once a year</strong>.  If you live in a suburban area without overhanging trees, every two years may be enough — but regular maintenance is key. This helps prevent blockages, water damage, and unwanted nesting from birds or pests.
      </>
    ),
  },
  {
    question: "Do I need to be home for the gutter clean?",
    answer: (
      <>
        <strong>Nope!</strong> As long as we have access, we’ll get it done while you carry on with your day. We'll let you know when we're done — and send you photos so you can see the results.
      </>
    ),
  },
  {
    question: "How do I know if my gutters need cleaning?",
    answer: (
      <>
        If you're seeing <strong>overflowing water, sagging gutters, or plants growing</strong> where they shouldn’t be — it's time to call us. We’re happy to take a look and let you know what’s needed.
      </>
    ),
  },
  {
    question: "Do you use ladders or do it from the ground?",
    answer: (
      <>
        Depends on the job! We’re fully equipped with <strong>ladder systems and safety harnesses</strong> for multi-level homes, but often we can clean from the ground using extendable tools.
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
  pageTitle="Residential Gutter Cleaning | Gleam Team Window Cleaning"
  metaDescription="Protect your home from water damage with professional gutter cleaning on the Kapiti Coast. We clean gutters in Paraparaumu, Waikanae, Otaki, and nearby."
  canonicalUrl="https://gleamteam.co.nz/residential-gutter-cleaning"
  image="https://gleamteam.co.nz/images/hero-gutter.jpg"
breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Residential Gutter Cleaning",
    url: "https://gleamteam.co.nz/residential-gutter-cleaning"
  }
]}
/>

    <ResidentialTemplate
      hero={{
        image: gutterHero,
        eyebrow: "Residential",
        title: "Gutter Cleaning",
        description: "Protect your home from water damage with our thorough residential gutter cleaning service.",
      }}

      info={{
        image: tallGutter,
        heading: "Residential Gutter Cleaning",
        paragraphs: [
          "Clogged gutters can cause leaks, mold, and serious water damage to your home.",
          "Our expert team clears out leaves, moss, and debris by hand — then flushes the system to ensure water flows freely.",
          "With regular maintenance, you protect your roofline, prevent overflow, and avoid expensive repairs.",
          "We service homes throughout Kapiti and beyond — including Whitby, Paraparaumu, Waikanae, Levin, and everywhere in between.",
          "Let Duke take care of the dirty work so you don't have to risk falling off a ladder!",
        ],
        listItems: [
          "Hand-removal of debris and moss",
          "Thorough flush-out of all guttering systems",
          "Downpipe inspection and flush",
          "Minor down-pipe blockage removal",
          "Minor gutter repairs",
          "Before & after photos (upon request)",
        ],
      }}
      benefits={{
        heading: "What Clean Gutters Solve",
        items: [
          {
            icon: foundationIcon,
            text: "Stops water pooling that can damage your roof, fascia, soffits, and even your home’s foundation",
          },
          {
            icon: shieldIcon,
            text: "Prevents mold, rot, and algae growth caused by damp, overflowing gutters",
          },
          {
            icon: gutterpest,
            text: "Keeps pests, mosquitoes, and rodents from nesting in built-up gutter debris",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Purpose-Built Gear for a Messy Job",
        description: "We come ready to tackle tough blockages and hard-to-reach gutters safely.",
        items: [
          {
            image: ladderImg,
            alt: "Tall ladder setup for gutter access",
            title: "Extended Ladder Systems",
            description: "Our range of secure, adjustable ladders — including setups that reach up to 9 metres — ensure we can access even the tallest gutters safely.",
          },
          {
            image: harnessImg,
            alt: "Harness and safety gear for roof work",
            title: "Comprehensive Safety Gear",
            description: "We use certified working-at-heights equipment for all jobs at heights, keeping our crew safe and your property protected.",
          },
          {
            image: softwashImg,
            alt: "Soft wash system for flushing gutters",
            title: "Soft Wash Flushing",
            description: "Our gentle water blasters clear out moss, leaves, and grime without damaging your gutters or paintwork.",
          },
        ],
      }}
      testimonialTag={['gutter', 'general']}
        faqItems={faqItems}
    />
    </>
  );
}
