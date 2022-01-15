import React from "react";
import "../styles/HomeSlider.scss";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Grid } from "react-loader-spinner";

const HomeSlider = (props) => {
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
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showArrows={false}
          useKeyboardArrows={true}
          transitionTime={500}
        >
          {renderList()}
        </Carousel>
      ) : (
        <div className="banner">
          <Grid arialLabel="loading-indicator" color="orange" />
          <div className="gradient-overlay"></div>
        </div>
      )}
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
