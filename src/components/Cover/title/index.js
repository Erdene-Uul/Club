import React from "react";
import css from "./style.module.css";
const title = () => {

  return (
    <div className=" text-white max-w-xl mt-44">
      <h1
        className={`text-center  text-6xl font-extrabold uppercase ${css.gr}`}
      >
        Huree ICT Технологийн клуб
      </h1>
      <p className="font-light tracking-widest text-justify mt-4">
        Хүрээ дээд сургуулийн CS&SE тэнхэмийн харья клуб. Клуб нь Хүрээ дээд
        сургуулийн оюутнууд өөрсдийгөө технологийн боловсролоор хөгжүүлэхэд
        зориулагдсан болно.{" "}
      </p>
    </div>
  );
};

export default title;
