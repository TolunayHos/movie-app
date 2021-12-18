export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          return [...state];
        }
      }
      return [...state, action.payload];
    case "REMOVE_FAVORITE_MOVIE":
      return state.filter((el) => el.id !== action.payload.id);
    default:
      return state;
  }
};
