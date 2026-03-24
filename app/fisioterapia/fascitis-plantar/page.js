import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("fascitis-plantar");

export const metadata = getTreatmentMetadata("fascitis-plantar");

export default function FascitisPlantarPage() {
  return <TreatmentPage treatment={treatment} />;
}
