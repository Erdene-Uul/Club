import React from "react";
import img1 from "../../images/CoverImg.png";
import img2 from "../../images/300.gif";
import img3 from "../../images/logo.png";
import Carousel from "react-elastic-carousel";

const Member = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className="my-16 flex justify-center space-x-12 max-w-6xl mx-auto">
      <Carousel
        disableArrowsOnEnd={true}
        breakPoints={breakpoints}
        itemPadding={[10, 30]}
      >

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     
     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     

     <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
         <img class="rounded-full border-gray-100 shadow-sm w-24 h-24" src="https://randomuser.me/api/portraits/women/43.jpg" alt="user image" />
        <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
        <h3 class="text-xl">CS1A</h3>
     </div>
     
     
    
      </Carousel>
    </div>
  );
};
export default Member;
