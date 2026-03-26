import { absoluteUrl, SITE_NAME } from "@/lib/seo";

const DANIELA_EMAIL = "danilopezme1004@gmail.com";
const BORJA_EMAIL = "estarellas11088@gmail.com";

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Madrid",
  addressRegion: "Madrid",
  addressCountry: "ES",
};

const AREA_SERVED = {
  "@type": "City",
  name: "Madrid",
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    name: SITE_NAME,
    url: absoluteUrl("/"),
    image: absoluteUrl("/BivalenteSalud.webp"),
    email: DANIELA_EMAIL,
    address: BUSINESS_ADDRESS,
    areaServed: AREA_SERVED,
    availableLanguage: ["es"],
    description:
      "Psicología presencial y online, y fisioterapia a domicilio en Madrid con un enfoque cercano, profesional y adaptado a cada persona.",
    sameAs: [absoluteUrl("/")],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "Madrid",
        availableLanguage: ["es"],
        email: DANIELA_EMAIL,
        telephone: "+34674547577",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "Madrid",
        availableLanguage: ["es"],
        email: BORJA_EMAIL,
        telephone: "+34618417971",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: "Psicología en Madrid",
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
  providerEmail = DANIELA_EMAIL,
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
