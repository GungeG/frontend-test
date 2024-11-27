import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-h text-white pt-20 pb-3">
      <div className="container mx-auto px-4 py-2 w-4/5">
        <div className="flex justify-between items-center">
          <Image src={"/static/images/LEO-logo.png"} 
          width={91}
          height={91}
          alt="Logo"
          className="mb-16"/>
          
          <p className="text-right text-sm w-64 font-sans italic font-thin">
            © Copyright LEO Pharma 2020 <br />
            LEO and the LEO Lion Design
            <br /> are registered trademarks
            <br /> of LEO Pharma.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="flex justify-end">
          <a
            href="https://www.leo-pharma.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline mt-2 font-sans italic font-thin text-sm"
          >
            LEO Pharma corporate website
          </a>
        </div>
        <div className="flex justify-center mt-6 space-x-4 text-sm font-sans font-normal">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Imprint
          </a>
          <a href="#" className="hover:underline">
            Conditions
          </a>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookie content
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
