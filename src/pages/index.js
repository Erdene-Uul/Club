import React from "react";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import News from "../components/News";
import CoverEffect from "../components/Cover/CoverEffect";
import Navbar from "../components/Cover/navbar";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div className="bg-[#1C1C28] w-full h-full font-Roboto z-10">
      <Navbar />
      <CoverEffect />
      <AboutUs />
      <Team />
      <Info />
      <div className="flex justify-center my-20">
        <Link to="/contact">
          <button className="border rounded-full text-white font-bold text-3xl h-16 px-11">
            Холбоо барих
          </button>
        </Link>
      </div>
      <News />
      <Footer />
    </div>
  );
}
