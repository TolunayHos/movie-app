import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieDetails from "../components/MovieDetails";
import { connect } from "react-redux";
import {
  fetchSelectedMovieDetails,
  fetchSelectedMovieCredits,
} from "../actions";

const SingleMovie = (props) => {
  const { id } = useParams();
  const fetchSelectedMovieDetails = props.fetchSelectedMovieDetails;
  const fetchSelectedMovieCredits = props.fetchSelectedMovieCredits;

  console.log(props);

  useEffect(() => {
    fetchSelectedMovieDetails(id);
    fetchSelectedMovieCredits(id);
  }, [id]);

  return (
    <div>
      <Header />
      <MovieDetails />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMovieDetails: state.selectedMovieDetails,
    selectedMovieCredits: state.selectedMovieCredits,
  };
};

export default connect(mapStateToProps, {
  fetchSelectedMovieDetails,
  fetchSelectedMovieCredits,
})(SingleMovie);
