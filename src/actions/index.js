import algoliaSearch from "../apis/algoliaSearch";

export const searchQuery = (query, type) => async dispatch => {
  if (!query && type === "date") {
    const response = await algoliaSearch.get("/search_by_date?tags=story");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (!query) {
    const response = await algoliaSearch.get("/search?tags=story");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && type === "popularity") {
    const response = await algoliaSearch.get(
      `/search?query=${query}&numericFilters=points>0`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && type === "date") {
    const response = await algoliaSearch.get(
      `/search_by_date?query=${query}&numericFilters=points>0`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else {
    const response = await algoliaSearch.get(`/search?query=${query}`);
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  }
};
