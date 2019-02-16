export default (state = {}, action) => {
  switch (action.type) {
    case "SORT_TYPE":
      return action.payload;
    default:
      return state;
  }
};
