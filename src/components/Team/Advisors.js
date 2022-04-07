import React from "react";
import img1 from "../../images/photo.png";
import img2 from "../../images/earth.png";
import img3 from "../../images/moon.png";
import Carousel from "react-elastic-carousel";

const Advisor = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className="my-16 flex justify-center space-x-12 max-w-6xl mx-auto">
      <Carousel
        disableArrowsOnEnd={true}
        breakPoints={breakpoints}
        itemPadding={[10, 30]}
      >
        <div className="flex flex-col items-center px-5 bg-[#43f56a] w-[300px] h-[370px] rounded-[40px]">
          <img className="mt-6 mb-4 w-28 h-28" src={img1} alt="munguu" />
          <p className="font-light text-white text-lg">Mss.Rosie</p>
          <p className="font-bold text-base mb-8 text-center">
            TechChain клубын <span className="block">Advisor</span>
          </p>
          <p className="text-sm text-center">
            Хүрээ дээд сургуулийн компьютерийн ухааны 4-р дамжааны оюутан.
          </p>
        </div>
        <div className="flex flex-col items-center px-5 bg-[#cb8156] w-[300px] h-[370px] rounded-[40px]">
          <img className="mt-6 mb-4 w-28 h-28" src={img2} alt="uul" />
          <p className="font-light  text-white text-lg">Mr.John</p>
          <p className="font-bold text-base mb-8 text-center">
            TechChain клубын <span className="block">Advisor</span>
          </p>
          <p className="text-sm text-center">
            Хүрээ дээд сургуулийн компьютерийн ухааны 23-р дамжааны оюутан.
          </p>
        </div>
        <div className="flex flex-col items-center px-5 bg-[#7e3fd7] w-[300px] h-[370px] rounded-[40px]">
          <img className="mt-6 mb-4 w-28 h-28" src={img3} alt="uram " />
          <p className="font-light  text-white text-lg">Mr.Bean</p>
          <p className="font-bold text-base mb-8 text-center">
            TechChain клубын <span className="block">Advisor</span>
          </p>
          <p className="text-sm text-center">
            Хүрээ дээд сургуулийн компьютерийн ухааны 3-р дамжааны оюутан.
          </p>
        </div>
      </Carousel>
    </div>
  );
};
export default Advisor;
