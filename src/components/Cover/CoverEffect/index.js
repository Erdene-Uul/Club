import React, { useEffect } from "react";
import CoverPhoto from "../../../images/CoverImg.png";
import Title from "../title";
import tsegImg from "../../../images/tseg.png";
import effectOne from "../../../images/effect-1.png";
import effectTwo from "../../../images/effect-2.png";
import effectThree from "../../../images/effect-3.png";
import CoverAnim from "../coveranim";
import ScrollReveal from "scrollreveal";

const CoverEffect = (props) => {
  useEffect(() => {
    ScrollReveal().reveal("#coverimg", {
      delay: 1000,
      origin: "top",
      duration: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    });
  }, []);
  return (
    <div className="bg-[#909090]/10 w-full h-full   relative m-auto" id="home">
      <CoverAnim />
      <div className="2xl:max-w-screen-2xl lg:max-w-screen-lg mx-auto pb-4 sm:max-w-2xl  max-w-md">
        <div className="2xl:mx-28 px-6">
          <img
            src={tsegImg}
            alt="tseg"
            className="hidden sm:block lg:h-40 2xl:h-64 h-32 absolute mt-24 sm:ml-7 lg:ml-28"
          />
          <div className="flex justify-between">
            <Title />
            <div className=" ">
              <img
                src={CoverPhoto}
                alt="cover"
                className="h-80 lg:mt-12 mt-10 sm:h-[450px] md:h-512 xl:h-1080  "
                id="coverimg"
              />
            </div>
          </div>
        </div>
        <img
          src={effectOne}
          alt="eff1"
          className="2xl:h-80 xl:h-60 -mt-40 h-32 sm:h-36 xl:-mt-72 sm:-mt-52 lg:-mt-44 2xl:-mt-80 absolute"
        />
        <img
          src={effectTwo}
          alt="eff2"
          className="h-6 sm:h-8 sm:ml-56 sm:-mt-64 ml-32 -mt-44 2xl:h-auto lg:h-10 lg:-mt-52 xl:-mt-96 lg:ml-96 2xl:-mt-72 2xl:ml-512 absolute"
        />
        <img
          src={effectThree}
          alt="eff13"
          className="h-16 sm:h-20  ml-36 -mt-24 sm:ml-72 lg:h-24 xl:h-32 xl:ml-[480px]  2xl:h-auto lg:ml-[600px] 2xl:ml-1080 lg:-mt-40 2xl:-mt-44 absolute"
        />
      </div>
    </div>
  );
};

export default CoverEffect;
