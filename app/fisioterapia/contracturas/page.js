import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("contracturas");

export const metadata = getTreatmentMetadata("contracturas");

export default function ContracturasPage() {
  return <TreatmentPage treatment={treatment} />;
}
