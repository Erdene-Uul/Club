import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ClubAdvisors from "../ClubAdvisors";

import { Pagination } from "swiper";
const Advisor = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-16">
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
        <div className="mt-16 flex justify-center space-x-12 max-w-6xl mx-auto">
          <div className="flex gap-8">
            {/* Youngmi teacher */}
            <SwiperSlide>
              <ClubAdvisors
                name="PHD, КИМ ЮУНГМИ"
                about="Компьютерийн Шинжилэх Ухааны тэнхимийн эрхлэгч багш"
                image="YoungMiKim"
              />
            </SwiperSlide>
            {/* Shim */}
            <SwiperSlide>
              <ClubAdvisors
                name="PHD, ШИН КВАНГЧЁОЛ"
                about="Компьютерийн Шинжилэх Ухааны тэнхимийн багш"
                image="KwangCheolShin"
              />
            </SwiperSlide>
            {/* Azbayar */}
            <SwiperSlide>
              <ClubAdvisors
                name="MS, М. АЗБАЯР"
                about=" Компьютерийн Шинжилэх Ухааны тэнхимийн багш"
                image="AzbayarMunkhbayar"
              />
            </SwiperSlide>

            {/* Отгон-баатар */}
            <SwiperSlide>
              <ClubAdvisors
                name="MS, Ю. ОТГОН-БААТАР"
                about="Мэдээлэл холбооны тэнхимийн эрхлэгч"
                image="otgonbaatarYura"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ClubAdvisors
                name="PHD, ШИН КВАНГЧЁОЛ"
                about="Компьютерийн Шинжилэх Ухааны тэнхимийн багш"
                image="KwangCheolShin"
              />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
export default Advisor;
