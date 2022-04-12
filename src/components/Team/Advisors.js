import React from "react";
import Carousel from "react-elastic-carousel";
import Azaa from "../../images/AzbayarMunkhbayar.jpg";
import Youngmi from "../../images/YoungMiKim.jpg";
import Shim from "../../images/KwangCheolShin.jpg";

const Advisor = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className="my-16 flex justify-center space-x-12 max-w-6xl mx-auto">
      <div className="flex gap-8">
        <Carousel
          disableArrowsOnEnd={true}
          breakPoints={breakpoints}
          itemPadding={[10, 30]}
        >
          {/* Youngmi techear */}
          <div className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group flex items-center justify-center">
            <img
              src={Youngmi}
              className="w-full rounded shadow"
              alt="youngmi pro"
            />

            <h3 className="text-gray-200 font-bold mt-5"> PHD, КИМ ЮУНГМИ</h3>

            <p className="text-gray-400 font-light mt-2 text-xs">
              {" "}
              Компьютерийн Шинжилэх Ухааны тэнхимийн эрхлэгч багш
            </p>
          </div>

          {/* Azbayar */}
          <div className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group flex items-center justify-center">
            <img src={Azaa} className="w-full rounded shadow" alt="azaa pro" />

            <h3 className="text-gray-200 font-bold mt-5"> МАСТЕР М. АЗБАЯР</h3>

            <p className="text-gray-400 font-light mt-2 text-xs">
              {" "}
              Компьютерийн Шинжилэх Ухааны тэнхимийн багш
            </p>
          </div>

          {/* Shim */}
          <div className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group flex items-center justify-center">
            <img src={Shim} className="w-full rounded shadow" alt="shim pro" />

            <h3 className="text-gray-200 font-bold mt-5">
              {" "}
              PHD, ШИН КВАНГЧЁОЛ
            </h3>

            <p className="text-gray-400 font-light mt-2 text-xs">
              {" "}
              Компьютерийн Шинжилэх Ухааны тэнхимийн багш
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Advisor;
