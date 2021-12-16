import popularReducer from "./popularReducer";
import { combineReducers } from "redux";

export default combineReducers({
  popular: popularReducer,
});
