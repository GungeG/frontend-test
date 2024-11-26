import Image from "next/image";

const Package = () => {
  return (
    <div className="grid grid-cols-2 py-8 bg-gray-200">
        <div className="m-auto">
      <Image
        src={"/static/images/Adtralza-package.png"}
        width={445}
        height={351}
        alt="Adtralza-package"
        className="ml-20"
      />
        </div>
      <div className="m-auto w-128">
        <p className="font-sans italic font-thin text-3xl text-blue-400">
          It is the first and only biologic developed to specifically neutralize
          IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)
        </p>
        <p className="mt-6 text-black font-sans italic text-lg">
          Learn more about how Adtralza® works and how to use it in treatment.
        </p>
      </div>
    </div>
  );
};

export default Package;
