import React from "react";
import styles from "./style.module.css";

const infoAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row mx-auto max-w-7xl">
      <div className={` ${styles.universe} `}>
        <div className={styles.earth}></div>
        <div className={styles.moon}></div>
      </div>
      <div className="sm:w-[500px]  mx-auto  text-white text-center lg:mt-16 mt-4 px-6 lg:pr-10">
        <h1 className=" 2xl:text-4xl lg:text-2xl  ">Мэдээ</h1>
        <p className=" lg:text-center text-justify  font-light md:mt-10 mt-6">
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
