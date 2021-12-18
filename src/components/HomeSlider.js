import React from "react";
import "../styles/HomeSlider.scss";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeSlider = (props) => {
  console.log(props);

  const getSelectedMovies = () => {
    switch (props.display) {
      case "Upcoming":
        return props.upcoming;
      case "Top Rated":
        return props.toprated;
      default:
        return props.popular;
    }
  };

  const renderList = () => {
    return getSelectedMovies()
      .slice(0, 5)
      .map((item) => {
        return (
          <div>
            <div className="banner">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
              <div className="gradient-overlay"></div>
              <h1>{item.title}</h1>
            </div>
          </div>
        );
      });
  };

  return (
    <div className="SliderWrapper">
      {props.popular.length > 0 ? (
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={1000}
          interval={2000}
          infiniteLoop={true}
          showArrows={false}
          useKeyboardArrows={true}
          transitionTime={500}
        >
          {renderList()}
        </Carousel>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    toprated: state.toprated,
    upcoming: state.upcoming,
    display: state.display,
  };
};

export default connect(mapStateToProps)(HomeSlider);
