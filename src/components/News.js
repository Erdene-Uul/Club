import React, { Component } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

export default class News extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }
      `
      )
      .then((res) => {
        this.setState({ news: res });
      });
  }
  render() {
    return (
      <div className="flex max-w-7xl mx-auto space-x-16 py-32" id="news">
        <Carousel itemsToShow={3} disableArrowsOnEnd={false}>
          {this.state.news &&
            this.state.news.map((el, index) => {
              return (
                <Link to={"/" + el.slug.current} key={el.slug.current}>
                  <div key={index}>
                    <button className="flex flex-col items-center mb-6">
                      <img
                        className="w-96 h-72 rounded-xl"
                        src={el.mainImage.asset.url}
                        alt="photo "
                      />
                      <p className="text-white mt-5 text-center font-semibold">
                        {el.title}
                      </p>
                      {/* <div className="text-[#828282]">{el.Publishedat}</div> */}
                    </button>
                  </div>
                </Link>
              );
            })}
        </Carousel>
      </div>
    );
  }
}
