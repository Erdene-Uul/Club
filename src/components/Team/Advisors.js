import React from "react";
import Carousel from "react-elastic-carousel";

import ClubAdvisors from "../ClubAdvisors";

const Advisor = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className="max-w-7xl mx-auto my-16">
      <Carousel
        disableArrowsOnEnd={true}
        breakPoints={breakpoints}
        itemPadding={[10, 30]}
      >
        <ClubAdvisors
          name="PHD, КИМ ЮУНГМИ"
          about="Компьютерийн Шинжилэх Ухааны тэнхимийн эрхлэгч багш"
          image="YoungMiKim"
        />
        <ClubAdvisors
          name="PHD, ШИН КВАНГЧЁОЛ"
          about="Компьютерийн Шинжилэх Ухааны тэнхимийн багш"
          image="KwangCheolShin"
        />
        <ClubAdvisors
          name="MS, Ю. ОТГОН-БААТАР"
          about="Мэдээлэл холбооны тэнхимийн эрхлэгч"
          image="otgonbaatarYura"
        />
        <ClubAdvisors
          name="MS, М. АЗБАЯР"
          about=" Компьютерийн Шинжилэх Ухааны тэнхимийн багш"
          image="AzbayarMunkhbayar"
        />
      </Carousel>
    </div>
  );
};
export default Advisor;
