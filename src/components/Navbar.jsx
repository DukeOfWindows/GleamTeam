// Updated Navbar.jsx with font-family improvements and smooth scrolling link for testimonials
import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

const Dropdown = ({ label, items, hoverColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 font-heading text-gray-700 hover:text-duke-brown relative">
        {label} <span className="ml-1">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full w-60 bg-white border rounded-md shadow-lg z-10">
          {items.map((item, index) => {
            const isInternal = item.href.startsWith('/') && !item.href.includes('#');
const LinkTag = isInternal ? Link : 'a';

            return (
              <LinkTag
                key={index}
                to={isInternal ? item.href : undefined}
                href={!isInternal ? item.href : undefined}
                className={`block px-4 py-2 text-sm text-black rounded-md font-body transition-colors duration-200 ${
                  hoverColor === 'duke-blue'
                    ? 'hover:bg-duke-blue hover:text-off-white'
                    : 'hover:bg-duke-dark hover:text-off-white'
                }`}
              >
                <span className="mr-1">&gt;</span> {item.label}
              </LinkTag>
            );
          })}
        </div>
      )}
    </div>
  );
};

const DropdownLinks = ({ items, hoverColor }) => (
  <ul className="space-y-2 mt-4">
    {items.map((item, i) => {
      const isInternal = item.href.startsWith('/') && !item.href.includes('#');
const Tag = isInternal ? Link : 'a';
      return (
        <li key={i}>
          <Tag
            to={isInternal ? item.href : undefined}
            href={!isInternal ? item.href : undefined}
            className={`block text-lg font-body font-normal text-duke-dark $1`}
          >
            {item.label}
          </Tag>
        </li>
      );
    })}
  </ul>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Gleam Team logo"
              className="h-10 md:h-14 lg:h-16 transition-all duration-200"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Dropdown
              label="Residential"
              hoverColor="duke-dark"
              items={[
                { label: 'Window Cleaning', href: '/residential-window-cleaning' },
                { label: 'Gutter Cleaning', href: '/residential-gutter-cleaning' },
                { label: 'House Washing', href: '/residential-house-washing' },
                { label: 'Pressure Washing', href: '/residential-pressure-washing' },
                { label: 'Interior Window Cleaning', href: '/residential-interior-window-cleaning' },
                { label: 'Roof Treatment - Moss & Mould', href: '/residential-roof-treatment' },
                { label: 'Deck Washing', href: '/residential-deck-washing' },
                { label: 'Driveway Cleaning', href: '/residential-driveway-cleaning' },
                { label: 'Spider Spraying', href: '/residential-spider-spraying' },
                { label: 'Solar Panel Cleaning', href: '/residential-solar-panel-cleaning' },
              ]}
            />

            <Dropdown
              label="Commercial"
              hoverColor="duke-dark"
              items={[
                { label: 'Window Cleaning', href: '/commercial-window-cleaning' },
                { label: 'Building Washing', href: '/commercial-building-washing' },
                { label: 'Pressure Washing', href: '/commercial-pressure-washing' },
                { label: 'Gutter Cleaning', href: '/commercial-gutter-cleaning' },
              ]}
            />

            <Dropdown
              label="About"
              hoverColor="duke-brown"
              items={[
                { label: 'Meet the Team', href: '/about' },
                { label: 'Testimonials', href: '/#testimonials' },
                { label: 'Service Area', href: '/contact#service-area' },
                { label: 'Contact', href: '/contact' },
              ]}
            />

            <div className="flex items-center space-x-4">
              <CTAButton href="/quote" className="font-body" />

              <div className="flex flex-col text-sm font-body text-right leading-tight">
    <a
    href="tel:+64224367611"
    onClick={() => {
      if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
    }}
    className="text-duke-dark hover:text-duke-blue transition-colors duration-200"
  >
    022 436 7611
  </a>
                <a
                  href="mailto:info@gleamteam.co.nz"
                  className="text-duke-dark hover:text-duke-blue transition-colors duration-200"
                >
                  info@gleamteam.co.nz
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}

      {/* Slide-Out Drawer */}
    <div
  className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transition-transform duration-300 flex flex-col ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Header */}
  <div className="flex justify-between items-center px-4 py-4 border-b">
    <span className="font-heading text-lg text-duke-dark font-normal">Menu</span>
    <button onClick={handleClose}>
      <XMarkIcon className="h-6 w-6" />
    </button>
  </div>

  {/* Scrollable content */}
  <div className="flex-1 overflow-y-auto px-6 py-4">
    <div className="flex flex-col gap-3 justify-center">
      <CTAButton href="/quote" className="w-auto font-body">
        Request Quote
      </CTAButton>
<a
  href="tel:+64224367611"
  onClick={() => {
    if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
  }}
  className="inline-block px-6 py-3 bg-duke-dark text-white rounded-xl font-body text-sm shadow hover:bg-duke-blue transition-colors duration-200"
