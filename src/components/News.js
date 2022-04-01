import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../lib/sanity";
import Carousel from "react-elastic-carousel";
import { Spinner } from "./Spinner";

export default function News() {
  const [news, setNews] = useState();
  const [loading, setLoad] = useState(true);
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
    <div className="flex max-w-screen-2xl mx-auto space-x-16 py-32" id="news">
      <Carousel itemsToShow={3} disableArrowsOnEnd={false}>
        {news &&
          news.map((el, index) => {
            return (
              <Link to={"/" + el.slug.current} key={el.slug.current}>
                <div key={index}>
                  <button className="flex flex-col items-center mb-6">
                    <img
                      className="w-96 h-72 rounded-xl"
                      src={el.mainImage.asset.url}
                      alt="zurag "
                    />
                    <p className="text-white mt-5 text-center font-semibold">
                      {el.title}
                    </p>
                    <div className="text-[#828282]">{el.date}</div>
                  </button>
                </div>
              </Link>
            );
          })}
      </Carousel>
    </div>
  );
}
