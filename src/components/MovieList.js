import React, { useState } from "react";
import "../styles/MovieList.scss";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption({ value: event.target.value });
  };

  return (
    <div className="MovieListWrapper">
      <div className="MovieListHeader">
        <h2>
          {" "}
          <span>
            {option.value === `${option.value}` ? `${option.value}` : "Popular"}
          </span>{" "}
          movies
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

      <MovieCard />
    </div>
  );
};

export default MovieList;
