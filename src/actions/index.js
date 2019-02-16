import algoliaSearch from "../apis/algoliaSearch";

export const setSort = type => {
  return {
    type: "SORT_TYPE",
    payload: type
  };
};

export const setFilter = filter => {
  return {
    type: "FILTER_TYPE",
    payload: filter
  };
};

export const setQuery = query => {
  return {
    type: "SET_QUERY",
    payload: query
  };
};

export const searchQuery = () => async (dispatch, getState) => {
  const query = getState().setQuery,
    sort = getState().sortType,
    noquery = !Object.keys(query).length;
  let filter = getState().filter;

  if (isNaN(filter)) {
    filter = 0;
  }
  console.log(filter);
  if (noquery && sort === "date") {
    // DATE WITH NO QUERY
    const response = await algoliaSearch.get(
      `/search_by_date?tags=story&numericFilters=created_at_i>${filter}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (noquery) {
    // POPULARITY WITH NO QUERY
    const response = await algoliaSearch.get(
      `/search?tags=story&numericFilters=created_at_i>${filter}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && sort === "date") {
    // DATE WITH QUERY
    const response = await algoliaSearch.get(
      `/search_by_date?query=${query}&tags=story&numericFilters=points>0,created_at_i>${filter}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && sort === "popularity") {
    // POPULARITY WITH QUERY
    const response = await algoliaSearch.get(
      `/search?query=${query}&tags=story&numericFilters=points>0,created_at_i>${filter}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else {
    return;
  }

  console.log(getState());
};
