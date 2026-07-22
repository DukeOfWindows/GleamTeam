import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
// TODO: placeholder images reused from roof treatment — swap in real solar panel photos when available
import solarHero from '../images/roof-cleaning-treatment-example.webp';
import tallSolar from '../images/roof-treatment-lichen-removal-wanaka.webp';
import purewaterImg from '../images/tools/pure-water-system-window-cleaning.webp';
import poleImg from '../images/tools/reach-pole-glass-cleaning.webp';
import ladderImg from '../images/tools/ladder-roof-access-secured.webp';
import sunIcon from '../images/icons/sun.png';
import panelIcon from '../images/icons/panel.png';
import resultsIcon from '../images/icons/results.png';

export default function ResidentialSolarPanelCleaning() {
  // TODO: filler FAQ content — update with real answers
  const faqItems = [
    {
      question: "Why does solar panel cleaning matter?",
      answer: (
        <>
          Dust, pollen, and grime can <strong>reduce your panels' efficiency</strong> over time. A regular clean helps your system perform closer to its full potential.
        </>
      ),
    },
    {
      question: "Will cleaning damage my panels?",
      answer: (
        <>
          <strong>Not with us.</strong> We use a soft-bristle, deionised water system — the same gentle approach we use on glass — so there's no risk of scratching the panel surface.
        </>
      ),
    },
    {
      question: "How often should panels be cleaned?",
      answer: (
        <>
          We generally recommend <strong>once or twice a year</strong>, though this depends on your location and how much dust, pollen, or bird activity your roof sees.
        </>
      ),
    },
    {
      question: "Do you need to access my roof?",
      answer: (
        <>
          For most homes we can clean panels safely <strong>using extension poles from the ground</strong>. For steeper or harder-to-reach roofs, we use secure ladder and safety systems.
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
    },
  ];

  return (
    <>
      <HelmetSEO
        pageTitle="Solar Panel Cleaning Wanaka | Gleam Team"
        metaDescription="Professional solar panel cleaning for homes across Wanaka, Hawea, Luggate, Tarras and Cromwell — keep your panels performing at their best."
        canonicalUrl="https://gleamteam.co.nz/residential-solar-panel-cleaning"
        image="https://gleamteam.co.nz/images/hero-solar-panel-cleaning.jpg"
        breadcrumbItems={[
          { name: "Home", url: "https://gleamteam.co.nz/" },
          { name: "Solar Panel Cleaning", url: "https://gleamteam.co.nz/residential-solar-panel-cleaning" },
        ]}
      />

      <ResidentialTemplate
        hero={{
          image: solarHero,
          eyebrow: "Residential",
          title: "Solar Panel Cleaning",
          // TODO: filler copy — update with real details
          description: "Keep your solar panels performing at their best with our gentle, streak-free cleaning service.",
        }}

        info={{
          image: tallSolar,
          heading: "Residential Solar Panel Cleaning",
          // TODO: filler copy — update with real details
          paragraphs: [
            "Dust, pollen, and grime build up on solar panels over time, gradually reducing how much energy they can generate.",
            "Our gentle, deionised pure water cleaning system removes buildup without scratching or damaging the panel surface.",
            "A cleaner panel means better sunlight absorption — helping your system run closer to its full potential.",
            "We proudly service Wanaka, Hawea, Luggate, Tarras and Cromwell.",
          ],
          listItems: [
            "Soft-bristle, deionised water cleaning system",
            "Ground-based cleaning using extension poles where possible",
            "Safe, scratch-free technique",
            "Can be combined with your regular window clean",
          ],
        }}

        benefits={{
          heading: "What Solar Panel Cleaning Solves",
          items: [
            { icon: sunIcon, text: "Improves sunlight absorption for better energy efficiency" },
            { icon: panelIcon, text: "Removes dust, pollen, and grime without damaging the panel surface" },
            { icon: resultsIcon, text: "Helps protect your investment and keep your system running at its best" },
          ],
        }}

        tools={{
          title: "Our Toolkit",
          subtitle: "Gentle, Streak-Free, Efficient",
          // TODO: filler copy — update with real details
          description: "We use the same gentle, precision tools we trust for glass to safely clean solar panels.",
          items: [
            {
              image: purewaterImg,
              title: "Pure Water System",
              description: "Deionised water removes minerals and impurities for a spot-free, streak-free finish with no soap residue.",
            },
            {
              image: poleImg,
              title: "Telescopic Reach Poles",
              description: "Lets us clean most panels safely from the ground — no ladders or scaffolding required.",
            },
            {
              image: ladderImg,
              title: "Secure Roof Access Equipment",
              description: "For steeper or harder-to-reach roofs, our ladder and safety systems let us access panels safely.",
            },
          ],
        }}

        testimonialTag={['general']}
        faqItems={faqItems}
      />
    </>
  );
}
