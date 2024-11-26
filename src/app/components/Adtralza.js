import Image from "next/image";

const Adtralza = () => {
  return (
    <div className="Adtralza">
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
      <Image
        src={"/static/images/Mask-Group.png"}
        width={1442}
        height={405}
        alt="Mask-Group"
      />
    </div>
  );
};

export default Adtralza;
