import Image from "next/image";
import Adtralza from "./components/Adtralza";
import Package from "./components/Package";
import Stats from "./components/Stats";
import Symptoms from "./components/Symptoms";
import ClinicalTools from "./components/ClinicalTools";

export default function Home() {
  return (
    <div>
      <Adtralza />
      <Package />
      <Stats />
      <Symptoms />
      <ClinicalTools />
    </div>
  );
}
