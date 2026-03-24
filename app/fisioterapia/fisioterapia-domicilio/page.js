import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("fisioterapia-domicilio");

export const metadata = getTreatmentMetadata("fisioterapia-domicilio");

export default function FisioterapiaDomicilioPage() {
  return <TreatmentPage treatment={treatment} />;
}
