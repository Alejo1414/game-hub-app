import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba54aaa9479b4c32b0b5fd1d75ba3ee4",
  },
});
