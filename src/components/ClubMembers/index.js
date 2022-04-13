import React from "react";

const ClubMembers = (props) => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-700  p-2 rounded-lg w-44 my-3 ml-4">
      <img
        className="rounded-full border-gray-100 shadow-sm w-24 h-24"
        src="https://randomuser.me/api/portraits/women/43.jpg"
        alt="user image4"
      />
      <h1 className="text-gray-50 font-semibold">{props.name}</h1>
      <h3 className="text-xl">{props.dep}</h3>
    </div>
  );
};
export default ClubMembers;
