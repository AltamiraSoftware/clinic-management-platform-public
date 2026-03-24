import TreatmentPage from "../_components/TreatmentPage";
import { getTreatment, getTreatmentMetadata } from "../_data/tratamientos";

const treatment = getTreatment("tendinopatias");

export const metadata = getTreatmentMetadata("tendinopatias");

export default function TendinopatiasPage() {
  return <TreatmentPage treatment={treatment} />;
}
