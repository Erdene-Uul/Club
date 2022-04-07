import React from "react";
import Icons from "./icons";
import { Link } from "react-scroll";
import vector from "../images/Vector.png";
import logo from "../images/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#231930]  w-full">
      <div className=" lg:h-28 h-14 text-white 2xl:max-w-screen-2xl mx-auto sm:justify-between justify-end items-center flex  lg:px-16">
        <img
          src={logo}
          className="h-16 hidden sm:block ml-6 lg:ml-0 "
          alt="logoo"
        />
        <ul className=" 2xl:space-x-28 lg:space-x-16 font-light text-xl  hidden lg:flex">
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Нүүр
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              duration={500}
            >
              Бидний тухай
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              duration={500}
            >
              Мэдээ
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              activeClass="active"
              to="news"
              spy={true}
              smooth={true}
              duration={500}
            >
              Блог
            </Link>
          </li>
        </ul>
        <div
          onClick={scrollToTop}
          className="cursor-pointer flex items-baseline justify-end  text-xs text-[#666666] md:text-sm mr-7 lg:mr-0"
        >
          дээш буцах
          <img className="ml-1 h-6" src={vector} alt="vector" />
        </div>
      </div>
      <div className="border-t-2 border-[#DBDBDB]"></div>

      <Icons />
      <div className="flex items-center justify-center mt-10">
        <img src={logo} className="h-16 md:hidden " alt="logoo" />
      </div>
      <div className="text-white flex justify-center text-center mx-auto md:w-auto sm:w-96 text-sm md:text-base pb-10 lg:mt-20  mt-10 px-6">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
}
