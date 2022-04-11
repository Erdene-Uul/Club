import React from "react";
import Munguu from "../../images/4.png";
import Uuganaa from "../../images/uram.png";
import Uul from "../../images/yozla.png";
import Carousel from "react-elastic-carousel";

const Founder = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];

  return (
    <div className="max-w-6xl mx-auto my-16">
      <div className=" lg:flex justify-center space-x-12 ">
        <Carousel
          disableArrowsOnEnd={true}
          breakPoints={breakpoints}
          itemPadding={[10, 30]}
        >
          <div className="flex flex-col items-center px-5 bg-[#4392F5] w-[300px] h-[370px] rounded-[40px] transform transition duration-500 hover:scale-110 ">
            <img className="mt-6 mb-4 w-28 h-28 " src={Munguu} alt="munguu" />
            <p className="font-light text-white text-lg">Б.Мөнгөн-Эрдэнэ</p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 bg-[#56CB7A] w-[300px] h-[370px] rounded-[40px] transform transition duration-500 hover:scale-110">
            <img className="mt-6 mb-4 w-28 h-28" src={Uul} alt="uul" />
            <p className="font-light  text-white text-lg text-center">
              З. Эрдэнэ-Уул
            </p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 bg-[#D7A43F] w-[300px] h-[370px] rounded-[40px] transform transition duration-500 hover:scale-110">
            <img className="mt-6 mb-4 w-28 h-28" src={Uuganaa} alt="uram " />
            <p className="font-light  text-white text-lg">Д. Ууганбаяр</p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Founder;
