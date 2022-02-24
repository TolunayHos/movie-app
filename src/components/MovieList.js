import React, { useState } from "react";
import "../styles/MovieList.scss";
import MovieCard from "./MovieCard";
import { selectDisplay } from "../actions";

import { connect } from "react-redux";
const MovieList = (props) => {
  // const [option, setOption] = useState(props.display);

  const selectDisplay = props.selectDisplay;

  const handleChange = (event) => {
    // setOption({ value: event.target.value });
    selectDisplay(event.target.value);
  };

  const option = props.display;

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

  console.log(option);

  return (
    <div className="MovieListWrapper">
      <div className="MovieListHeader">
        <h2>
          {" "}
          <span>{option === `${option}` ? `${option}` : "Popular"}</span> movies
        </h2>

        <div className="selectionArea">
          <h3>Display by</h3>
          <select value={option.value} onChange={handleChange}>
            <option value="Popular">Popular</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      <MovieCard getMovies={getSelectedMovies} />
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

export default connect(mapStateToProps, { selectDisplay })(MovieList);
