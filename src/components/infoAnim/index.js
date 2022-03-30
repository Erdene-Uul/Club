import React from "react";
import styles from "./style.module.css";

const infoAnimation = () => {
  return (
    <div className="flex">
      <div className={styles.universe}>
        <div className={styles.earth}></div>
        <div className={styles.moon}></div>
      </div>
      <div className="w-3/6 mr-32 text-white text-center mt-24">
        <h1 className=" 2xl:text-4xl lg:text-2xl  ">Мэдээ</h1>
        <p className=" text-justify font-light mt-10">
          Та Мэдээ, Влог хуудаснаас Хүрээ дээд сургуулийн оюутанд зориулагдсан
          мэдээллээс эхлээд Монголд болон дэлхийд технологийн хөгжилийн тухай
          манай сайтнаас аваарай. Мөн та хүсвэл өөрийн шинэ сурж судалсан
          зүйлсээ бусдад түгээхийг хүсвэл бид тантай хамтран ажиллахад бэлэн
          байна.
        </p>
      </div>
    </div>
  );
};

export default infoAnimation;
