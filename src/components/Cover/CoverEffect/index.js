import React from "react";
import CoverPhoto from "../../../images/CoverImg.png";
import Title from "../title";
import tsegImg from "../../../images/tseg.png";
import effectOne from "../../../images/effect-1.png";
import effectTwo from "../../../images/effect-2.png";
import effectThree from "../../../images/effect-3.png";

const CoverEffect = (props) => {
  return (
    <div className="bg-[#909090]/10 w-full h-screen relative m-auto">
      <img src={tsegImg} className="h-32 absolute mt-24 ml-16" />
      <div className="flex">
        <Title />
        <img src={CoverPhoto} className="h-96 mt-12 md:h-512 xl:h-1080" />
      </div>
      <img src={effectOne} className="h-80 -mt-44 2xl:-mt-80 absolute" />
      <img src={effectTwo} className=" -mt-80 ml-512 absolute" />
      <img src={effectThree} className=" ml-1080 -mt-24 2xl:-mt-44 absolute" />
    </div>
  );
};

export default CoverEffect;
