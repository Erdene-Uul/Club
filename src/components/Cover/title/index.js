import React from "react";
import css from "./style.module.css";
const title = () => {
  return (
    <div className=" text-white 2xl:max-w-xl lg:max-w-md 2xl:mt-44 sm:ml-10  mt-28">
      <h1
        className={`text-center  lg:w-auto sm:w-56 w-36  mr-1 2xl:text-6xl lg:text-5xl sm:text-3xl text-xl font-extrabold uppercase ${css.gr}`}
      >
        Huree ICT Технологийн клуб
      </h1>
      <p className=" ml-8 xl:ml-0  font-light tracking-widest text-justify  mt-4 z-50 hidden xl:max-w-lg lg:max-w-sm lg:text-sm 2xl:text-base lg:block">
        Хүрээ дээд сургуулийн CS&SE тэнхэмийн харья клуб. Клуб нь Хүрээ дээд
        сургуулийн оюутнууд өөрсдийгөө технологийн боловсролоор хөгжүүлэхэд
        зориулагдсан болно.
      </p>
    </div>
  );
};

export default title;
