import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../lib/sanity";
import Carousel from "react-elastic-carousel";
import { Spinner } from "./Spinner";
import moment from "moment";
import css from "./news.css";

export default function News() {
  const [news, setNews] = useState();
  const [loading, setLoad] = useState(true);
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemPadding: [10, 10] },
    { width: 600, itemsToShow: 2, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 850, itemsToShow: 3, itemsToScroll: 2, itemPadding: [10, 20] },
    { width: 1000, itemsToShow: 3.5, itemsToScroll: 2, itemPadding: [10, 30] },
  ];
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      date,
      mainImage{
        asset->{
          url
        }
      }
    }`
      )
      .then((news) => setNews(news))
      .then(() => setLoad(false));
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <div
      className={`flex md:max-w-screen-2xl sm:max-w-md mx-auto p-4   ${css}`}
      id="news"
    >
      <Carousel
        disableArrowsOnEnd={true}
        breakPoints={breakpoints}
        itemPadding={[10, 30]}
      >
        {news &&
          news.map((el, index) => {
            return (
              <Link to={"/" + el.slug.current} key={el.slug.current}>
                <div key={index}>
                  <button className="flex flex-col items-center">
                    <img
                      className="2xl:w-96 2xl:h-72 lg:h-60 md:h-56 h-40 rounded-xl"
                      src={el.mainImage.asset.url}
                      alt="zurag "
                    />
                    <p className="text-white md:mt-5 mt-2 text-xs leading-5 md:text-base  text-center font-semibold">
                      {el.title}
                    </p>
                    <div className="text-[#828282] text-xs md:text-sm">
                      {moment(el.date).format("L")}
                    </div>
                  </button>
                </div>
              </Link>
            );
          })}
      </Carousel>
    </div>
  );
}
