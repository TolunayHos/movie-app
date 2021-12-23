import React, { useState } from "react";
import "../styles/MovieCard.scss";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
  fetchSelectedMovieDetails,
} from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { imgRender } from "./Helper";

const MovieCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const addFavoriteMovie = props.addFavoriteMovie;
  const removeFavoriteMovie = props.removeFavoriteMovie;
  // const fetchSelectedMovieDetails = props.fetchSelectedMovieDetails;

  const handleChange = (event) => {
    const movie = JSON.parse(event.target.value);

    props.favorites.some((e) => e.id === movie.id)
      ? removeFavoriteMovie(movie)
      : addFavoriteMovie(movie);
  };

  console.log(props);

  const renderList = () => {
    return props.getMovies().map((movie) => {
      return (
        <div className="card">
          <div className="BannerImg" onMouseEnter={toggleHover}>
            <img src={imgRender(movie.poster_path)} />
            <h3>{movie?.vote_average}</h3>
          </div>

          <h4>{movie?.title}</h4>

          <div
            className={hovered ? "HoverCardActive" : "HoverCardInactive"}
            onMouseLeave={toggleHover}
          >
            <p>
              {" "}
              Release Date <br />
              {movie?.release_date}
            </p>
            <p>{movie?.overview?.substring(0, 190)}...</p>
            <Link
              to={`/movie/${movie.id}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button value={movie?.id}>More info</button>
            </Link>
            <button value={JSON.stringify(movie)} onClick={handleChange}>
              {props.favorites.some((e) => e.id === movie?.id)
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
          </div>
        </div>
      );
    });
  };

  return <div className="MovieCardWrapper"> {renderList()} </div>;
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    selectedMovieDetails: state.selectedMovieDetails,
  };
};

export default connect(mapStateToProps, {
  addFavoriteMovie,
  removeFavoriteMovie,
  // fetchSelectedMovieDetails,
})(MovieCard);
