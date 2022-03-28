import React, { useEffect } from "react";
import AboutUs from "../../components/AboutUs";
import Team from "../../components/Team";
import Info from "../../components/Info";
import { Link } from "react-router-dom";
import News from "../../components/News";
import HomePage from "../HomePage";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#1C1C28] w-full h-full font-Roboto ">
      <HomePage />
      <AboutUs />
      <Team />
      <Info />
      <div className="flex justify-center my-20">
        <Link to="/contact">
          <button className="border rounded-full text-white font-bold text-3xl h-16 px-11 hover:bg-gradient-to-tr from-buttonColor1 to-buttonColor2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-none ">
            Холбоо барих
          </button>
        </Link>
      </div>
      <News />
    </div>
  );
}
