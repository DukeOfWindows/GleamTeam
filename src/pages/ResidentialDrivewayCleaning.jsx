import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';
import ResidentialTemplate from './ResidentialTemplate';
import heroDriveway from '../images/driveway-pressure-cleaning-wanaka.webp';
import tallDriveway from '../images/driveway-cleaning-before-after.webp';
import surfacecleanerImg from '../images/tools/multi-surface-pressure-cleaning.webp';
import wandImg from '../images/tools/commercial-pressure-gun-closeup.webp';
import tankImg from '../images/tools/onboard-water-tank-system.webp';
import pressureIcon from '../images/icons/pressure.png';
import slipIcon from '../images/icons/slip.png';
import houseIcon from '../images/icons/house.png';

export default function ResidentialDrivewayCleaning() {
 
 const faqItems = [
  {
    question: "What types of driveways do you clean?",
    answer: (
      <>
        We clean <strong>concrete, asphalt, exposed aggregate, cobblestone, and paved driveways</strong>. Each one gets a surface-appropriate clean — no one-size-fits-all pressure blasting here.
      </>
    ),
  },
  {
    question: "Can you remove oil stains or tyre marks?",
    answer: (
      <>
        <strong>Mostly, yes!</strong> We pre-treat tough spots like oil, rust, or tyre scuffs with specialty products. Some deep-set stains may not disappear completely, but we’ll get it looking 100× better.
      </>
    ),
  },
  {
    question: "Will the water affect my lawn or garden?",
    answer: (
      <>
        We direct runoff away from your plants whenever possible. Our detergents are <strong>biodegradable and used sparingly</strong> — and we’ll do a post-wash rinse if needed.
      </>
    ),
  },
  {
    question: "Do I need to be home for the job?",
    answer: (
      <>
        <strong>Nope — as long as the driveway is clear of cars</strong> and we’ve got hose access, you can carry on with your day. We’ll let you know when it’s done!
      </>
    ),
  },
  {
    question: "Will it stay clean, or do I need to do this often?",
    answer: (
      <>
        That depends on traffic and weather, but <strong>most homes only need it once a year</strong>. If you’re under trees or have frequent oil leaks, more often may be worthwhile.
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
  pageTitle="Driveway Cleaning Wanaka | Gleam Team"
  metaDescription="Pressure washing for driveways, concrete paths, pavers, and patios. Remove grime, algae, oil and tire marks for a safer, cleaner entrance."
  canonicalUrl="https://gleamteam.co.nz/residential-driveway-cleaning"
  image="https://gleamteam.co.nz/images/hero-driveway.jpg"
  breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Driveway Cleaning",
    url: "https://gleamteam.co.nz/residential-driveway-cleaning"
  }
]}

/>


    <ResidentialTemplate
      hero={{
        image: heroDriveway,
        eyebrow: "Residential",
        title: "Driveway Cleaning",
        description: "Pressure wash years of grime, stains, and moss off your driveway — and boost your home’s street appeal in the process.",
      }}

      info={{
        image: tallDriveway,
        heading: "Residential Driveway Cleaning",
        paragraphs: [
          "Driveways often bear the brunt of mud, oil, moss, and tyre stains — but our surface cleaning can bring them back to life.",
          "We use professional-grade pressure washers and surface cleaners to remove grime safely and evenly.",
          "Whether it’s concrete, asphalt, or paving stones, we tailor the pressure and product to protect the surface.",
          "Your driveway is the first thing visitors see — let’s make it sparkle.",
          "We proudly service the Upper Clutha area, including Wanaka, Cardrona, Lake Hawea, Hawea Flat, Luggate, Tarras and Cromwell."
        ],
        listItems: [
          "Concrete, asphalt, and paver-safe cleaning",
          "Moss, algae, and lichen removal",
          "Grease and oil stain pre-treatment",
          "Surface cleaners for even results",
        ],
      }}
      benefits={{
        heading: "What Driveway Cleaning Solves",
        items: [
          {
            icon: pressureIcon,
            text: "Removes years of built-up dirt, grime, and moss from concrete, pavers, and asphalt surfaces",
          },
          {
            icon: slipIcon,
            text: "Improves safety by clearing slippery spots caused by algae, oil, or organic build-up",
          },
          {
            icon: houseIcon,
            text: "Boosts street appeal and gives your home a fresher, well-maintained look",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Powerful, Even, and Deep-Cleaning",
        description: "Driveways take a beating from cars, weather, and time. Our gear cuts through stains and buildup without damaging the surface underneath.",
        items: [
          {
            image: surfacecleanerImg,
            alt: "Rotary surface cleaner for driveways",
            title: "Rotary Surface Cleaner",
            description: "A spinning arm evenly applies pressure across concrete and paving — faster and cleaner than a wand alone.",
          },
          {
            image: tankImg,
            alt: "Water tank and hose setup for pressure washing",
            title: "Onboard Tank & 150m Hose",
            description: "With our tap-adaptable systems and onboard tanks, we can clean your home even if water pressure and access is limited.",
          },
          {
            image: wandImg,
            alt: "Pressure wand used for detailing",
            title: "Detailing Wand",
            description: "Perfect for cleaning edges, expansion joints, and awkward corners where surface cleaners can’t reach.",
          },
        ],
      }}
      testimonialTag={['pressure', 'general']}
        faqItems={faqItems}
    />
    </>
  );
}
