'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu
  const [showSubMenu, setShowSubMenu] = useState(false); // State to show/hide sub section menu
  const [activeButton, setActiveButton] = useState(null); // State to track the active button
  const [activeNavButton, setActiveNavButton] = useState(null); // State to track the active nav button

  // Handler for showing section menu
  const handleNavigationClick = (menu) => {
    setActiveMenu(menu);
    setActiveNavButton(menu);
    setShowSubMenu(false); // Ensure sub-section menu is hidden initially
  };

  // Handler for showing the sub-section menu
  const handleSubMenuClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowSubMenu(true);
  };

  return (
    <header className="">
      <div className="w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-between py-4">
          <div className="text-lg font-bold ml-32">
            <Image
              src={"/static/images/DermaWorld.svg"}
              width={122.68}
              height={86.97}
              alt="Adtralza-global"
              className=""
            />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2 text-sm mr-96"
          />
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-between border-b mt-4 py-4">
          <div className="flex space-x-4 text-sm ml-32">
            <button
              className={`text-black font-sans text-lg font-normal ${activeNavButton === 'Bedingungen' ? 'underline italic' : 'hover:underline'}`}
              onClick={() => handleNavigationClick('Bedingungen')}
            >
              Bedingungen
            </button>
            <button
              className={`text-black font-sans text-lg font-normal ${activeNavButton === 'Behandlungen' ? 'underline italic' : 'hover:underline'}`}
              onClick={() => handleNavigationClick('Behandlungen')}
            >
              Behandlungen
            </button>
            <button
              className={`text-black font-sans text-lg font-normal ${activeNavButton === 'Veranstaltungen' ? 'underline italic' : 'hover:underline'}`}
              onClick={() => handleNavigationClick('Veranstaltungen')}
            >
              Veranstaltungen
            </button>
            <button
              className={`text-black font-sans text-lg font-normal ${activeNavButton === 'Werkzeuge' ? 'underline italic' : 'hover:underline'}`}
              onClick={() => handleNavigationClick('Werkzeuge')}
            >
              Werkzeuge
            </button>
            <button
              className={`text-black font-sans text-lg font-normal ${activeNavButton === 'Forschung und Erkenntnisse' ? 'underline italic' : 'hover:underline'}`}
              onClick={() => handleNavigationClick('Forschung und Erkenntnisse')}
            >
              Forschung und Erkenntnisse
            </button>
          </div>
        </nav>

        {/* Section Menu */}
        {activeMenu && (
          <nav className="flex justify-between border-b py-4 bg-gray-100">
            <div className="flex space-x-4 text-sm ml-32">
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Adtralza' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Adtralza')}
              >
                Adtralza
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Diavonex' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Diavonex')}
              >
                Diavonex
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Diavobet' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Diavobet')}
              >
                Diavobet
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Enstilar' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Enstilar')}
              >
                Enstilar
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Fucidin' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Fucidin')}
              >
                Fucidin
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Kyntheum' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Kyntheum')}
              >
                Kyntheum
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Protopic' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Protopic')}
              >
                Protopic
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Skinoren' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Skinoren')}
              >
                Skinoren
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Tralokinumab' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Tralokinumab')}
              >
                Tralokinumab
              </button>
              <button
                className={`font-sans text-lg font-normal text-blue-800 ${activeButton === 'Xamiol' ? 'underline italic' : 'hover:underline'}`}
                onClick={() => handleSubMenuClick('Xamiol')}
              >
                Xamiol
              </button>
            </div>
          </nav>
        )}

        {/* Sub Section Menu */}
        {showSubMenu && (
          <nav className="flex justify-between border-b bg-blue-800 py-4">
            <div className="flex space-x-4 text-sm ml-32">
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Overview
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Mode of Action
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Efficacy
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Quality of Life
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Safety
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Dosing
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                News
              </Link>
              <Link href="#" className="hover:underline text-white font-sans text-lg font-normal">
                Technical Information
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
