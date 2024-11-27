import Image from "next/image";

const KOLVideos = () => {
  return (
    <div className="bg-gray-200">
    <div className="w-4/5 py-12 m-auto">
        <h2 className="font-sans italic font-thin text-3xl text-blue-400">KOL Videos - get expert insights here</h2>
        <p className="text-base font-sans italic font-thin text-black mt-1 mb-10">See what Key opinion leaders have to say about their experiences with Adtralza® </p>
      <div className="grid grid-cols-2 grid-rows-2 m-auto gap-5">
        <div className="grid grid-cols-2">
          <div className="mr-2">
            <Image
              src={"/static/images/Frame.svg"}
              alt="Injection"
              width={252}
              height={145}
              className="bg-white"
            />
          </div>
          <div>
            <p className="text-base font-sans italic font-thin text-blue-400">
              Video title
            </p>
            <p className="text-base font-sans italic font-thin text-black">
              Short description of the contents or subject of the video. You can
              upload a screen from the video as thumbnail image
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-2">
            <Image
              src={"/static/images/Frame.svg"}
              alt="Injection"
              width={252}
              height={145}
              className="bg-white"
            />
          </div>
          <div>
            <p className="text-base font-sans italic font-thin text-blue-400">
              Video title
            </p>
            <p className="text-base font-sans italic font-thin text-black">
              Short description of the contents or subject of the video. You can
              upload a screen from the video as thumbnail image
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-2">
            <Image
              src={"/static/images/Frame.svg"}
              alt="Injection"
              width={252}
              height={145}
              className="bg-white"
            />
          </div>
          <div>
            <p className="text-base font-sans italic font-thin text-blue-400">
              Video title
            </p>
            <p className="text-base font-sans italic font-thin text-black">
              Short description of the contents or subject of the video. You can
              upload a screen from the video as thumbnail image
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mr-2" >
            <Image
              src={"/static/images/Frame.svg"}
              alt="Injection"
              width={252}
              height={145}
              className="bg-white"
            />
          </div>
          <div>
            <p className="text-base font-sans italic font-thin text-blue-400">
              Video title
            </p>
            <p className="text-base font-sans italic font-thin text-black">
              Short description of the contents or subject of the video. You can
              upload a screen from the video as thumbnail image
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default KOLVideos;
