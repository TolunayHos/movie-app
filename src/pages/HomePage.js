import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSlider from "../components/HomeSlider";
import MovieList from "../components/MovieList";
import { connect } from "react-redux";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeSlider />
      <MovieList />
      <Footer />
    </div>
  );
};

export default HomePage;
