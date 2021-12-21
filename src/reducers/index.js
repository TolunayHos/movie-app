import popularReducer from "./popularReducer";
import { combineReducers } from "redux";
import topratedReducer from "./topratedReducer";
import upcomingReducer from "./upcomingReducer";
import displayReducer from "./displayReducer";
import favoritesReducer from "./favoritesReducer";
import detailsReducer from "./detailsReducer";
import creditsReducer from "./creditsReducer";

export default combineReducers({
  popular: popularReducer,
  toprated: topratedReducer,
  upcoming: upcomingReducer,
  display: displayReducer,
  favorites: favoritesReducer,
  selectedMovieDetails: detailsReducer,
  selectedMovieCredits: creditsReducer,
});
