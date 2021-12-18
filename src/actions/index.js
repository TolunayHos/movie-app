import tmdb from "../apis/tmdb";

export const fetchPopular = () => async (dispatch) => {
  const response = await tmdb.get("./movie/popular", { params: { page: 2 } });
  console.log(response);
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

export const selectDisplay = (option) => {
  return {
    type: "SELECT_DISPLAY",
    payload: option,
  };
};
