import React from "react";
import Azaa from "../../images/AzbayarMunkhbayar.jpg";
import Youngmi from "../../images/YoungMiKim.jpg";
import Shim from "../../images/KwangCheolShin.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const Advisor = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="my-16 flex justify-center space-x-12 max-w-6xl mx-auto">
          <div className="flex gap-8">
            {/* Youngmi techear */}
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <div
                  className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
                  href=""
                >
                  <img
                    src={Youngmi}
                    className="w-full rounded shadow"
                    alt="youngmi pro"
                  />

                  <h3 className="text-gray-200 font-bold mt-5">
                    {" "}
                    PHD, КИМ ЮУНГМИ
                  </h3>

                  <p className="text-gray-400 font-light mt-2 text-xs">
                    {" "}
                    Компьютерийн Шинжилэх Ухааны тэнхимийн эрхлэгч багш
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Azbayar */}
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <div
                  className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
                  href=""
                >
                  <img
                    src={Azaa}
                    className="w-full rounded shadow"
                    alt="azaa pro"
                  />

                  <h3 className="text-gray-200 font-bold mt-5">
                    {" "}
                    МАСТЕР М. АЗБАЯР
                  </h3>

                  <p className="text-gray-400 font-light mt-2 text-xs">
                    {" "}
                    Компьютерийн Шинжилэх Ухааны тэнхимийн багш
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Shim */}
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <div
                  className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
                  href=""
                >
                  <img
                    src={Shim}
                    className="w-full rounded shadow"
                    alt="shim pro"
                  />

                  <h3 className="text-gray-200 font-bold mt-5">
                    {" "}
                    PHD, ШИН КВАНГЧЁОЛ
                  </h3>

                  <p className="text-gray-400 font-light mt-2 text-xs">
                    {" "}
                    Компьютерийн Шинжилэх Ухааны тэнхимийн багш
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Otgoo */}
            {/* Shim */}
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <div
                  className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
                  href=""
                >
                  <img
                    src={Shim}
                    className="w-full rounded shadow"
                    alt="shim2 pro"
                  />

                  <h3 className="text-gray-200 font-bold mt-5">
                    {" "}
                    PHD, ШИН КВАНГЧЁОЛ
                  </h3>

                  <p className="text-gray-400 font-light mt-2 text-xs">
                    {" "}
                    Компьютерийн Шинжилэх Ухааны тэнхимийн багш
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Otgoo */}
            {/* Shim */}
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <div
                  className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
                  href=""
                >
                  <img
                    src={Shim}
                    className="w-full rounded shadow"
                    alt="shim3 pro"
                  />

                  <h3 className="text-gray-200 font-bold mt-5">
                    {" "}
                    PHD, ШИН КВАНГЧЁОЛ
                  </h3>

                  <p className="text-gray-400 font-light mt-2 text-xs">
                    {" "}
                    Компьютерийн Шинжилэх Ухааны тэнхимийн багш
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
export default Advisor;
