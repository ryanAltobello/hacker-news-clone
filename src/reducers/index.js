import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";
import setQueryReducer from "./setQueryReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  searchResponse: searchReducer,
  sortType: sortReducer,
  filter: filterReducer,
  setQuery: setQueryReducer
});
