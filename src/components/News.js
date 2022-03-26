import React, { Component } from "react";
import axios from "axios";

export default class News extends Component {
  state = {
    news: [],
  };
  baseURL = "http://localhost:9000/api/v1/news";
  componentDidMount() {
    axios.get(this.baseURL).then((res) => {
      this.setState({ news: res.data.data });
    });
  }
  render() {
    console.log(this.state.news);
    return (
      <div className="flex max-w-7xl mx-auto space-x-16 my-32 ">
        {this.state.news.map((el) => {
          return (
            <div uk-slideshow>
              <button className="flex flex-col items-center mb-6 uk-slideshow-items">
                <img uk-cover className="w-96 h-72 rounded-xl" src={el.photo} />
                <p className="text-white mt-5 text-center font-semibold">
                  {el.title}
                </p>
                <div className="text-[#828282]">
                  {el.createdAt.substring(0, 10)}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
