import popularReducer from "./popularReducer";
import { combineReducers } from "redux";
import topratedReducer from "./topratedReducer";
import upcomingReducer from "./upcomingReducer";
import displayReducer from "./displayReducer";

export default combineReducers({
  popular: popularReducer,
  toprated: topratedReducer,
  upcoming: upcomingReducer,
  display: displayReducer,
});
