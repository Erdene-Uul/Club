import React from "react";

const ClubAdvisors = (props) => {
  return (
    <div className=" flex items-center justify-center">
      <div
        className="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
        href=""
      >
        <img
          src={require(`../../images/${props.image}.jpg`)}
          className="w-full rounded shadow"
          alt="youngmi pro"
        />

        <h3 className="text-gray-200 font-bold mt-5">{props.name}</h3>

        <p className="text-gray-400 font-light mt-2 text-xs"> {props.about}</p>
      </div>
    </div>
  );
};
export default ClubAdvisors;
