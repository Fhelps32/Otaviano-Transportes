import axios from "axios";

const api = axios.create({
  baseURL: "http://9.223.176.58/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
