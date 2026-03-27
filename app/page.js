import HomePageClient from "@/app/_components/HomePageClient";
import {
  PHYSIOTHERAPY_PROFILE,
  PORTFOLIO_SITE,
  PSYCHOLOGY_PROFILE,
} from "@/lib/portfolioConfig";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: `Psicología y Fisioterapia en Madrid | ${PORTFOLIO_SITE.name}`,
  description:
    "Versión pública de portfolio de una plataforma clínica con servicios, reservas, pagos y dashboards.",
  path: "/",
});

export default function Home() {
  const homeSchemas = [
    getServiceSchema({
      name: "Psicología en Madrid",
      description:
        "Servicio demo de psicología presencial y online en Madrid con acompañamiento profesional para distintos motivos de consulta.",
      path: "/psicologia",
      providerPhone: PSYCHOLOGY_PROFILE.phone,
      providerEmail: PSYCHOLOGY_PROFILE.email,
    }),
    getServiceSchema({
      name: "Fisioterapia a domicilio en Madrid",
      description:
        "Servicio demo de fisioterapia a domicilio en Madrid para dolor, lesiones y recuperación funcional.",
      path: "/fisioterapia",
      providerPhone: PHYSIOTHERAPY_PROFILE.phone,
      providerEmail: PHYSIOTHERAPY_PROFILE.email,
    }),
    getBreadcrumbSchema([{ name: "Inicio", path: "/" }]),
  ];

  return (
    <>
      {homeSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomePageClient />
    </>
  );
}
