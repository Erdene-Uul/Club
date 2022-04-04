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
      <div className="mx-auto flex flex-row items-center max-w-screen-2xl justify-between">
        <h1 className=" font-bold text-white text-5xl">Манай баг</h1>
        <div className="space-x-14 text-white text-xl">
          <button onClick={Founders}>Founders</button>
          <button onClick={Advisors}>Зөвлөх гишүүд</button>
          <button onClick={Members}>Гишүүд</button>
        </div>
      </div>
      {/* CARDS */}
      {state === 1 ? <Founder /> : null}
      {state === 2 ? <Advisor /> : null}
      {state === 3 ? <Member /> : null}
    </div>
  );
}
