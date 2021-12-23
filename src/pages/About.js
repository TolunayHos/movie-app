import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/About.scss";
import movies from "../images/movieapplogo.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="AboutWrapper">
        <h1>
          About{" "}
          <img src={movies} height="23" style={{ marginLeft: "0.5rem" }} />{" "}
        </h1>
        <h3>
          This is an online database where you can find the relevant movie
          information based on popular, top-rated, and upcoming movies. You can
          also search and explore movies based on your query. You can add the
          movies of your interest in favorites list and store them there.
        </h3>
        <h3>
          This is a React js project making use of redux and is developed by
          Tolunay Hos. Some of the design properties were inspired by various
          websites.
        </h3>
        <h3>The application uses TMDb api to fetch relevant information.</h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;
