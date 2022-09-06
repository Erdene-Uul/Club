import React from "react";

const ClubFounders = (props) => {
  console.log(`../../images/${props.image}.png`);
  return (
    <div
      style={{ backgroundColor: `${props.color}` }}
      className="flex flex-col items-center px-5 w-[300px] h-[370px] rounded-[40px] "
    >
      <img
        className="mt-6 mb-4 w-28 h-28  rounded-full"
        src={require(`../../images/${props.image}.png`)}
        alt="founder"
      />
      <p className="font-light text-white text-lg">{props.name}</p>
      <p className="font-bold text-base mb-8 text-center">
        TechChain клубын <span className="block">Co-Founder</span>
      </p>
      <p className="text-sm text-center">{props.about}</p>
    </div>
  );
};
export default ClubFounders;
