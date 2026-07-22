import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
// TODO: hero image still a placeholder reused from house washing — swap when a real photo is available
import spiderHero from '../images/house-washing-wanaka-softwash.webp';
import tallSpider from '../images/spider-spraying-service-wanaka.webp';
import sprayImg from '../images/tools/hand-sprayer-bioclean-application.webp';
import ladderImg from '../images/tools/ladder-placement-gutter-access.webp';
import softwashImg from '../images/tools/softwash-nozzle-low-pressure.webp';
import shieldIcon from '../images/icons/shield.png';
import pestIcon from '../images/icons/gutter-pest.png';
import safetyIcon from '../images/icons/safety-dark.png';

export default function ResidentialSpiderSpraying() {
  // TODO: filler FAQ content — update with real answers
  const faqItems = [
    {
      question: "What does spider spraying involve?",
      answer: (
        <>
          We apply a <strong>targeted residual treatment</strong> around eaves, window frames, decks, and other common nesting spots to knock down existing spiders and discourage new webs from forming.
        </>
      ),
    },
    {
      question: "Is the treatment safe for kids and pets?",
      answer: (
        <>
          <strong>Yes</strong> — once dry, our treatments are safe around children and pets. We recommend keeping pets away from treated areas until the solution has fully dried.
        </>
      ),
    },
    {
      question: "How long does the treatment last?",
      answer: (
        <>
          Most treatments provide <strong>protection for several months</strong>, though this can vary depending on weather and the level of spider activity around your property.
        </>
      ),
    },
    {
      question: "Do I need to be home for the spray?",
      answer: (
        <>
          <strong>Nope!</strong> As long as we have access to the exterior of your home, you can carry on with your day.
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
        pageTitle="Spider Spraying | Gleam Team Window Cleaning"
        metaDescription="Professional spider spraying and pest treatment for homes across Wanaka, Hawea, Luggate, Tarras and Cromwell."
        canonicalUrl="https://gleamteam.co.nz/residential-spider-spraying"
        image="https://gleamteam.co.nz/images/hero-spider-spraying.jpg"
        breadcrumbItems={[
          { name: "Home", url: "https://gleamteam.co.nz/" },
          { name: "Spider Spraying", url: "https://gleamteam.co.nz/residential-spider-spraying" },
        ]}
      />

      <ResidentialTemplate
        hero={{
          image: spiderHero,
          eyebrow: "Residential",
          title: "Spider Spraying",
          // TODO: filler copy — update with real details
          description: "Keep spiders and webs off your home's exterior with our targeted spider spraying treatment.",
        }}

        info={{
          image: tallSpider,
          heading: "Residential Spider Spraying",
          // TODO: filler copy — update with real details
          paragraphs: [
            "Spiders love to nest around eaves, window frames, decks, and outdoor furniture — leaving webs and unwelcome surprises behind.",
            "Our spider spraying treatment targets these common nesting spots to knock down existing spiders and discourage new webs from forming.",
            "We use a residual treatment that keeps working long after we've left, so you can enjoy a web-free home for months at a time.",
            "We proudly service Wanaka, Hawea, Luggate, Tarras and Cromwell.",
          ],
          listItems: [
            "Treatment of eaves, window frames, and decking",
            "Residual spray for long-lasting protection",
            "Safe for kids and pets once dry",
            "Can be combined with your regular window clean",
          ],
        }}

        benefits={{
          heading: "What Spider Spraying Solves",
          items: [
            { icon: shieldIcon, text: "Reduces spiders and webs around doors, windows, and outdoor living areas" },
            { icon: pestIcon, text: "Discourages pests from nesting in eaves and hard-to-reach corners" },
            { icon: safetyIcon, text: "Gives you and your family peace of mind around your own home" },
          ],
        }}

        tools={{
          title: "Our Toolkit",
          subtitle: "Targeted, Long-Lasting Treatment",
          // TODO: filler copy — update with real details
          description: "We use purpose-built equipment to apply treatment evenly and reach tricky spots like eaves and roof lines.",
          items: [
            {
              image: sprayImg,
              title: "Residual Spray Treatment",
              description: "A long-lasting treatment applied to common nesting areas to keep spiders away for months.",
            },
            {
              image: ladderImg,
              title: "Extended Reach Equipment",
              description: "Our ladder systems and extension tools let us safely treat high eaves and rooflines.",
            },
            {
              image: softwashImg,
              title: "Low-Pressure Application",
              description: "Even, controlled application that gets into gaps and corners without waste or overspray.",
            },
          ],
        }}

        testimonialTag={['general']}
        faqItems={faqItems}
      />
    </>
  );
}
