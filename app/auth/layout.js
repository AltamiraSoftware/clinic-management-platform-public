import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata = buildNoIndexMetadata("Acceso | Clinic Demo");

export default function AuthLayout({ children }) {
  return children;
}

