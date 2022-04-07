import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDiscord,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Shadow from "./shadow";

const Sidebar = (props) => {
  return (
    <div>
      <div className="lg:hidden">
        {props.showSideBar && <Shadow toggleSideBar={props.toggleSideBar} />}
      </div>
      <div
        onClick={props.toggleSideBar}
        className="fixed h-full w-2/3 sm:w-2/4 lg:hidden bg-[#1C1C28] top-0 left-0 z-40 font-Roboto text-[#252641]"
      >
        <div className="flex justify-center items-center my-1">
          {" "}
          <img src={logo} className="h-8  " alt="logoo" />
        </div>

        <div className="mx-auto border-t-2 w-4/5  h-4 border-[#DBDBDB]"></div>
        <ul className="mx-8 mb-4 space-y-4 text-sm text-white">
          <li className="cursor-pointer">
            <Link
              onClick={props.toggleSideBar}
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
              onClick={props.toggleSideBar}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              Бидний тухай
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              onClick={props.toggleSideBar}
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
              onClick={props.toggleSideBar}
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
        <div className="mx-auto border-b-2 w-4/5 h-4 border-[#DBDBDB]"></div>

        <ul className="flex justify-center">
          <li>
            <Link
              onClick={props.toggleSideBar}
              to={{
                pathname: "https://www.facebook.com/Basarmn-110141001402215/",
              }}
              target="_blanck"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="1x"
                color="white"
                className="hover:text-[#3b5998] p-5 rounded-lg"
              />
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleSideBar}>
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                color="white"
                className="hover:text-teal-500 p-5 rounded-lg"
              />
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleSideBar}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                color="white"
                className="hover:text-[#bc2a8d] p-5 rounded-lg"
              />
            </Link>
          </li>
          <li>
            <Link onClick={props.toggleSideBar}>
              <FontAwesomeIcon
                icon={faDiscord}
                size="1x"
                color="white"
                className="hover:text-sky-600 p-5 rounded-lg"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
