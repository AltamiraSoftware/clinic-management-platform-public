import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("lesiones-deportivas");

export const metadata = getTreatmentMetadata("lesiones-deportivas");

export default function LesionesDeportivasPage() {
  return <TreatmentPage treatment={treatment} />;
}
