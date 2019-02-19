import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import sortReducer from "./sortReducer";
import setQueryReducer from "./setQueryReducer";
import filterReducer from "./filterReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  searchResponse: searchReducer,
  sortType: sortReducer,
  filter: filterReducer,
  query: setQueryReducer,
  setPage: pageReducer
});
