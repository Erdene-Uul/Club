import React from "react";

import Azaa from "../../../images/AzbayarMunkhbayar.jpg";
import Youngmi from "../../../images/YoungMiKim.jpg";
import Shim from "../../../images/KwangCheolShin.jpg"


const AdvisorsCard = () => {
  return (
    <div className="flex gap-8">
      {/* Youngmi techear */}
      <div class=" flex items-center justify-center">
        <a
          class="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
          href=""
        >
          <img src={Youngmi} class="w-full rounded shadow" />

          <h3 class="text-gray-200 font-bold mt-5">
            {" "}
            PHD, КИМ ЮУНГМИ
          </h3>

          <p class="text-gray-400 font-light mt-2 text-xs">
            {" "}
            Компьютерийн Шинжилэх Ухааны тэнхимийн эрхлэгч багш
          </p>
        </a>
      </div>
{/* Azbayar */}
      <div class=" flex items-center justify-center">
        <a
          class="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
          href=""
        >
          <img src={Azaa} class="w-full rounded shadow" />

          <h3 class="text-gray-200 font-bold mt-5"> МАСТЕР М. АЗБАЯР</h3>

          <p class="text-gray-400 font-light mt-2 text-xs">
            {" "}
            Компьютерийн Шинжилэх Ухааны тэнхимийн багш
          </p>
        </a>
      </div>

      {/* Shim */}
      <div class=" flex items-center justify-center">
        <a
          class="hover:bg-gray-800 delay-50 duration-100 bg-gray-900 p-5 rounded-lg w-60 group"
          href=""
        >
          <img src={Shim} class="w-full rounded shadow" />

          <h3 class="text-gray-200 font-bold mt-5"> PHD, ШИН КВАНГЧЁОЛ</h3>

          <p class="text-gray-400 font-light mt-2 text-xs">
            {" "}
            Компьютерийн Шинжилэх Ухааны тэнхимийн багш
          </p>
        </a>
      </div>
    </div>
  );
};

export default AdvisorsCard;
