import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:10000',
    withCredentials: true,
    crossdomain: true,
});

export default api;