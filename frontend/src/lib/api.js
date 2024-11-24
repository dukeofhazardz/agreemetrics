import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:10000",
  withCredentials: false,
  crossdomain: true,
});

api.interceptors.request.use(
  (config) => {
    const tokenObject = JSON.parse(localStorage.getItem("access_token"));
    if (tokenObject && tokenObject.value) {
      config.headers.Authorization = `Bearer ${tokenObject.value}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default api;
