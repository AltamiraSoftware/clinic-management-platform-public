"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PHYSIOTHERAPY_PROFILE,
  PORTFOLIO_SITE,
  PSYCHOLOGY_PROFILE,
} from "@/lib/portfolioConfig";

export default function Footer() {
  return (
    <footer className="bg-[#0A4D68] py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src={PORTFOLIO_SITE.logo}
                alt={`Logo ${PORTFOLIO_SITE.name}`}
                width={850}
                height={77}
                priority
                className="h-auto w-[42px] sm:w-[56px]"
                style={{ height: "auto" }}
              />
              <span className="pl-2 text-xl font-bold text-[#A4BE7B]">
                {PORTFOLIO_SITE.name}
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/82">
              Plataforma demo de gestión clínica preparada como portfolio técnico
              público, con psicología, fisioterapia, reservas, pagos y áreas privadas.
            </p>

            <Link href="/sobre-nosotros#contacto" className="bv-btn bv-btn-primary bv-btn-lg">
              Contactar
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/psicologia" className="transition hover:text-white">
                  Psicología
                </Link>
              </li>
              <li>
                <Link href="/fisioterapia" className="transition hover:text-white">
                  Fisioterapia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{PORTFOLIO_SITE.city}</li>
              <li>Psicología presencial y online en Madrid</li>
              <li>Fisioterapia a domicilio en Madrid</li>
              <li>Atención presencial, online y a domicilio</li>
              <li>
                <a
                  href={`tel:${PSYCHOLOGY_PROFILE.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-white"
                >
                  {PSYCHOLOGY_PROFILE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHYSIOTHERAPY_PROFILE.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-white"
                >
                  {PHYSIOTHERAPY_PROFILE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PSYCHOLOGY_PROFILE.email}`}
                  className="transition hover:text-white"
                >
                  {PSYCHOLOGY_PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PHYSIOTHERAPY_PROFILE.email}`}
                  className="transition hover:text-white"
                >
                  {PHYSIOTHERAPY_PROFILE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white!">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/sobre-nosotros" className="transition hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-privacidad" className="transition hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-cookies" className="transition hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/70">
            {`2026 ${PORTFOLIO_SITE.name}. Versión pública de portfolio. ${PORTFOLIO_SITE.city}, ${PORTFOLIO_SITE.country}.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
