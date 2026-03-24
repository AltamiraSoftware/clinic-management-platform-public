import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("esguinces");

export const metadata = getTreatmentMetadata("esguinces");

export default function EsguincesPage() {
  return <TreatmentPage treatment={treatment} />;
}
