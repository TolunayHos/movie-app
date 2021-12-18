export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOPRATED":
      return action.payload;
    default:
      return state;
  }
};
