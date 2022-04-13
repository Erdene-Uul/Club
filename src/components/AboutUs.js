import React, { useEffect } from "react";
import photo from "../images/photo.png";
import ScrollReveal from "scrollreveal";
import AboutUsInfo from "./AboutUsInfo";

export default function AboutUs(props) {
  useEffect(() => {
    ScrollReveal().reveal("#about", {
      delay: 100,
      origin: "top",
      duration: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    });
    ScrollReveal().reveal("#about2", {
      delay: 100,
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
        <AboutUsInfo
          num={1}
          title="Бидний тухай"
          body="Хүрээ МХТС-ийн Мэдээллийн Технологийн тэнхимийн дэргэдэх клуб бөгөөд Манай клубийн үйл ажиллагаа бол оюутнуудад чиглэсэн сургалт, бусад үйл ажиллагааг тогтмол зохион байгуулах юм."
          color="#4392F5"
        />
        <AboutUsInfo
          num={2}
          title="Үнэт зүйл"
          body="Шинэ санааг илэрхийлэх, судлах,танин мэдэх, бүтээх.Сурж мэдсэн
          зүйлээ бусаддаа хуваалцах, бусдаас суралцах.Mentor, menteen-тэй
          харилцаа холбоо."
          color="#56CB7A"
        />
        <AboutUsInfo
          num={3}
          title="Алсын хараа"
          body="Оюутан залуусын шинжлэх ухаанч сэтгэлгээг хөгжүүлж, оюутнуудын
          харилцан туршлага солилцох орчинг бүрдүүлж, хаана ч өрсөлдөхүйц
          мэргэшсэн боловсон хүчэн болход бэлтгэгдэн гарах гүүрийн нэг байх
          нь клубын эрхэм зорилго юм."
          color="#E6682D"
        />
      </div>
    </div>
  );
}
