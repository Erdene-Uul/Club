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
  );
}
