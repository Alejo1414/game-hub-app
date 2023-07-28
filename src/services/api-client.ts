import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba54aaa9479b4c32b0b5fd1d75ba3ee4",
  },
});
