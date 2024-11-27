import Image from "next/image";

const References = () => {
  return (
    <div className="bg-gray-300  py-4 border-t-white">
    <div className="flex w-4/5 m-auto">
        <Image 
        src={"/static/images/Reference.svg"}
        width={50}
        height={50}
        alt="Reference"
        />
        <h2 className="font-sans italic font-thin text-xl text-blue-400 ml-5">References</h2>
    </div>
    </div>
  );
};

export default References;
