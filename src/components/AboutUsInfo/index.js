import React from "react";

const AboutUsInfo = (props) => {
  return (
    <div
      className="mb-5 flex flex-row justify-start items-center px-7 py-3 rounded-3xl bg-[#C4C4C4]/10
           max-w-xl "
    >
      <div
        style={{ color: `${props.color}` }}
        className={`flex justify-center items-center bg-[#C4C4C4]/25 py-2 px-4 mr-6 rounded-full font-bold text-5xl`}
      >
        {props.num}
      </div>
      <div className="text-white">
        <h1 className="font-bold">{props.title}</h1>
        <p className="text-xs sm:text-sm">{props.body}</p>
      </div>
    </div>
  );
};
export default AboutUsInfo;
