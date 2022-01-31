import "../styles/MovieDetails.scss";
import "../styles/base/variables.scss";
import { connect } from "react-redux";
import Cast from "./Cast";
import { imgRender } from "./Helper";
import { Grid } from "react-loader-spinner";
import { useEffect } from "react";

const MovieDetails = (props) => {
  const selectedMovieDetails = props.selectedMovieDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const conditionalRender = () => {
    if (selectedMovieDetails) {
      return (
        <div className="DetailsWrapper">
          <div className="DetailsContainer">
            <div className="MovieMain">
              <img
                src={imgRender(selectedMovieDetails.poster_path)}
                style={{ maxWidth: "320px", maxHeight: "480" }}
              />
              <div className="MainDetails">
                <div className="MainDetailsHeader">
                  <div>
                    <h2>{selectedMovieDetails.title}</h2>
                  </div>
                  <div className="MiniDetails">
                    <p>{selectedMovieDetails.release_date}</p>
                    <p>{selectedMovieDetails.runtime}m</p>
                  </div>
                </div>
                <div className="Overview">
                  <h2>Overview</h2>
                  <p>{selectedMovieDetails.overview}</p>
                </div>
                <div className="Otherinfo">
                  <div className="cover">
                    <div>
                      <h3>Genre</h3>
                      <p>
                        {selectedMovieDetails.genres.length > 0
                          ? selectedMovieDetails?.genres[0]?.name
                          : "unknown"}
                      </p>
                    </div>
                    <div>
                      <h3>Director</h3>
                      <p>
                        {props.selectedMovieCredits?.crew
                          .filter((member) => member.job === "Director")
                          .map((d) => d.name)
                          .join(" ,")}
                      </p>
                    </div>
                  </div>
                  <div className="cover">
                    <div>
                      <h3>Producer</h3>
                      <p>
                        {selectedMovieDetails.production_companies.length > 0
                          ? selectedMovieDetails.production_companies[0]?.name
                          : "unknown"}
                      </p>
                    </div>
                    <div>
                      <h3>ScreeenPlay</h3>
                      <p>
                        {props.selectedMovieCredits?.crew
                          .filter((member) => member.job === "Screenplay")
                          .map((s) => s.name)
                          .join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CastDetails">
              <h2>Cast</h2>
              <Cast />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="DetailsWrapper">
          <div className="DetailsContainer">
            <div className="SpinnerArea">
              <Grid
                arialLabel="loading-indicator"
                color="orange"
                className="grid"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{conditionalRender()}</div>;
};

const mapStateToProps = (state) => {
  return {
    selectedMovieDetails: state.selectedMovieDetails,
    selectedMovieCredits: state.selectedMovieCredits,
  };
};

export default connect(mapStateToProps)(MovieDetails);
