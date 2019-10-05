import axios from "axios";

const api = axios.create({
  baseURL: "https://sp-spots-api.herokuapp.com/"
});

export default api;
