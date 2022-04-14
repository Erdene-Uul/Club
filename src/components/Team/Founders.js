import React from "react";
import ClubFounders from "../ClubFounders";
import Carousel from "react-elastic-carousel";

const Founder = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  return (
    <div className="max-w-6xl mx-auto mt-16 ">
      <div className=" flex justify-center items-center">
        <Carousel
          disableArrowsOnEnd={true}
          breakPoints={breakpoints}
          itemPadding={[10, 30]}
        >
          <ClubFounders
            image="Munguu"
            name="Б. Мөнгөн-Эрдэнэ"
            about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
            color="#4392F5"
          />
          <ClubFounders
            image="yozla"
            name="З. Эрдэнэ-Уул"
            about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
            color="#56CB7A"
          />
          <ClubFounders
            image="uram"
            name="Д. Ууганбаяр"
            about="Хүрээ дээд сургуулийн компьютерийн ухааны 2-р дамжааны оюутан."
            color="#D7A43F"
          />
        </Carousel>
      </div>
    </div>
  );
};
export default Founder;