>
  022 436 7611
</a>
      <a
        href="mailto:info@gleamteam.co.nz"
        className="inline-block px-6 py-3 bg-duke-dark text-white rounded-xl font-body text-sm shadow hover:bg-duke-blue transition-colors duration-200"
      >
        info@gleamteam.co.nz
      </a>
    </div>

    {/* Nav sections */}
    <p className="uppercase text-sm font-heading text-gray-700 mt-6 mb-2">Residential</p>
    <DropdownLinks
      hoverColor="duke-dark"
      items={[
        { label: 'Window Cleaning', href: '/residential-window-cleaning' },
        { label: 'Gutter Cleaning', href: '/residential-gutter-cleaning' },
        { label: 'House Washing', href: '/residential-house-washing' },
        { label: 'Pressure Washing', href: '/residential-pressure-washing' },
        { label: 'Interior Window Cleaning', href: '/residential-interior-window-cleaning' },
        { label: 'Roof Treatment', href: '/residential-roof-treatment' },
        { label: 'Deck Washing', href: '/residential-deck-washing' },
        { label: 'Driveway Cleaning', href: '/residential-driveway-cleaning' },
        { label: 'Spider Spraying', href: '/residential-spider-spraying' },
        { label: 'Solar Panel Cleaning', href: '/residential-solar-panel-cleaning' },
      ]}
    />

    <p className="uppercase text-sm font-heading text-gray-700 mt-6 mb-2">Commercial</p>
    <DropdownLinks
      hoverColor="duke-dark"
      items={[
        { label: 'Window Cleaning', href: '/commercial-window-cleaning' },
        { label: 'Building Washing', href: '/commercial-building-washing' },
        { label: 'Pressure Washing', href: '/commercial-pressure-washing' },
        { label: 'Gutter Cleaning', href: '/commercial-gutter-cleaning' },
      ]}
    />

    <p className="uppercase text-sm font-heading text-gray-700 mt-6 mb-2">About</p>
    <DropdownLinks
      hoverColor="duke-brown"
      items={[
        { label: 'Meet the Team', href: '/about' },
        { label: 'Testimonials', href: '/#testimonials' },
        { label: 'Service Area', href: '/contact#service-area' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  </div>

  {/* Sticky Socials */}
  <div className="flex justify-center space-x-4 px-6 pb-4 pt-2 border-t">
    <a
      href="https://www.facebook.com/339516226705753"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit us on Facebook"
      className="text-duke-blue hover:text-duke-brown transition"
    >
      <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.96c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 17 22 12z" />
      </svg>
    </a>
    <a
      href="https://www.instagram.com/gleamteamwanaka"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit us on Instagram"
      className="text-duke-blue hover:text-duke-brown transition"
    >
<svg
  className="w-6 h-6 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.17.05 1.95.25 2.42.42a4.12 4.12 0 011.51.96 4.12 4.12 0 01.96 1.51c.17.47.37 1.25.42 2.42.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.05 1.17-.25 1.95-.42 2.42a4.12 4.12 0 01-.96 1.51 4.12 4.12 0 01-1.51.96c-.47.17-1.25.37-2.42.42-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.17-.05-1.95-.25-2.42-.42a4.12 4.12 0 01-1.51-.96 4.12 4.12 0 01-.96-1.51c-.17-.47-.37-1.25-.42-2.42C3.2 15.6 3.2 15.2 3.2 12s0-3.6.1-4.8c.05-1.17.25-1.95.42-2.42a4.12 4.12 0 01.96-1.51 4.12 4.12 0 011.51-.96c.47-.17 1.25-.37 2.42-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.13 0-3.5 0-4.73.09-1.02.05-1.57.22-1.93.36a2.26 2.26 0 00-1.18.75 2.26 2.26 0 00-.75 1.18c-.14.36-.31.91-.36 1.93C3.2 9.5 3.2 9.87 3.2 13s0 3.5.09 4.73c.05 1.02.22 1.57.36 1.93.18.48.39.82.75 1.18.36.36.7.57 1.18.75.36.14.91.31 1.93.36 1.23.09 1.6.09 4.73.09s3.5 0 4.73-.09c1.02-.05 1.57-.22 1.93-.36a2.26 2.26 0 001.18-.75 2.26 2.26 0 00.75-1.18c.14-.36.31-.91.36-1.93.09-1.23.09-1.6.09-4.73s0-3.5-.09-4.73c-.05-1.02-.22-1.57-.36-1.93a2.26 2.26 0 00-.75-1.18 2.26 2.26 0 00-1.18-.75c-.36-.14-.91-.31-1.93-.36-1.23-.09-1.6-.09-4.73-.09zM12 7.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zm0 1.8a3 3 0 100 6 3 3 0 000-6zm4.5-2.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
</svg>
    </a>
  </div>
</div>
    </>
  );
}
