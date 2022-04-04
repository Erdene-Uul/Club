import React, { useEffect } from "react";
import photo from "../images/photo.png";
import ScrollReveal from "scrollreveal";

export default function AboutUs(props) {
  useEffect(() => {
    ScrollReveal().reveal("#about", {
      delay: 2000,
      origin: "top",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    });
  }, []);
  return (
    <div
      className="flex flex-row justify-center max-w-6xl mx-auto items-center mt-44 mb-32 z-50"
      id="aboutus"
    >
      <img
        src={photo}
        alt="zurg"
        className="max-w-xl h-[450px] mr-24 "
        id="about"
      />
      <div className="text-white">
        <h1 className="font-bold mx-2 mb-6 text-5xl font-Roboto">
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
            <p className="text-sm">
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
            <p className="text-sm">
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
            <p className="text-sm">
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
