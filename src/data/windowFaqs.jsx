// Window cleaning FAQs — Tony's wording, taken verbatim from the FAQ page of the
// previous gleamteam.co.nz site (Internet Archive capture, 6 Feb 2026).
// Shared by the residential, interior and commercial window cleaning pages.
import React from 'react';

const windowFaqs = {
  areas: {
    question: "What areas do Gleam Team service?",
    answer: <>Gleam Team services the Upper Clutha areas of Wanaka, Hawea and Luggate.</>,
  },
  cost: {
    question: "How much will it cost to have my windows cleaned?",
    answer: (
      <>
        That just depends on how long it will take us to do it. This can be affected by the amount of windows, how easily accessible the windows are and also what state the windows are in. We have over 40 years of windows cleaning experience so we love doing this and have improved our speed over the years so let us give you a quote and amaze you.
      </>
    ),
  },
  bestTime: {
    question: "What is the best time of year to have my windows cleaned?",
    answer: (
      <>
        There is not really any rule as to what time of the year is best to have your windows cleaned as there are a few variables that can affect this:
        <ul className="list-disc pl-5 my-2 space-y-1">
          <li>Where your home or building is situated</li>
          <li>Is there construction work taking place close to you?</li>
          <li>The amount of wind your home is exposed to etc.</li>
        </ul>
        You might find that your windows get more dirty over the spring period, because of all the bees out and about for example. The golden rule is to have a cleaning schedule in place so that your windows look good and maintained all year round. We have a booking system in place which can program your cleaning in on the frequency you choose.
      </>
    ),
  },
  howOften: {
    question: "How often should I have my windows cleaned?",
    answer: (
      <>
        At a bare minimum we would recommend that your home’s windows be cleaned once every six months. For the best looking (and maintained) windows all year round we would recommend a quarterly clean. Think of cleaning as maintaining and you will be chuffed with the results in the years to come.
      </>
    ),
  },
  rain: {
    question: "My windows are scheduled to be cleaned, but the weather says that it will be raining. Should I wait for a sunny day?",
    answer: (
      <>
        No need at all. It's possible to clean windows in all weather conditions. Be it in rain or snow, the end result will be just as gleaming as when your windows are cleaned on a sunny day.
      </>
    ),
  },
  prepare: {
    question: "My home's windows are getting cleaned today. Do I have to prepare anything?",
    answer: (
      <>
        To ensure that we are able to get your windows looking their best we would recommend the following:
        <ul className="list-disc pl-5 my-2 space-y-1">
          <li>Removing breakable objects (glass, pots etc.) from your window sills</li>
          <li>Moving breakable objects that are blocking access to any internal or external windows</li>
          <li>Removing any posters, notes or notices stuck onto your windows</li>
          <li>Ensuring that any dogs are cordoned off to enable us to complete our mahi undisturbed.</li>
        </ul>
      </>
    ),
  },
  outsidesOnly: {
    question: "I would like to have just the outsides of my windows cleaned. Can you help me?",
    answer: (
      <>
        Yes of course! For the best results and your satisfaction we do recommend having both the inside and outside of your windows cleaned at the same time.
      </>
    ),
  },
  thirdFloor: {
    question: "I would like to have my windows cleaned, but my apartment is on the third floor, is it still possible?",
    answer: (
      <>
        Yes. With our pure water cleaning system we are able to clean your windows including the frames up to 4 stories high.
      </>
    ),
  },
  chemicals: {
    question: "Do you use any harmful chemicals?",
    answer: (
      <>
        No we don’t. It’s not really a big secret anymore, but in case you didn’t know window cleaners use dish washing liquid to clean windows and in our case we use environmentally friendly dish washing liquid. No harsh chemicals, no harsh results!
      </>
    ),
  },
  pureWater: {
    question: "What is pure water cleaning?",
    answer: (
      <>
        When you run normal tap water through a specialized filter to remove all the dissolved solids (the bits that are left behind when the water dries up and then causes streaks to form on windows) you have what is known as Pure Water. Run this Pure Water through a hose and a super light pole that is able to extend up to 4 stories high (or above) and attach a brush at the end of this pole and you now have the ability to brush the dirt off windows and frames 12m or higher up and rinse them down with water that won’t be leaving any streaks.
        <br />
        <br />
        This provides us with the ability to reach and clean any windows, skylights, canopies or glass balustrades that would otherwise require machinery and / or climbing equipment to get to. It also provides the added benefit of being able to clean your window frames at the same time. And because there are no need for any long ladders it becomes a much safer way to clean your windows.
      </>
    ),
  },
  paint: {
    question: "Can you remove paint/varnish from my windows?",
    answer: (
      <>
        Sure we can! We use specialized techniques to safely remove material such as paint, concrete, staining or anything that doesn’t belong on your windows. This service is not included in the normal price. Please mention this when requesting a quote.
      </>
    ),
  },
  tint: {
    question: "My windows have a film or tint. Is there a chance of this getting damaged when having my windows cleaned?",
    answer: (
      <>
        We pride ourselves in providing an excellent service and respecting the property of our clients. We won’t use any harsh chemicals on your windows and will most definitely not damage any film or tint. Guaranteed!
      </>
    ),
  },
};

export const residentialWindowFaqs = [
  windowFaqs.areas, windowFaqs.cost, windowFaqs.bestTime, windowFaqs.howOften, windowFaqs.rain,
  windowFaqs.prepare, windowFaqs.outsidesOnly, windowFaqs.thirdFloor, windowFaqs.chemicals,
  windowFaqs.pureWater, windowFaqs.paint, windowFaqs.tint,
];

// Interior page: drops the two exterior-only items (third-floor reach, pure water system).
export const interiorWindowFaqs = [
  windowFaqs.areas, windowFaqs.cost, windowFaqs.bestTime, windowFaqs.howOften, windowFaqs.rain,
  windowFaqs.prepare, windowFaqs.outsidesOnly, windowFaqs.chemicals, windowFaqs.paint, windowFaqs.tint,
];

// Commercial page: drops the "my home's windows" preparation item.
export const commercialWindowFaqs = [
  windowFaqs.areas, windowFaqs.cost, windowFaqs.bestTime, windowFaqs.howOften, windowFaqs.rain,
  windowFaqs.outsidesOnly, windowFaqs.thirdFloor, windowFaqs.chemicals, windowFaqs.pureWater,
  windowFaqs.paint, windowFaqs.tint,
];

export default windowFaqs;
