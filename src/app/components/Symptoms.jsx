import Image from "next/image";

const Symptoms = () => {
  return (
    <div className="bg-gray-200 py-5">
      <h2 className="font-sans mb-32 italic font-thin text-3xl text-blue-400 ml-24">
        Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and
        symptoms.
      </h2>
      <p className="text-base font-sans italic font-thin text-black col-span-2 ml-24 mb-8">
          By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
          interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2).{" "}
        </p>
      <div className=" sm:grid grid-cols-2">
        <div className="ml-24">
 
        <p className="text-base font-sans italic font-thin text-black mb-8">
          Adtralza® selectively modulates the dysregulated immune system by(1):
        </p>
        <ul className="text-base font-sans italic font-thin text-black ">
          <li>— Reducing markers of skin inflammation</li>
          <li>— Improving markers of skin barrier integrity</li>
          <li>— Reducing epidermal thickness</li>
        </ul>
        <button className="w-56 text-xl bg-co1 text-white font-sans italic font-thin p-3 rounded-full mt-24">
            Watch the video
        </button>
        <p className="font-sans italic font-thin text-sm text-black mt-4">Duration: 2:43</p>
        </div>
        <div className="m-2">
        <Image
        src={"/static/images/Molecules.png"} 
        width={712}
        height={400.5}
        style={{ objectFit: "cover" }}
        alt="Molecules" 
        className=""
      />
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
