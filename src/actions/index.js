import tmdb from "../apis/tmdb";

export const fetchPopular = () => async (dispatch) => {
  const response = await tmdb.get("./movie/popular", { params: { page: 2 } });
  dispatch({ type: "FETCH_POPULAR", payload: response.data.results });
};

export const fetchTopRated = () => async (dispatch) => {
  const response = await tmdb.get("./movie/top_rated", { params: { page: 2 } });

  dispatch({ type: "FETCH_TOPRATED", payload: response.data.results });
};

export const fetchUpcoming = () => async (dispatch) => {
  const response = await tmdb.get("./movie/upcoming", { params: { page: 2 } });

  dispatch({ type: "FETCH_UPCOMING", payload: response.data.results });
};

export const fetchSelectedMovieDetails = (movieid) => async (dispatch) => {
  const response = await tmdb.get(`./movie/${movieid}`);

  dispatch({ type: "FETCH_DETAILS", payload: response.data });
};

export const fetchSelectedMovieCredits = (movieid) => async (dispatch) => {
  const response = await tmdb.get(`./movie/${movieid}/credits`);

  dispatch({ type: "FETCH_CREDITS", payload: response.data });
};

export const fetchSearchResults = (queryInput) => async (dispatch) => {
  const response = await tmdb.get(`./search/movie`, {
    params: { query: queryInput },
  });

  dispatch({ type: "FETCH_SEARCH_RESULTS", payload: response.data.results });
};

export const selectDisplay = (option) => {
  return {
    type: "SELECT_DISPLAY",
    payload: option,
  };
};

export const addFavoriteMovie = (movie) => {
  return {
    type: "ADD_FAVORITE_MOVIE",
    payload: movie,
  };
};

export const removeFavoriteMovie = (movie) => {
  return {
    type: "REMOVE_FAVORITE_MOVIE",
    payload: movie,
  };
};
