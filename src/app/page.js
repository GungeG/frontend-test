import Image from "next/image";
import Adtralza from "./components/Adtralza";
import Package from "./components/Package";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div>
      <Adtralza />
      <Package />
      <Stats />
    </div>
  );
}
