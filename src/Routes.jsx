// src/Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResidentialWindowCleaning from './pages/ResidentialWindowCleaning';
import ResidentialGutterCleaning from './pages/ResidentialGutterCleaning';
import ResidentialHouseWashing from './pages/ResidentialHouseWashing';
import ResidentialPressureWashing from './pages/ResidentialPressureWashing';
import ResidentialInteriorWindowCleaning from './pages/ResidentialInteriorWindowCleaning';
import ResidentialRoofTreatment from './pages/ResidentialRoofTreatment';
import ResidentialDeckWashing from './pages/ResidentialDeckWashing';
import ResidentialDrivewayCleaning from './pages/ResidentialDrivewayCleaning';
import CommercialWindowCleaning from './pages/CommercialWindowCleaning';
import CommercialGutterCleaning from './pages/CommercialGutterCleaning';
import CommercialBuildingWashing from './pages/CommercialBuildingWashing';
import CommercialPressureWashing from './pages/CommercialPressureWashing.jsx';
import Quote from './pages/Quote';
import Thanks from './pages/Thanks';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BlogHome from './blog/BlogHome';
import BlogPostWrapper from './blog/BlogPostWrapper';


export default function SiteRoutes() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Navigate to="/" replace />} /> {/* ← redirect from old /home */}
          <Route path="/residential-window-cleaning" element={<ResidentialWindowCleaning />} />
          <Route path="/residential-gutter-cleaning" element={<ResidentialGutterCleaning />} />
          <Route path="/residential-house-washing" element={<ResidentialHouseWashing />} />
          <Route path="/residential-pressure-washing" element={<ResidentialPressureWashing />} />
          <Route path="/residential-interior-window-cleaning" element={<ResidentialInteriorWindowCleaning />} />
       <Route path="/residential-roof-treatment" element={<ResidentialRoofTreatment />} />
       <Route path="/residential-deck-washing" element={<ResidentialDeckWashing />} />
       <Route path="/residential-driveway-cleaning" element={<ResidentialDrivewayCleaning />} />
       <Route path="/commercial-window-cleaning" element={<CommercialWindowCleaning />} />
       <Route path="/commercial-gutter-cleaning" element={<CommercialGutterCleaning />} />
       <Route path="/commercial-building-washing" element={<CommercialBuildingWashing />} />
       <Route path="/commercial-pressure-washing" element={<CommercialPressureWashing />} />
       <Route path="/about" element={<AboutUs />} />
       <Route path="/thanks" element={<Thanks />} />
       <Route path="/quote" element={<Quote />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/blog" element={<BlogHome />} />
<Route path="/blog/:slug" element={<BlogPostWrapper />} />

        </Routes>
      </main>
    </>
  );
}
