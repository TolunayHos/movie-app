import tmdb from "../apis/tmdb";

export const fetchPopular = () => async (dispatch) => {
  const response = await tmdb.get("./movie/popular");

  dispatch({ type: "FETCH_POPULAR", payload: response.data.results });
};
