import "./App.css";
import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { fetchPopular, fetchTopRated, fetchUpcoming } from "./actions";
import { connect } from "react-redux";
import SingleMovie from "./pages/SingleMovie";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";

function App(props) {
  const fetchPopular = props.fetchPopular;
  const fetchTopRated = props.fetchTopRated;
  const fetchUpcoming = props.fetchUpcoming;

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchUpcoming();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="about" element={<About />} />
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
