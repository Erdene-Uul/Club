import React from "react";
import { Link } from "react-scroll";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full m-auto h-12 bg-[#1C1C28] fixed z-50">
      <h2 className="ml-8 text-white font-semibold">TechChain</h2>
      <ul className=" md:flex hidden md:ml-28 lg:ml-64 w-5/12 justify-around items-center text-white font-light text-xs">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li className="cursor-pointer">Нүүр</li>
        </Link>
        <Link
          activeClass="active"
          to="aboutus"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li className="cursor-pointer">Бидний тухай</li>
        </Link>
        <Link
          activeClass="active"
          to="news"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li className="cursor-pointer">Мэдээ</li>
        </Link>
        <Link
          activeClass="active"
          to="news"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li className="cursor-pointer">Блог</li>
        </Link>
        {/* <Link to="/" className="">
          <li>Холбоо барих</li>
        </Link> */}
      </ul>
      <div className=" hidden md:w-2/4 lg:w-3/6 md:flex justify-end ">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
