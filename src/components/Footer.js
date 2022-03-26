import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDiscord,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#231930]  w-full">
      <div className=" h-28 text-white  justify-around items-center flex border-b-2 px-16">
        <h1 className=" text-2xl font-bold ">TechChain</h1>
        <ul className="flex space-x-28 font-light text-xl  max-w-5xl mx-auto">
          <li>Нүүр</li>
          <li>Бидний тухай</li>
          <li>Мэдээ</li>
          <li>Блог</li>
        </ul>
      </div>
      <div className="text-white text-2xl pt-20">
        <ul className="flex justify-center space-x-16">
          <li>
            <Link
              to={{
                pathname: "https://www.facebook.com/Basarmn-110141001402215/",
              }}
              target="_blanck"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                color="white"
                className="hover:text-[#3b5998]"
              />
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              color="white"
              className="hover:text-teal-500"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="hover:text-[#bc2a8d]"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              color="white"
              className="hover:text-sky-600"
            />
          </li>
        </ul>
      </div>
      <div className="text-white flex justify-center pb-10 mt-32">
        Copyright ©2022 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
}
