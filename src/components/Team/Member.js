import React from "react";

const Member = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className=" my-16 mx-16 flex justify-end">
      <div className=" mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-4  ">
        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>

        <div class="flex items-center justify-center flex-col bg-gray-700 p-4 rounded-lg w-48 space-y-5">
          <img
            class="rounded-full border-gray-100 shadow-sm w-24 h-24"
            src="https://randomuser.me/api/portraits/women/43.jpg"
            alt="user image"
          />
          <h1 class="text-gray-50 font-semibold">Гансүх Болормаа</h1>
          <h3 class="text-xl">CS1A</h3>
        </div>
      </div>
    </div>
  );
};
export default Member;
