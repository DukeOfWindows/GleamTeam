import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroGutter from '../images/commercial-gutter-cleaning-wanaka.webp';
import gutterImg from '../images/commercial-gutter-filled-before-clean.webp';
import softwashImg from '../images/tools/gutter-softwash-solution-application.webp';
import ladderImg from '../images/tools/ladder-safety-commercial-gutter-cleaning.webp';
import harnessImg from '../images/tools/full-harness-commercial-safety.webp';
import leafIcon from '../images/icons/gutter-pest-dark.png';
import floodIcon from '../images/icons/foundation-dark.png';
import buildingIcon from '../images/icons/building-dark.png';

export default function CommercialGutterCleaning() {
  const faqItems = [
  {
    question: "What types of commercial properties do you service?",
    answer: (
      <>
        We handle gutter cleaning for <strong>retail buildings, offices, warehouses, apartment blocks, schools, and more</strong>. Multi-unit? No problem — we’re set up for it.
      </>
    ),
  },
  {
    question: "Can you clean multi-storey buildings?",
    answer: (
      <>
        Absolutely. We use <strong>ladder systems, roof anchors, and elevated work platforms</strong> where needed — all with proper safety gear and certifications.
      </>
    ),
  },
  {
    question: "Do you offer roof and gutter reports?",
    answer: (
      <>
        Yes. On request, we can provide <strong>before/after photos and a basic condition report</strong> for your records — handy for insurance, tenants, or maintenance plans.
      </>
    ),
  },
  {
    question: "Will you dispose of the gutter waste?",
    answer: (
      <>
        <strong>Always.</strong> We bag and remove debris from site unless you have compost or green waste bins you’d prefer us to use.
      </>
    ),
  },
  {
    question: "Do you offer scheduled maintenance plans?",
    answer: (
      <>
        Yep — we can <strong>set you up with 6-monthly or annual gutter cleans</strong> so your buildings stay protected year-round. We’ll even send reminders.
      </>
    ),
  },
    {
    question: "Are your team trained and insured?",
    answer: (
      <>
        <strong>100%</strong>. Our crew is trained in commercial site safety, insured for peace of mind, and familiar with working in high-traffic or shared spaces.
      </>
    ),
  },
  {
  question: "What are your payment terms?",
  answer: (
    <>
      <strong>Payment is due upon completion</strong> unless other arrangements have been made in advance. We offer flexible payment options for commercial clients where needed.
    </>
  ),
}
];

  
  return (
    <>
<HelmetSEO
  pageTitle="Commercial Gutter Cleaning Wanaka | Gleam Team"
  metaDescription="Prevent overflow and water damage with professional gutter clearing for commercial buildings. Servicing offices, schools, and retail properties across the Upper Clutha."
  canonicalUrl="https://gleamteam.co.nz/commercial-gutter-cleaning"
  image="https://gleamteam.co.nz/images/hero-commercial-gutter.jpg"
  breadcrumbItems={[
  {
    name: "Home",
    url: "https://gleamteam.co.nz/"
  },
  {
    name: "Commercial Gutter Cleaning",
    url: "https://gleamteam.co.nz/commercial-gutter-cleaning"
  }
]}

/>


      <CommercialTemplate
        hero={{
          image: heroGutter,
          eyebrow: 'Commercial',
          title: 'Gutter Cleaning',
          description:
            'Avoid costly water damage and keep your commercial property draining properly with our safe, high-reach gutter cleaning service.',
        }}

        info={{
          image: gutterImg,
          heading: 'Commercial Gutter Cleaning',
          paragraphs: [
            'Blocked gutters don’t just look bad — they put your building at risk. Overflow can damage roofs, cladding, paths, and even foundations.',
            'At Gleam Team, we use safe, hands-on methods to clear commercial gutters efficiently — without the need for scaffolding or mobile elevating work platforms.',
            'Our experienced team works from height using ladders and harnesses to get the job done right.',
            'We clean gutters of all shapes and sizes — for factories, office blocks, schools, retail stores and more across Wanaka, Lake Hawea, Cromwell and the wider Upper Clutha.',
          ],
          listItems: [
            'High-reach cleaning up to 3 storeys',
            'Minimal disruption to daily operations',
            'Full health & safety compliance',
            'Scheduled maintenance plans available',
          ],
        }}

        benefits={{
          heading: 'Why Clean Gutters Matter for Business',
          items: [
            { icon: floodIcon, text: 'Prevents water damage to roofs, walls & foundations' },
            { icon: leafIcon, text: 'Reduces pest attraction and organic buildup' },
            { icon: buildingIcon, text: 'Maintains building compliance and appearance' },
          ],
        }}

        tools={{
          title: 'Our Commercial-Grade Toolkit',
          subtitle: 'Tools Built for Safety, Height & Precision',
          description:
            'Serving commercial clients from Wanaka to Cromwell, including Lake Hawea, Luggate, Tarras and surrounding areas.',
          items: [
            {
              image: ladderImg,
              title: 'Extended Ladder Systems',
              description:
                'Our range of secure, adjustable ladders — including setups that reach up to 9 metres — ensure we can access even the tallest gutters safely.',
            },
            {
              image: harnessImg,
              title: 'Comprehensive Working-From-Heights Safety Gear',
              description:
                'For buildings that can’t be reached with poles, we use platform ladders and certified harness setups to keep our team (and your property) safe.',
            },
            {
              image: softwashImg,
              title: 'Soft Wash Flushing',
              description:
                'Our gentle water blasters clear out moss, leaves, and grime without damaging your gutters or paintwork.',
            },
          ],
        }}

        testimonialTag={['pressure', 'general']}
        faqItems={faqItems}
      />
    </>
  );
}
