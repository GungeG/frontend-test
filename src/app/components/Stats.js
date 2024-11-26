import Image from "next/image";

const Stats = () => {
  return (
    <div className="grid grid-cols-3 text-center py-7 mx-12">
      <div className="m-auto">
        <Image src={"/static/images/Nine-ten.png"}
        width={180}
        height={171.34}
        alt=""
        className="m-auto"/>
         <p className="font-sans font-thin italic text-xl text-blue-400">Long term sustained 
        improvement</p>
        <p className="text-black font-sans italic text-base w-72">
          9 out of 10 respondents experienced sustained disease control in
          clinical trials 10, providing sustained improvements in the burden of
          disease(1,2, 1, 8*†‡).
        </p>
        <p className=" text-co1 text-base font-sans italic mt-2">See efficacy and trial data</p>
      </div>
      <div className="m-auto">
      <Image src={"/static/images/Heart.png"}
        width={192.46}
        height={181.09}
        alt=""
        className="m-auto"/> <p className="font-sans font-thin italic text-xl text-blue-400">Improvements in the <br></br>burden of disease
        </p>
        <p className="text-black font-sans italic text-base w-72 ml-2">
          Patients in clinical trials saw an improvement in Quality of Life with
          early symptom relief and sustained improvements in burden of disease
          from week 16 to 32(12,13).
        </p>
        <p className=" text-co1 text-base font-sans italic mt-2">Learn more about quality of life improvements</p>
      </div>
      <div className="">
      <Image src={"/static/images/Shield.png"}
        width={191.69}
        height={181.67}
        alt=""
        className="m-auto"/> <p className="font-sans font-thin italic text-xl text-blue-400">Good safety profile</p>
        <p className="mt-28 text-co1 text-base font-sans italic">See safety profile </p>
      </div>
    </div>
  );
};

export default Stats;
