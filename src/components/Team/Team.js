import React, { useState } from "react";
import Founder from "./Founders";
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
      <div className="mx-auto flex flex-row lg:items-center items-start max-w-screen-2xl justify-between px-4">
        <h1 className=" font-bold text-white lg:text-5xl text-2xl">
          Манай баг
        </h1>
        <ul className="lg:space-x-14 flex lg:flex-row flex-col lg:space-y-0 space-y-2 text-white lg:text-xl text-sm">
          <li>
            {state === 1 ? (
              <button
                className="p-3 bg-gradient-to-tr from-buttonColor1 to-buttonColor2 rounded-full"
                onClick={Founders}
              >
                Founders
              </button>
            ) : (
              <button
                className="p-3 focus:bg-gradient-to-tr from-buttonColor1 to-buttonColor2 rounded-full"
                onClick={Founders}
              >
                Founders
              </button>
            )}
          </li>
          <li>
            {" "}
            <button
              className="p-3 focus:bg-gradient-to-tr from-buttonColor1 to-buttonColor2 rounded-full"
              onClick={Advisors}
            >
              Зөвлөх гишүүд
            </button>
          </li>
          <li>
            {" "}
            <button
              className="p-3 focus:bg-gradient-to-tr from-buttonColor1 to-buttonColor2 rounded-full"
              onClick={Members}
            >
              Гишүүд
            </button>
          </li>
        </ul>
      </div>
      {/* CARDS */}
      {state === 1 ? <Founder /> : null}
      {state === 2 ? <Advisor /> : null}
      {state === 3 ? <Member /> : null}
    </div>
  );
}
