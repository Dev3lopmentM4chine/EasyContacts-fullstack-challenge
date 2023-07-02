import axios from "axios";

const api = axios.create({
  baseURL: "https://easycontacts-fullstack-challenge-production.up.railway.app",
});

export default api;
