import React from "react";
import FavList from "../components/FavList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Favorites.scss";

const Favorites = () => {
  return (
    <div>
      <div className="FavoritesWrapper">
        <Header />
        <FavList />
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
