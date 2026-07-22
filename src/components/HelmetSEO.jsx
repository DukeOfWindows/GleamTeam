import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetSEO({
  pageTitle,
  metaDescription,
  canonicalUrl,
  image = "https://gleamteam.co.nz/src/images/logo.png", // TODO: confirm final domain
  breadcrumbItems
}) {
  return (
    <Helmet>
      {/* Core SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": canonicalUrl,
          // TODO: no public street address found on the current Gleam Team site (mobile
          // service, no storefront) — postcode/geo below are best-effort for Wanaka
          // township, confirm with Tony before relying on them for local SEO.
          name: "Gleam Team Window Cleaning",
          image: image,
          url: canonicalUrl,
          telephone: "+64 22 436 7611",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Wanaka",
            postalCode: "9305",
            addressRegion: "Otago",
            addressCountry: "NZ"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -44.7032,
            longitude: 169.1321
          },
          description: metaDescription,
          areaServed: {
            "@type": "Place",
            name: "Wanaka, Albert Town, Lake Hawea, Luggate, Tarras, Cromwell, and the Upper Clutha"
          },
          openingHours: [
            "Mo-Fr 09:00-17:00"
          ],
          sameAs: [
            "https://www.facebook.com/339516226705753",
            "https://www.instagram.com/gleamteamwanaka"
          ]
        })}
      </script>
{breadcrumbItems && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    })}
  </script>
)}

    </Helmet>
  );
}
