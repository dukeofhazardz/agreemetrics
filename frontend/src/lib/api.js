import axios from "axios";
import { getItemWithExpiry } from "./cache";

const api = axios.create({
  baseURL: "http://localhost:10000",
  withCredentials: true,
  crossdomain: true,
});

api.interceptors.request.use(
  (config) => {
    const tokenObject = getItemWithExpiry("access_token");
    if (tokenObject && tokenObject.value) {
      config.headers.Authorization = `Bearer ${tokenObject.value}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
