import React from "react";
import {
  BeakerIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/" },
    { name: "Benefits", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [isOpen, setisOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo Here */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <BeakerIcon className="w-7 h-7 text-blue-600" />
          <span className="font-bold">Responsive navbar</span>
        </div>
        {/* menu bar */}
        <div
          onClick={() => setisOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* nav links here */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto
            z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen ? "top-12" : "top-[-490px] text-lg"
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-10 md:my-0 md:ml-12">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
