import React, { useEffect, useState } from "react";
import "../styles/MovieCard.scss";
import Harrypotter from "../images/Harrypotter.png";
import { fetchPopular } from "../actions";

import { connect } from "react-redux";

const MovieCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const fetchPopular = props.fetchPopular;

  console.log(props);

  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  const renderList = () => {
    return props.popular.map((pop) => {
      return (
        <div className="card">
          <div className="BannerImg" onMouseEnter={toggleHover}>
            <img
              src={`https://image.tmdb.org/t/p/original/${pop.poster_path}`}
            />
            <h3>{pop?.vote_average}</h3>
          </div>

          <h4>{pop?.title}</h4>

          <div
            className={hovered ? "HoverCardActive" : "HoverCardInactive"}
            onMouseLeave={toggleHover}
          >
            <p>
              {" "}
              Release Date <br />
              {pop?.release_date}
            </p>
            <p>{pop?.overview.substring(0, 190)}...</p>
            <button>More info</button>
            <button>Add to favorites</button>
          </div>
        </div>
      );
    });
  };

  return <div className="MovieCardWrapper"> {renderList()} </div>;
};

const mapStateToProps = (state) => {
  return { popular: state.popular };
}; //Incorrect?

export default connect(mapStateToProps, { fetchPopular })(MovieCard); //Correct