export default (state = null, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return action.payload;
    default:
      return state;
  }
};
