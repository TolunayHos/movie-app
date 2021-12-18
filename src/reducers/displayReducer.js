export default (state = "Popular", action) => {
  switch (action.type) {
    case "SELECT_DISPLAY":
      return action.payload;
    default:
      return state;
  }
};
