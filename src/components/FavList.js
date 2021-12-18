import React from "react";
import "../styles/FavList.scss";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

import { connect } from "react-redux";

const FavList = (props) => {
  console.log(props);

  return (
    <div className="FavListWrapper">
      <div className="FavList">
        <h3>
          Your <span style={{ color: "orange" }}>Favorite</span> Movies
        </h3>
      </div>
      {props.favorites.length > 0 ? (
        <>
          <MovieCard getMovies={() => props.favorites} />
          <div className="NumMovies">
            {}
            You have {`${props.favorites.length} favorite movies`}
          </div>
        </>
      ) : (
        <div className="NoMovies">
          You don't have any favorite movies selected. Click on{" "}
          <span> Add to favorite </span>
          button to select favorite movies.
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

export default connect(mapStateToProps)(FavList);
