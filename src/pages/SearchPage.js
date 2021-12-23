import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/SearchPage.scss";
import { fetchSearchResults } from "../actions";
import { connect } from "react-redux";
import MovieCard from "../components/MovieCard";

const SearchPage = (props) => {
  const [input, setInput] = useState("");
  console.log(input);
  console.log(props);
  console.log(props.searchResults.lenght);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchSearchResults = props.fetchSearchResults;

  const handleQuery = (e) => {
    e.preventDefault();
    fetchSearchResults(input);
  };

  return (
    <div>
      <Header />
      <div
        className={
          props.searchResults.length > 0 ? "SearchBodyActive" : "SearchBody"
        }
      >
        <h1>Explore Millions Of Amazing Movies</h1>
        <form className="InputArea" onSubmit={handleQuery}>
          <input
            placeholder="Search a movie.."
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="QueryResults">
        <MovieCard getMovies={() => props.searchResults} />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
  };
};

export default connect(mapStateToProps, {
  fetchSearchResults,
})(SearchPage);
