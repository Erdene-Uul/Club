import React, { useEffect } from "react";
import photo from "../images/photo.png";
import ScrollReveal from "scrollreveal";

export default function AboutUs(props) {
  useEffect(() => {
    ScrollReveal().reveal("#about", {
      delay: 500,
      origin: "top",
      duration: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    });
    ScrollReveal().reveal("#about2", {
      delay: 500,
      origin: "right",
      duration: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    });
  }, []);
  return (
    <div
      className="flex lg:flex-row flex-col justify-center max-w-6xl mx-auto items-center lg:mt-44 mt-10 mb-32 z-50 md:px-8"
      id="aboutus"
    >
      <img
        src={photo}
        alt="zurg"
        className="lg:max-w-xl lg:h-[450px] sm:h-80 h-64 lg:mt-12 xl:mt-0 xl:mr-24 lg:mr-16 "
        id="about"
      />
      <div className="text-white" id="about2">
        <h1 className="font-bold lg:mx-2 lg:mb-6 text-center lg:text-left lg:text-5xl lg:my-0 my-10 text-4xl font-Roboto">
          Бидний тухай
        </h1>
        <div
          className="mb-5 flex flex-row justify-start items-center px-7 py-3 rounded-3xl bg-[#C4C4C4]/10
        max-w-xl "
        >
          <div
            className={`flex justify-center items-center bg-[#C4C4C4]/25 py-2 px-4 mr-6 rounded-full font-bold text-[#4392F5] text-5xl`}
          >
            1
          </div>
          <div className="text-white">
            <h1 className="font-bold">Бидний тухай</h1>
            <p className="text-xs sm:text-sm">
              Хүрээ МХТС-ийн Мэдээллийн Технологийн тэнхимийн дэргэдэх клуб
              бөгөөд Манай клубийн үйл ажиллагаа бол оюутнуудад чиглэсэн
              сургалт, бусад үйл ажиллагааг тогтмол зохион байгуулах юм.
            </p>
          </div>
        </div>
        <div
          className="mb-5 flex flex-row justify-start items-center px-7 py-3 rounded-3xl bg-[#C4C4C4]/10 
        max-w-xl "
        >
          <div
            className={`flex justify-center items-center bg-[#C4C4C4]/25 py-2 px-4 mr-6 rounded-full font-bold text-[#56CB7A] text-5xl`}
          >
            2
          </div>
          <div className="text-white">
            <h1 className="font-bold">Үнэт зүйл</h1>
            <p className="text-xs sm:text-sm">
              Шинэ санааг илэрхийлэх, судлах,танин мэдэх, бүтээх.Сурж мэдсэн
              зүйлээ бусаддаа хуваалцах, бусдаас суралцах.Mentor, menteen-тэй
              харилцаа холбоо.
            </p>
          </div>
        </div>
        <div
          className="mb-5 flex flex-row justify-start items-center px-7 py-3 rounded-3xl bg-[#C4C4C4]/10
        max-w-xl "
        >
          <div
            className={`flex justify-center items-center bg-[#C4C4C4]/25 py-2 px-4 mr-6 rounded-full font-bold text-[#E6682D] text-5xl`}
          >
            3
          </div>
          <div className="text-white">
            <h1 className="font-bold">Алсын хараа</h1>
            <p className="text-xs  sm:text-sm">
              Оюутан залуусын шинжлэх ухаанч сэтгэлгээг хөгжүүлж, оюутнуудын
              харилцан туршлага солилцох орчинг бүрдүүлж, хаана ч өрсөлдөхүйц
              мэргэшсэн боловсон хүчэн болход бэлтгэгдэн гарах гүүрийн нэг байх
              нь клубын эрхэм зорилго юм.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
