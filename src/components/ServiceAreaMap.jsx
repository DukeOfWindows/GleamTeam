import React from 'react';
import mapImage from '../images/service-area-map-upper-clutha.webp'; // Static fallback image

export default function ServiceAreaMap({ useStatic = false }) {
  return (
    <div className="w-full my-12">
      {useStatic ? (
        <img
          src={mapImage}
          alt="Map showing the service area for Gleam Team Window Cleaning"
          className="w-full h-auto rounded-xl shadow-md border-2 border-duke-dark"
        />
      ) : (
        <iframe
          title="Gleam Team Window Cleaning Service Area Map"
          // TODO: this embed mid= is Duke's custom Google My Maps — create a new one for
          // Gleam Team's Wanaka/Hawea/Luggate/Tarras area, or point this at a simpler embed.
          src="https://www.google.com/maps/d/u/0/embed?mid=1D5HAzWR-I8fFB9pyMqrt_LziofTzJeE"
          width="100%"
          height="500"
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-md border-2 border-duke-dark"
        ></iframe>
      )}
    </div>
  );
}
