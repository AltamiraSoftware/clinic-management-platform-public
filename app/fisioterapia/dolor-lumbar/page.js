import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("dolor-lumbar");

export const metadata = getTreatmentMetadata("dolor-lumbar");

export default function DolorLumbarPage() {
  return <TreatmentPage treatment={treatment} />;
}
