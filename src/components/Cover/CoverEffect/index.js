import React from "react";
import CoverPhoto from "../../../images/CoverImg.png";
import Title from "../title";
import tsegImg from "../../../images/tseg.png";
import effectOne from "../../../images/effect-1.png";
import effectTwo from "../../../images/effect-2.png";
import effectThree from "../../../images/effect-3.png";

const CoverEffect = (props) => {
  return (
    <div className="bg-[#909090]/10 w-full h-full   relative m-auto" id="home">
     <div className="max-w-screen-2xl mx-auto p-4
     ">
     <div className="mx-28 ">
        <img src={tsegImg} alt="tseg" className="h-32 absolute mt-24 ml-16" />
        <div className="flex justify-between ">
          <Title />
          <div className="flex ">
            <img src={CoverPhoto} alt="cover" className="h-96 mt-12 md:h-512 xl:h-1080" />
          </div>
        </div>
      </div>
      <img src={effectOne} alt="eff1" className="h-80 -mt-44 2xl:-mt-80 absolute" />
      <img src={effectTwo} alt="eff2" className=" -mt-80 ml-512 absolute" />
      <img src={effectThree} alt="eff13" className=" ml-1080 -mt-24 2xl:-mt-44 absolute" />
     </div>
    </div>
  );
};

export default CoverEffect;
