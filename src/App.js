import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { fetchPopular, fetchTopRated, fetchUpcoming } from "./actions";
import { connect } from "react-redux";

function App(props) {
  const fetchPopular = props.fetchPopular;
  const fetchTopRated = props.fetchTopRated;
  const fetchUpcoming = props.fetchUpcoming;

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchUpcoming();
  }, []);
  console.log(props);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    toprated: state.toprated,
    upcoming: state.upcoming,
  };
};

export default connect(mapStateToProps, {
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
})(App);
