import React from 'react';
import { Link } from 'react-router-dom';

export default function CTAButton({
  href = "/quote",
  children = "Request Quote",
  className = "",
  ariaLabel = "Request a quote",
}) {
  const baseClasses =
    "inline-block bg-duke-blue hover:bg-duke-dark text-white font-heading py-3 px-6 rounded-lg text-lg transition";

  return href.startsWith("/") ? (
    <Link to={href} className={`${baseClasses} ${className}`} aria-label={ariaLabel}>
      {children}
    </Link>
  ) : (
    <a href={href} className={`${baseClasses} ${className}`} aria-label={ariaLabel} role="button">
      {children}
    </a>
  );
}
