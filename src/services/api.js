import axios from "axios";

const api = axios.create({
  baseURL: "https://sp-spots-api.herokuapp.com/"
  // baseURL: "http://localhost:3003"
});

export default api;
