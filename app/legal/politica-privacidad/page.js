import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import { PORTFOLIO_SITE } from "@/lib/portfolioConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `PolÃ­tica de privacidad | ${PORTFOLIO_SITE.name}`,
  description:
    "Aviso de privacidad para la versiÃ³n pÃºblica de portfolio, con datos personales y configuraciÃ³n de producciÃ³n excluidos.",
  path: "/legal/politica-privacidad",
});

const sections = [
  {
    title: "1. Naturaleza de esta versiÃ³n",
    paragraphs: [
      "Esta web es una versiÃ³n pÃºblica de portfolio de una plataforma clÃ­nica. Se publica con fines demostrativos y profesionales.",
      "La identidad comercial original, los datos personales, las credenciales reales y la configuraciÃ³n de producciÃ³n han sido anonimizados o excluidos por seguridad.",
    ],
  },
  {
    title: "2. Datos visibles en esta demo",
    bullets: [
      "Placeholders de contacto como contact@clinic-demo.com o hello@clinic-demo.com",
      "NÃºmeros de telÃ©fono ficticios y marca neutral de portfolio",
      "Contenido funcional orientado a mostrar arquitectura, flujos y experiencia de producto",
    ],
  },
  {
    title: "3. Tratamiento de datos en un entorno real",
    paragraphs: [
      "La versiÃ³n funcional del proyecto estÃ¡ pensada para gestionar autenticaciÃ³n, reservas, pagos, mensajerÃ­a, videollamadas y contenidos mediante servicios externos.",
      "En un despliegue real, cualquier tratamiento de datos personales deberÃ­a definirse con base jurÃ­dica, responsable identificado, polÃ­tica adaptada al negocio y documentaciÃ³n legal revisada profesionalmente.",
    ],
  },
  {
    title: "4. Servicios tÃ©cnicos integrados en la demo",
    bullets: [
      "Supabase para autenticaciÃ³n y base de datos",
      "Stripe para pagos",
      "Daily para videollamadas",
      "Resend para correo transaccional",
      "Vercel Analytics para analÃ­tica bÃ¡sica",
    ],
  },
  {
    title: "5. LimitaciÃ³n de uso",
    paragraphs: [
      "Este texto no sustituye una polÃ­tica de privacidad definitiva para producciÃ³n. Antes de reutilizar el proyecto en un contexto comercial o sanitario, debe revisarse y adaptarse con datos reales, finalidades concretas y cumplimiento normativo aplicable.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pb-14 pt-28 sm:pt-32">
        <div className="container mx-auto max-w-4xl px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            PolÃ­tica de privacidad
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white! md:text-5xl">
            PolÃ­tica de privacidad
          </h1>
          <p className="mt-4 text-lg text-white/78">
            Ãšltima actualizaciÃ³n: 27 de marzo de 2026
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto max-w-4xl px-6">
          <article className="-mt-8 rounded-[32px] border border-white/70 bg-white/94 p-6 shadow-[0_24px_60px_rgba(10,77,104,0.12)] md:p-10">
            <p className="text-base leading-8 text-[#245953]">
              Esta pÃ¡gina legal describe Ãºnicamente el alcance de la versiÃ³n pÃºblica
              de portfolio. No expone datos identificables de pacientes, profesionales
              ni responsables reales del proyecto original.
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold text-[#0A4D68]!">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#245953]">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-3 rounded-[24px] border border-[#d9e8e2] bg-[#f7faf8] px-5 py-5">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-[#245953]">
                            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#A4BE7B]" />
                            <span className="leading-7">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
