import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';
import ResidentialTemplate from './ResidentialTemplate';
import heroRoof from '../images/roof-treatment-lichen-removal-wanaka.webp';
import tallRoof from '../images/roof-cleaning-treatment-example.webp';
import ladderImg from '../images/tools/ladder-roof-access-secured.webp';
import sprayImg from '../images/tools/hand-sprayer-bioclean-application.webp';
import hoseImg from '../images/tools/high-pressure-hose-extension.webp';
import lichenIcon from '../images/icons/lichen.png';
import roofIcon from '../images/icons/roof.png';
import roofshieldIcon from '../images/icons/roof-shield.png';

export default function ResidentialRoofTreatment() {
  const faqItems = [
  {
    question: "What does a roof treatment actually do?",
    answer: (
      <>
        It kills off <strong>moss, mould, lichen, and algae</strong> using a biodegradable product. Over time, the growth breaks down and is washed away by the rain — leaving your roof cleaner and safer.
      </>
    ),
  },
  {
    question: "How long does it take to work?",
    answer: (
      <>
        Roof treatments aren’t instant — it usually takes <strong>6 to 12 months</strong> for the growth to fully break down. But the results are long-lasting and much gentler on your roof than water blasting.
      </>
    ),
  },
  {
    question: "What products do you use?",
    answer: (
      <>
        We use <strong>BioShield, a proven NZ-made treatment</strong> that’s safe for most roofing materials and won’t harm your garden when applied properly.
      </>
    ),
  },
  {
    question: "Will it damage my plants or garden?",
    answer: (
      <>
        We <strong>pre-soak surrounding plants and rinse them again afterward</strong>. We’re careful and experienced — your hedges won’t suffer.
      </>
    ),
  },
  {
    question: "Do I need to be home for the treatment?",
    answer: (
      <>
        <strong>Nope!</strong> As long as we’ve got access and a working hose tap, we’re good to go. We’ll send you a message when it’s done.
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
  pageTitle="Roof Treatments & Moss Control | Gleam Team Window Cleaning"
  metaDescription="Kill lichen, moss, and mould on your roof with our safe and effective roof treatment services. Long-lasting results with no pressure washing required."
  canonicalUrl="https://gleamteam.co.nz/residential-roof-treatment"
  image="https://gleamteam.co.nz/images/hero-roof.jpg"
  breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Roof Treatment",
    url: "https://gleamteam.co.nz/residential-roof-treatment"
  }
]}

/>

    <ResidentialTemplate
      hero={{
        image: heroRoof,
        eyebrow: "Residential",
        title: "Roof Treatment - Moss & Mould",
        description: "Say goodbye to moss and lichen. Our moss & mould treatment keeps your roof protected — no water blasting needed.",
    backgroundPosition: "center bottom"
      }}

      info={{
        image: tallRoof,
        heading: "Residential Roof Treatment",
        paragraphs: [
          "Roofs are moss magnets. Left untreated, growth can lift tiles, clog gutters, and cause water damage.",
          "Our gentle roof treatment kills moss, lichen, and mould at the root — no water blasting or structural risk.",
          "Application is safe, effective, and works gradually over months as the weather naturally removes debris.",
                   "Routine treatments help extend roof life, improve appearance, and avoid costly repairs down the track.",

          "We proudly service the Upper Clutha area, including Wanaka, Cardrona, Lake Hawea, Hawea Flat, Luggate, Tarras and Cromwell.",
        ],
        listItems: [
          "Low-pressure chemical application",
          "Effective on moss, lichen & mould",
          "Suitable for tile, iron, and Colorsteel",
          "Works naturally with rain over time",
          "Safe on solar panels and skylights",
        ],
      }}
      benefits={{
        heading: "What Roof Treatment Fixes",
        items: [
          {
            icon: roofIcon,
            text: "Looks after your roof for the long run — saving you from expensive repairs down the track",
          },
          {
            icon: lichenIcon,
            text: "Gently removes moss, lichen, and mould without damaging your roof — keeping it clean and cared for",
          },
          {
            icon: roofshieldIcon,
            text: "Helps prevent future leaks and moisture damage by clearing away harmful organic growth",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Safe, Targeted, Long-Lasting",
        description: "Roof treatment isn’t about brute force — it’s about applying the right product the right way, from the right setup.",
        items: [
          {
            image: ladderImg,
            alt: "Ladder and safety gear for safe roof access",
            title: "Secure Ladder & Safety Gear",
            description: "Our advanced ladder systems and certified harnesses keep us safe while working on steep or multi-level roofs.",
          },
          {
            image: sprayImg,
            alt: "Biodegradable roof treatment spray",
            title: "BioShield Roof Treatment",
            description: "We apply a proven, biodegradable solution that kills lichen, moss, and mould — then nature rinses it away over time.",
          },
          {
            image: hoseImg,
            alt: "Hose reel system for high roof reach",
            title: "80m Hose Reel System",
            description: "Our high-reach hose reels let us treat roofs from a safe distance — perfect for tricky access or multi-storey homes.",
          },
        ],
      }}
      testimonialTag={['roof', 'general']}
        faqItems={faqItems}
    />
    </>
  );
}
