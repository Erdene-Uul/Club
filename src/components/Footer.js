import React from "react";
import Icons from "./icons";
import { Link } from "react-scroll";
import vector from "../images/Vector.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="bg-[#231930]  w-full">
      <div className=" h-28 text-white max-w-screen-2xl mx-auto justify-between items-center flex  px-16">
        <h1 className=" text-2xl font-bold ">TechChain</h1>
        <ul className="flex space-x-28 font-light text-xl  ">
        <li className="cursor-pointer">
        <Link  
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500} >Нүүр</Link>
        </li>
         <li className="cursor-pointer">
        <Link  
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500} >Бидний тухай</Link>
        </li>
         <li className="cursor-pointer">
        <Link  
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500} >Мэдээ</Link>
        </li>
         <li className="cursor-pointer">
        <Link  
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500} >Блог</Link>
        </li>
        </ul>
        <div  onClick={scrollToTop} className="cursor-pointer flex items-baseline  text-[#666666] text-sm">
        дээш буцах
        <img className="ml-1" src={vector} alt="vector"/>
        </div>
      </div>
      <div className="border-t-2 border-[#DBDBDB]"></div>     
       <Icons />
      <div className="text-white flex justify-center pb-10 mt-32">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
}
