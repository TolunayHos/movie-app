import React from "react";
import "../styles/HomeSlider.scss";
import Harrypotter from "../images/Harrypotter.png";
import chucky from "../images/chuky.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlider = () => {
  return (
    <div className="SliderWrapper">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={5000}
        infiniteLoop={true}
        showArrows={false}
        useKeyboardArrows={true}
        transitionTime={500}
      >
        <div className="banner">
          <img src={Harrypotter} />
          <div className="gradient-overlay"></div>
          <h1>Harry potter and secrets</h1>
        </div>
        <div className="banner">
          <img src={chucky} />
          <div className="gradient-overlay"></div>
          <h1>Chucky sneaks in</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
