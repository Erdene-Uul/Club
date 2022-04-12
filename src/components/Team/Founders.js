import React from "react";
import Munguu from "../../images/4.png";
import Uuganaa from "../../images/uram.png";
import Uul from "../../images/yozla.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { Pagination } from "swiper";

const Founder = () => {
  return (
    <div className="sm:max-w-6xl sm:mx-auto sm:my-16 mx-36 my-32">
      <div className=" lg:flex justify-center space-x-12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center px-5 bg-[#4392F5] w-[300px] h-[370px] rounded-[40px]  ">
              <img className="mt-6 mb-4 w-28 h-28 " src={Munguu} alt="munguu" />
              <p className="font-light text-white text-lg">Б.Мөнгөн-Эрдэнэ</p>
              <p className="font-bold text-base mb-8 text-center">
                TechChain клубын <span className="block">Co-Founder</span>
              </p>
              <p className="text-sm text-center">
                Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center px-5 bg-[#56CB7A] w-[300px] h-[370px] rounded-[40px] ">
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
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center px-5 bg-[#D7A43F] w-[300px] h-[370px] rounded-[40px] ">
              <img className="mt-6 mb-4 w-28 h-28" src={Uuganaa} alt="uram " />
              <p className="font-light  text-white text-lg">Д. Ууганбаяр</p>
              <p className="font-bold text-base mb-8 text-center">
                TechChain клубын <span className="block">Co-Founder</span>
              </p>
              <p className="text-sm text-center">
                Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Founder;
