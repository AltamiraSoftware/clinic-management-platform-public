import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import {
  PHYSIOTHERAPY_PROFILE,
  PORTFOLIO_SITE,
  PSYCHOLOGY_PROFILE,
} from "@/lib/portfolioConfig";

const PRIMARY_EMAIL = PORTFOLIO_SITE.contactEmail;

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: PORTFOLIO_SITE.city,
  addressRegion: PORTFOLIO_SITE.city,
  addressCountry: "ES",
};

const AREA_SERVED = {
  "@type": "City",
  name: PORTFOLIO_SITE.city,
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl(PORTFOLIO_SITE.ogImage),
    email: PRIMARY_EMAIL,
    address: BUSINESS_ADDRESS,
    areaServed: AREA_SERVED,
    availableLanguage: ["es"],
    description:
      "VersiÃ³n pÃºblica de portfolio de una plataforma clÃ­nica con reservas, pagos, dashboard, chat y videollamada.",
    sameAs: [absoluteUrl("/")],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: PORTFOLIO_SITE.city,
        availableLanguage: ["es"],
        email: PSYCHOLOGY_PROFILE.email,
        telephone: PSYCHOLOGY_PROFILE.phone,
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: PORTFOLIO_SITE.city,
        availableLanguage: ["es"],
        email: PHYSIOTHERAPY_PROFILE.email,
        telephone: PHYSIOTHERAPY_PROFILE.phone,
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "PsicologÃ­a en Madrid",
        },
        areaServed: AREA_SERVED,
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Fisioterapia a domicilio en Madrid",
        },
        areaServed: AREA_SERVED,
      },
    ],
  };
}

export function getFaqSchema(faqs = []) {
  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question || item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer || item.respuesta,
      },
    })),
  };
}

export function getServiceSchema({
  name,
  description,
  path,
  providerName = SITE_NAME,
  providerEmail = PRIMARY_EMAIL,
  providerPhone,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    areaServed: AREA_SERVED,
    provider: {
      "@type": "MedicalBusiness",
      name: providerName,
      url: absoluteUrl("/"),
      email: providerEmail,
      ...(providerPhone ? { telephone: providerPhone } : {}),
      address: BUSINESS_ADDRESS,
    },
  };
}

export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
