import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("dolor-cervical");

export const metadata = getTreatmentMetadata("dolor-cervical");

export default function DolorCervicalPage() {
  return <TreatmentPage treatment={treatment} />;
}
