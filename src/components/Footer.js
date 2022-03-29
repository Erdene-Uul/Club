import React from "react";
import Icons from "./icons";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="bg-[#231930]  w-full">
      <div className=" h-28 text-white  justify-around items-center flex border-b-2 px-16">
        <h1 className=" text-2xl font-bold ">TechChain</h1>
        <ul className="flex space-x-28 font-light text-xl  max-w-5xl mx-auto">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Нүүр</li>
          </Link>
          <Link
            activeClass="active"
            to="aboutus"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Бидний тухай</li>
          </Link>
          <Link
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Мэдээ</li>
          </Link>
          <Link
            activeClass="active"
            to="news"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Блог</li>
          </Link>
        </ul>
      </div>
      <Icons />
      <div className="text-white flex justify-center pb-10 mt-32">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
}
