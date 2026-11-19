/**
 * JSON-LD Structured Data for Simple Smile Endodontics.
 * Provides LocalBusiness (Dentist), FAQPage, BreadcrumbList, and WebSite
 * schemas for Google Knowledge Panel, Maps, and Rich Results.
 */

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.simplesmileendo.com/#dentist",
    name: "Simple Smile Endodontics",
    alternateName: "Simple Smile Endo",
    description:
      "Specialty endodontic practice led by Dr. Ernest Reeh in Stillwater, MN. Expert root canal therapy, endodontic retreatment, apicoectomy, dental implants, and 3D CBCT imaging.",
    url: "https://www.simplesmileendo.com",
    telephone: "+1-651-439-8085",
    image: "https://www.simplesmileendo.com/images/stock/doctor.jpg",
    logo: "https://www.simplesmileendo.com/images/logo.svg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13941 60th St N",
      addressLocality: "Stillwater",
      addressRegion: "MN",
      postalCode: "55082",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.0569,
      longitude: -92.8313,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:30",
        closes: "16:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/simplesmileendo",
      "https://www.youtube.com/@simplesmileendo",
    ],
    founder: {
      "@type": "Person",
      name: "Dr. Ernest Reeh",
      jobTitle: "Endodontist",
      description:
        "DDS, MSc, PhD — Over 30 years of endodontic experience. Top Dentist recognized by Mpls.St.Paul Magazine since 2007.",
    },
    medicalSpecialty: "Endodontics",
    availableService: [
      { "@type": "MedicalProcedure", name: "Root Canal Therapy" },
      { "@type": "MedicalProcedure", name: "Endodontic Retreatment" },
      { "@type": "MedicalProcedure", name: "Apicoectomy" },
      { "@type": "MedicalProcedure", name: "Dental Implants" },
      { "@type": "MedicalProcedure", name: "Cracked Tooth Treatment" },
      { "@type": "MedicalProcedure", name: "3D CBCT Imaging" },
    ],
    areaServed: [
      { "@type": "City", name: "Stillwater" },
      { "@type": "City", name: "Oak Park Heights" },
      { "@type": "City", name: "Bayport" },
      { "@type": "City", name: "Lake Elmo" },
      { "@type": "City", name: "Woodbury" },
      { "@type": "City", name: "Hugo" },
      { "@type": "City", name: "Mahtomedi" },
      { "@type": "City", name: "Hudson" },
    ],
    paymentAccepted: "Cash, Credit Card, CareCredit, Cherry",
    currenciesAccepted: "USD",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage schema for Google FAQ rich results.
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList schema for sub-pages.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite schema with publisher info.
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Simple Smile Endodontics",
    url: "https://www.simplesmileendo.com",
    publisher: {
      "@type": "Organization",
      name: "Simple Smile Endodontics",
      logo: {
        "@type": "ImageObject",
        url: "https://www.simplesmileendo.com/images/logo.svg",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
