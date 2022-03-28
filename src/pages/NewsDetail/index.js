import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class NewsDetail extends Component {
  state = {
    news: {
      title: "",
      content: {
        content1: "",
        content2: "",
      },
      photo: "",
      createdAt: "",
    },
  };
  baseURL = "http://localhost:9000/api/v1/news";
  componentDidMount() {
    axios.get(`${this.baseURL}/${this.props.match.params.id}`).then((e) => {
      this.setState({
        news: e.data.data,
      });
    });
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.state.news);
    return (
      <div className="flex flex-col justify-center items-center bg-[#1C1C28]">
        <div>
          {this.state.news.title}
          asdjlkfs asdjlkfsasdf asdjlkfsasdf asdf
        </div>
        <div>
          {this.state.news.title}
          asdjlkfs asdjlkfsasdf asdjlkfsasdf asdf
        </div>
        <div className="text-white text-[36px]">{this.state.news.title}</div>
        <div className="text-[#828282]">
          {this.state.news.createdAt.substring(0, 10)}
        </div>
        <img className="w-[913px] h-[480px]" src={this.state.news.photo} />
      </div>
    );
  }
}
export default withRouter(NewsDetail);
