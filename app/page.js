import HomePageClient from "@/app/_components/HomePageClient";
import { buildMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
  description:
    "Bivalente Salud en Madrid: psicología presencial y online, y fisioterapia a domicilio con un enfoque cercano, profesional y adaptado a cada persona.",
  path: "/",
});

export default function Home() {
  const homeSchemas = [
    getServiceSchema({
      name: "Psicología en Madrid",
      description:
        "Servicio de psicología presencial y online en Madrid con acompañamiento profesional para ansiedad, autoestima, duelo, trauma y terapia de pareja.",
      path: "/psicologia",
      providerPhone: "+34674547577",
      providerEmail: "danilopezme1004@gmail.com",
    }),
    getServiceSchema({
      name: "Fisioterapia a domicilio en Madrid",
      description:
        "Servicio de fisioterapia a domicilio en Madrid para dolor, lesiones y recuperación funcional con tratamiento adaptado a cada caso.",
      path: "/fisioterapia",
      providerPhone: "+34618417971",
      providerEmail: "estarellas11088@gmail.com",
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
