import React from "react";
import loadingGif from "../../images/300.gif";

export default function Gif() {
  return (
    <div className="bg-[#1C1C28] w-full h-screen flex justify-center items-center">
      <img className="h-20" src={loadingGif} alt="wait until the page loads" />
    </div>
  );
}
