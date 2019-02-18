import algoliaSearch from "../apis/algoliaSearch";

export const setActive = active => {
  return {
    type: "SET_ACTIVE",
    payload: active
  };
};
export const setPage = page => {
  return {
    type: "SET_PAGE",
    payload: page
  };
};
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

  let filter = getState().filter,
    page = getState().setPage;

  if (isNaN(page)) {
    page = 0;
  }

  if (isNaN(filter)) {
    filter = 0;
  }

  if (noquery && sort === "date") {
    // DATE WITH NO QUERY
    const response = await algoliaSearch.get(
      `/search_by_date?tags=story&numericFilters=created_at_i>${filter}&page=${page}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (noquery) {
    // POPULARITY WITH NO QUERY
    const response = await algoliaSearch.get(
      `/search?tags=story&numericFilters=created_at_i>${filter}&page=${page}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && sort === "date") {
    // DATE WITH QUERY
    const response = await algoliaSearch.get(
      `/search_by_date?query=${query}&tags=story&numericFilters=points>0,created_at_i>${filter}&page=${page}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else if (query && sort === "popularity") {
    // POPULARITY WITH QUERY
    const response = await algoliaSearch.get(
      `/search?query=${query}&tags=story&numericFilters=points>0,created_at_i>${filter}&page=${page}`
    );
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  } else {
    return;
  }

  console.log(getState());
};
