export default (state = {}, action) => {
  switch (action.type) {
    case "FILTER_TYPE":
      return action.payload;
    default:
      return state;
  }
};
