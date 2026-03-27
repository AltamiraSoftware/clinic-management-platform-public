import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata = buildNoIndexMetadata("Dashboard | Clinic Demo");

export default function DashboardLayout({ children }) {
  return children;
}

