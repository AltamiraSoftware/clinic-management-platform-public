import HeaderClient from "@/components/layout/HeaderClient";
import Footer from "@/components/layout/footer";
import { PORTFOLIO_SITE } from "@/lib/portfolioConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `PolÃ­tica de cookies | ${PORTFOLIO_SITE.name}`,
  description:
    "Resumen de cookies y servicios tÃ©cnicos de la versiÃ³n pÃºblica de portfolio.",
  path: "/legal/politica-cookies",
});

const sections = [
  {
    title: "1. Alcance",
    paragraphs: [
      "Esta pÃ¡gina explica el comportamiento esperado de la versiÃ³n pÃºblica de portfolio y de los servicios tÃ©cnicos integrados en el proyecto.",
    ],
  },
  {
    title: "2. Cookies tÃ©cnicas",
    paragraphs: [
      "La aplicaciÃ³n puede utilizar cookies o mecanismos equivalentes estrictamente tÃ©cnicos para autenticaciÃ³n, sesiÃ³n y seguridad cuando se conecta a servicios como Supabase.",
    ],
    bullets: [
      "Mantenimiento de sesiÃ³n",
      "AutenticaciÃ³n de usuario",
      "ProtecciÃ³n bÃ¡sica de la plataforma",
    ],
  },
  {
    title: "3. AnalÃ­tica",
    paragraphs: [
      "La demo puede integrar Vercel Analytics para mediciÃ³n bÃ¡sica del uso de la aplicaciÃ³n. Su configuraciÃ³n exacta debe revisarse antes de cualquier despliegue productivo.",
    ],
  },
  {
    title: "4. Servicios de terceros",
    bullets: [
      "Stripe durante el flujo de pago",
      "Daily dentro del entorno de videollamada",
      "Resend para correos transaccionales",
      "Supabase para autenticaciÃ³n y backend",
    ],
  },
  {
    title: "5. RevisiÃ³n previa a producciÃ³n",
    paragraphs: [
      "Antes de reutilizar esta base en un entorno real, conviene revisar el banner o gestor de consentimiento, la polÃ­tica de cookies definitiva y la configuraciÃ³n efectiva de analÃ­tica, pagos y videollamada.",
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f6faf8_0%,_#edf5f3_100%)]">
      <HeaderClient />

      <section className="relative overflow-hidden bv-hero pb-14 pt-28 sm:pt-32">
        <div className="container mx-auto max-w-4xl px-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            PolÃ­tica de cookies
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white! md:text-5xl">
            PolÃ­tica de cookies
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
              Este texto resume el uso tÃ©cnico de cookies y servicios externos en la
              versiÃ³n pÃºblica de portfolio. No pretende sustituir una polÃ­tica legal
              cerrada para un despliegue comercial o sanitario real.
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
