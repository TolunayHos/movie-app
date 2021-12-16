import axios from "axios";

const KEY = "116d38e9fcf63d7442be8c9da8c50e80";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: KEY,
  },
});
