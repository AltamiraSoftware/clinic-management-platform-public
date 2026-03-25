import Footer from "@/components/layout/footer";
import { danielaProfile } from "../_data/tratamientos";
import TreatmentApproach from "./TreatmentApproach";
import TreatmentCTA from "./TreatmentCTA";
import TreatmentFaqs from "./TreatmentFaqs";
import TreatmentHero from "./TreatmentHero";
import TreatmentIntro from "./TreatmentIntro";
import TreatmentProfessionalCard from "./TreatmentProfessionalCard";

const defaultServiceConfig = {
  backLinkHref: "/psicologia",
  backLinkLabel: "Volver a psicología",
  primaryCtaLabel: "Reservar cita",
};

export default function TreatmentPage({
  treatment,
  professional = danielaProfile,
  serviceConfig = defaultServiceConfig,
}) {
  const pageServiceConfig =
    treatment.slug === "ansiedad"
      ? {
          ...defaultServiceConfig,
          ...serviceConfig,
          primaryCtaLabel: "Solicitar primera sesión",
          approachTitle: "Cómo trabaja Daniela la ansiedad en terapia",
          modalityEyebrow: "Presencial en Madrid y online",
          modalityTitle: "Una terapia adaptada a tu momento, con foco principal en Madrid",
          modalityNote:
            "La atención principal se ofrece con terapia presencial en Madrid, y la modalidad online está disponible cuando encaja mejor contigo o facilita la continuidad del proceso.",
          professionalTitlePrefix: "Psicóloga para ansiedad:",
          professionalPerspectiveTitle:
            "Acompañamiento profesional para entender y trabajar la ansiedad",
          contactTitle: "Reserva o consulta tu primera sesión de terapia para ansiedad",
          contactDescription:
            "Cuéntanos qué te está pasando y te orientamos sobre si este proceso terapéutico puede ayudarte, en modalidad presencial en Madrid u online.",
          sideTitlePrefix: "Empieza a trabajar",
          sideTitleSuffix: "con terapia adaptada a tu caso",
          sideDescription:
            "Este formulario está pensado para que puedas explicar tu situación con claridad y valorar una primera sesión con acompañamiento profesional, cercano y estructurado.",
        }
      : {
          ...defaultServiceConfig,
          ...serviceConfig,
        };

  return (
    <main className="min-h-screen">
      <TreatmentHero
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentIntro treatment={treatment} />
      <TreatmentApproach treatment={treatment} serviceConfig={pageServiceConfig} />
      <TreatmentProfessionalCard
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentCTA
        treatment={treatment}
        professional={professional}
        serviceConfig={pageServiceConfig}
      />
      <TreatmentFaqs treatment={treatment} />

      <Footer />
    </main>
  );
}

