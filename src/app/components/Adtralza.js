import Image from "next/image";

const Adtralza = () => {
  return (
    <div className="Adtralza relative">
      <Image
        src={"/static/images/Mask-Group.png"}
        width={1920}
        height={1080}
        alt="Mask-Group"
        className="w-full h-full object-cover"
      />
      <div className="ml-32 absolute top-8">
        <Image
          src={"/static/images/Adtralza-global.png"}
          width={122.68}
          height={86.97}
          alt="Adtralza-global"
          className=""
        />
        <p className="text-3xl font-thin text-white mt-6 font-sans italic w-128">
          Adtralza® is a new treatment for adult patients with<br></br>
          moderate-to-severe atopic dermatitis (eczema) who are candidates for
          systemic therapy.
        </p>
      </div>
    </div>
  );
};

export default Adtralza;
