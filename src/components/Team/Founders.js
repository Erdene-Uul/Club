import React from "react";
import Uuganaa from "../../images/uram.png";
import Uul from "../../images/yozla.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ClubFounders from "../ClubFounders";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Founder = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 ">
      <div className=" flex justify-center items-center ">
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
            <ClubFounders
              image="Munguu"
              name="Б.Мөнгөн-Эрдэнэ"
              about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
              color="#4392F5"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ClubFounders
              image="yozla"
              name="З. Эрдэнэ-Уул"
              about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
              color="#56CB7A"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ClubFounders
              image="uram"
              name="Д. Ууганбаяр"
              about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
              color="#D7A43F"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Founder;
