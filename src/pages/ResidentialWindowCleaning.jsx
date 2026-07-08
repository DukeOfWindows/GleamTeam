import React from 'react';
import { Link } from 'react-router-dom';
import ResidentialTemplate from './ResidentialTemplate';
import HelmetSEO from '../components/HelmetSEO';
import heroWindow from '../images/window-cleaning-kapiti-coast-professionals.webp'; 
import tallWindow from '../images/window-cleaning-before-after-paraparaumu.webp'; 
import poleImg from '../images/tools/window-cleaning-waterfed-pole.webp';
import squeegeeImg from '../images/tools/window-edge-squeegee-clean.webp';
import purewaterImg from '../images/tools/resin-filter-pure-water-setup.webp';
import windowIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import houseIcon from '../images/icons/house.png';

export default function ResidentialWindowCleaning() {
 const faqItems = [
  {
    question: "How often should I clean my windows?",
    answer: (
      <>
        We recommend <strong>an exterior clean every 3 months</strong> to keep things looking sharp year-round. Inside windows can usually go longer between cleans — <strong>every 3–6 months</strong> depending on pets, kids, and cooking habits!
      </>
    ),
  },
    {
    question: "What chemicals do you use?",
    answer: (
    <>
      We don’t use any chemicals for exterior window cleaning — instead, we rely on our <strong>pure water cleaning system</strong>. This system filters out all minerals and impurities, leaving nothing behind on your glass. 
      <br />
      The result? <strong>Streak-free, spot-free windows</strong> with no chemical residue, making it safer for your home, garden, and pets.
    </>
    ),
  },
  {
    question: "Do you clean interior windows too?",
    answer: (
      <>
        <strong>Absolutely!</strong> We're careful around furniture, curtains, and delicate surfaces. Just let us know if you'd like the inside done as well, and we’ll come prepared.
      </>
    ),
  },
  {
    question: "Do I need to be home for the clean?",
    answer: (
      <>
        <strong>Only if we're doing the inside.</strong> For exterior cleans, as long as we have access, you can carry on with your day. We’ll send a quick message when we’re finished.
      </>
    ),
  },
  {
    question: "Will you remove paint, stickers, or hard water stains?",
    answer: (
      <>
        Standard window cleans don’t include stubborn residue removal — but <strong>we can absolutely quote for extra work</strong> like paint overspray, hard-water stains, or decal removal.
      </>
    ),
  },
  {
    question: "What happens if it rains on the day of my booking?",
    answer: (
      <>
        Light rain isn’t a problem, but <strong>we’ll reschedule if the weather’s really rough</strong>. Clean windows + rain won’t leave spots — dirty windows + rain will!
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
  pageTitle="Residential Window Cleaning | Gleam Team Window Cleaning"
  metaDescription="Streak-free window cleaning for homes across Paraparaumu, Waikanae, Otaki and nearby. Trusted professionals who care about detail and safety."
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
            "The difference between amazing results and unmitigated disasters comes down to a lot of experience and a little elbow grease. The team at Duke Property Services are armed with both.",
            "Their top-of-the-line tools and proprietary cleaning products, coupled with their knowledge in how to use them, help deliver spotless, streak-free results.",
            "Choosing a Duke clean from our Kapiti-based window cleaning team means opting for high-quality, long-lasting results.",
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
            "We provide window cleaning services across the Kapiti Coast and beyond — including Levin, Ohau, Otaki, Otaki Beach, Te Horo, Peka Peka, Waikanae, Waikanae Beach, Paraparaumu, Paraparaumu Beach, Raumati, Raumati Beach, Paekakariki, Pukerua Bay, Plimmerton, and Whitby.",
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
