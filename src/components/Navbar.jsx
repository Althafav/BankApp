import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full relative flex py-6  justify-between items-center navbar">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <ul
          className={`${
            toggle ? "block" : "hidden"
          } bg-black-gradient absolute top-20 right-0 min-w-[140px] rounded-xl sidebar`}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className=" font-poppins font-normal cursor-pointer text-white  hover:bg-gray-600 hover:text-white w-full rounded-xl"
            >
              <a href={`#${nav.id}`} className="px-4 py-2  w-full block">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
