import React, { useState } from "react";
import Munguu from "../../images/4.png";
import Uuganaa from "../../images/uram.png";
import Uul from "../../images/yozla.png";
import Advisor from "./Advisors";
import Member from "./Member";

export default function Team() {
  const [state, setState] = useState(1);
  const Founders = () => {
    setState(1);
  };
  const Advisors = () => {
    setState(2);
  };
  const Members = () => {
    setState(3);
  };
  return (
    <div>
      <div className="mx-auto flex flex-row items-center max-w-screen-2xl justify-between">
        <h1 className=" font-bold text-white text-5xl">Манай баг</h1>
        <div className="space-x-14 text-white text-xl">
          <button onClick={Founders}>Founders</button>
          <button onClick={Advisors}>Зөвлөх гишүүд</button>
          <button onClick={Members}>Гишүүд</button>
        </div>
      </div>
      {/* CARDS */}
      {state === 1 ? (
        <div className="my-16 flex justify-center space-x-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center px-5 bg-[#4392F5] w-[300px] h-[370px] rounded-[40px]">
            <img className="mt-6 mb-4 w-28 h-28" src={Munguu} alt="munguu" />
            <p className="font-light text-white text-lg">Б.Мөнгөн-Эрдэнэ</p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 bg-[#56CB7A] w-[300px] h-[370px] rounded-[40px]">
            <img className="mt-6 mb-4 w-28 h-28" src={Uul} alt="uul" />
            <p className="font-light  text-white text-lg">З. Эрдэнэ-Уул</p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
          <div className="flex flex-col items-center px-5 bg-[#D7A43F] w-[300px] h-[370px] rounded-[40px]">
            <img className="mt-6 mb-4 w-28 h-28" src={Uuganaa} alt="uram " />
            <p className="font-light  text-white text-lg">Д. Ууганбаяр</p>
            <p className="font-bold text-base mb-8 text-center">
              TechChain клубын <span className="block">Co-Founder</span>
            </p>
            <p className="text-sm text-center">
              Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан.
            </p>
          </div>
        </div>
      ) : null}
      {state === 2 ? <Advisor /> : null}
      {state === 3 ? <Member /> : null}
    </div>
  );
}
