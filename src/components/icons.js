import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faDiscord,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Icons() {
  return (
    <div className="text-white text-2xl md:pt-20 pt-10">
      <ul className="md:flex justify-center lg:space-x-16 space-x-10 hidden ">
        <li>
          <Link
            to={{
              pathname: "https://www.facebook.com/HureeChainClub",
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
          <Link
            to={{
              pathname: "https://github.com/Munguu0623",
            }}
            target="_blanck"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              color="white"
              className="hover:text-teal-500"
            />
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "https://www.instagram.com/hureechain/",
            }}
            target="_blanck"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="hover:text-[#bc2a8d]"
            />
          </Link>
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
      <ul className="flex justify-center space-x-10 md:hidden">
        <li>
          <Link
            to={{
              pathname: "https://www.facebook.com/HureeChainClub",
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
          <Link
            to={{
              pathname: "https://github.com/Munguu0623",
            }}
            target="_blanck"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="1x"
              color="white"
              className="hover:text-teal-500 p-5 rounded-lg"
            />
          </Link>
        </li>
        <li>
          {/* https://www.instagram.com/hureechain/ */}
          <Link
            to={{
              pathname: "https://www.instagram.com/hureechain/",
            }}
            target="_blanck"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              color="white"
              className="hover:text-[#bc2a8d] p-5 rounded-lg"
            />
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faDiscord}
            size="1x"
            color="white"
            className="hover:text-sky-600 p-5 rounded-lg"
          />
        </li>
      </ul>
    </div>
  );
}
