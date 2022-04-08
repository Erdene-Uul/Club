import React, { Component } from "react";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team/Team";
import InfoAnimation from "../components/infoAnim";
import { Link } from "react-router-dom";
import News from "../components/News";
import CoverEffect from "../components/Cover/CoverEffect";
import Navbar from "../components/Cover/navbar";
import Footer from "../components/Footer";
import AnimationBtn from "../components/button";


class Home extends Component {
  state = {
    showPopup: false,
    showSideBar: false,
  };
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };
  closePopup = () => {
    this.setState({ showPopup: false });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="bg-[#1C1C28] w-full h-full font-Roboto z-10">
        <Navbar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <CoverEffect />

        <AboutUs />
        <Team />
  

        <InfoAnimation />
        <div className="flex justify-center my-20">
          <Link to="/contact">
            <AnimationBtn />
          </Link>
        </div>
        <News />
        <Footer />
      </div>
    );
  }
}
export default Home;
