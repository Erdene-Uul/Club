import React from "react";
import Carousel from "react-elastic-carousel";
import AdvisorsCard from "./advisorsCard";

const Advisor = () => {
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
       <AdvisorsCard/>
      </Carousel>
    </div>
  );
};
export default Advisor;
