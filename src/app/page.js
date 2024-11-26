import Image from "next/image";
import Adtralza from "./components/Adtralza";
import Package from "./components/Package";
import Stats from "./components/Stats";
import Symptoms from "./components/Symptoms";

export default function Home() {
  return (
    <div>
      <Adtralza />
      <Package />
      <Stats />
      <Symptoms />
    </div>
  );
}
