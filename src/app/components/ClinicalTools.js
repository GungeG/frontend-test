import Image from "next/image";

const ClinicalTools = () => {
  return (
    <div className="px-4 py-12">
      <h2 className="font-sans italic font-thin text-3xl text-blue-400 ml-32">
        Clinical tools - at a glance
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {/* Card 1 */}
        <div className="bg-gray-200 shadow-md border rounded-lg w-96">
          <Image
            src={"/static/images/Doctor.png"} // Replace with the actual path to your image
            alt="Nurse"
            width={520}
            height={200}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-sans font-thin italic text-xl text-blue-400 mb-2">
              Dosing guide
            </h3>
            <p className="text-base font-sans italic font-thin text-black mb-4">
              Adtralza® has a straightforward dosing regimen, with 150 mg
              prefilled syringes.
            </p>
            <a
              href="#"
              className="text-co1 text-base font-sans italic hover:underline"
            >
              Learn more about application and dosing
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 shadow-md border rounded-lg w-96">
          <Image
            src={"/static/images/Thigh.png"} // Replace with the actual path to your image
            alt="Injection"
            width={520}
            height={300}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-sans font-thin italic text-xl text-blue-400 mb-2">
              Patient injection made simple
            </h3>
            <p className="text-base font-sans italic font-thin text-black mb-4">
              This step-by-step video guide shows the patient how to self-inject
              using the two syringes that come in the Adtralza® carton.
            </p>
            <a
              href="#"
              className="text-co1 text-base font-sans italic hover:underline"
            >
              Watch the video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalTools;
