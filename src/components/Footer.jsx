import React from 'react';
import logo from '../images/logo.png'; 
import CTAButton from './CTAButton';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm space-y-10 md:space-y-0">
        
        {/* Logo + CTA */}
        <div>
          <img
            src={logo}
            alt="Duke Property Services – Kapiti Coast Exterior Cleaning Logo"
            className="h-14 mb-4"
          />
          <CTAButton className="text-sm px-4 py-2" />
        </div>

        {/* Residential */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">Residential</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/residential-window-cleaning" className="hover:underline">Window Cleaning</Link></li>
            <li><Link to="/residential-gutter-cleaning" className="hover:underline">Gutter Cleaning</Link></li>
            <li><Link to="/residential-house-washing" className="hover:underline">House Washing</Link></li>
            <li><Link to="/residential-pressure-washing" className="hover:underline">Pressure Washing</Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline">Interior Window Cleaning</Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline">Roof Treatment - Moss & Mould</Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline">Driveway Cleaning</Link></li>
            <li><Link to="/residential-spider-spraying" className="hover:underline">Spider Spraying</Link></li>
            <li><Link to="/residential-solar-panel-cleaning" className="hover:underline">Solar Panel Cleaning</Link></li>
          </ul>
        </div>

        {/* Commercial */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">Commercial</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/commercial-window-cleaning" className="hover:underline">Window Cleaning</Link></li>
            <li><Link to="/commercial-building-washing" className="hover:underline">Building Washing</Link></li>
            <li><Link to="/commercial-pressure-washing" className="hover:underline">Pressure Washing</Link></li>
            <li><Link to="/commercial-gutter-cleaning" className="hover:underline">Gutter Cleaning</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">About</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/about" className="hover:underline">Meet the Team</Link></li>
            <li><a href="/#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="/contact#service-area" className="hover:underline">Service Area</a></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
<div>
  <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">
    Contact Us
  </h4>
  <ul className="space-y-1 text-gray-700">
<li>
  Phone:{' '}
  <a
    href="tel:+64274575152"
    onClick={() => {
      if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
    }}
    className="text-duke-blue"
  >
    027 457 5152
  </a>
</li>
    <li>
      Email: <a href="mailto:info@gleamteam.co.nz" className="text-duke-blue">info@gleamteam.co.nz</a>
    </li>
    <li>
      Google:{" "}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Gleam+Team+Window+Cleaning+Wanaka"
        target="_blank"
        rel="noopener noreferrer"
        className="text-duke-blue hover:underline"
      >
        Gleam Team Window Cleaning
      </a>
    </li>
<li className="flex space-x-4 mt-2 text-2xl">
  <a
    href="https://www.facebook.com/339516226705753"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit us on Facebook"
    className="text-duke-blue hover:text-duke-brown transition mt-[2px]"
  >
    <svg
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.96c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
    </svg>
  </a>

  <a
    href="https://www.instagram.com/gleamteamwanaka"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit us on Instagram"
    className="text-duke-blue hover:text-duke-brown transition mt-[2px]"
  >
    <svg
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.17.05 1.95.25 2.42.42.61.23 1.05.5 1.51.96.46.46.73.9.96 1.51.17.47.37 1.25.42 2.42.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.05 1.17-.25 1.95-.42 2.42a4.05 4.05 0 01-.96 1.51 4.05 4.05 0 01-1.51.96c-.47.17-1.25.37-2.42.42-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.17-.05-1.95-.25-2.42-.42a4.05 4.05 0 01-1.51-.96 4.05 4.05 0 01-.96-1.51c-.17-.47-.37-1.25-.42-2.42C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.05-1.17.25-1.95.42-2.42a4.05 4.05 0 01.96-1.51 4.05 4.05 0 011.51-.96c.47-.17 1.25-.37 2.42-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.13 0-3.5 0-4.73.09-1.02.05-1.57.22-1.93.36-.48.18-.82.39-1.18.75-.36.36-.57.7-.75 1.18-.14.36-.31.91-.36 1.93C3.2 9.5 3.2 9.87 3.2 13s0 3.5.09 4.73c.05 1.02.22 1.57.36 1.93.18.48.39.82.75 1.18.36.36.7.57 1.18.75.36.14.91.31 1.93.36 1.23.09 1.6.09 4.73.09s3.5 0 4.73-.09c1.02-.05 1.57-.22 1.93-.36.48-.18.82-.39 1.18-.75.36-.36.57-.7.75-1.18.14-.36.31-.91.36-1.93.09-1.23.09-1.6.09-4.73s0-3.5-.09-4.73c-.05-1.02-.22-1.57-.36-1.93a2.26 2.26 0 00-.75-1.18 2.26 2.26 0 00-1.18-.75c-.36-.14-.91-.31-1.93-.36C15.5 4 15.13 4 12 4zM12 7.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm0 1.8a3 3 0 100 6 3 3 0 000-6zm4.5-2.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  </a>
</li>
  </ul>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 text-center py-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Gleam Team Window Cleaning. All rights reserved.</p>
        <p className="mt-1">Built with care in Wanaka, serving the Upper Clutha.</p>
      </div>
    </footer>
  );
}
