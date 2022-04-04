import React from "react";
import { Link } from "react-scroll";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../Sidebar";

const Navbar = (props) => {
  return (
    <nav className="top-0 left-0 w-full h-12 bg-[#1C1C28] fixed z-40">
      <div className="flex items-center lg:justify-between justify-center h-12 bg-[#1C1C28] z-40 max-w-screen-2xl mx-auto">
        <div className="fixed top-3 left-3 z-50">
          {" "}
          <button onClick={props.toggleSideBar} className="lg:hidden">
            {props.showSideBar ? (
              <FontAwesomeIcon className="text-white" icon={faAngleLeft} />
            ) : (
              <FontAwesomeIcon className="text-white" icon={faBars} />
            )}
          </button>
        </div>
        {props.showSideBar ? (
          <Sidebar
            showSideBar={props.showSideBar}
            toggleSideBar={props.toggleSideBar}
          />
        ) : null}
        <h2 className=" text-white font-semibold">TechChain</h2>
        <ul className=" lg:flex hidden  items-center text-white font-light text-xs space-x-10">
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

          {/* <Link to="/" className="">
          <li>Холбоо барих</li>
        </Link> */}
        </ul>
        <div className=" hidden  lg:flex justify-end ">
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
