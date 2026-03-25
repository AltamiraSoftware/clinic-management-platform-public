import HomePageClient from "@/app/_components/HomePageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Psicología y Fisioterapia en Madrid | Bivalente Salud",
  description:
    "Clínica Bivalente Salud en Madrid: psicología y fisioterapia con un enfoque cercano, profesional y adaptado a cada persona.",
  path: "/",
});

export default function Home() {
  return <HomePageClient />;
}
