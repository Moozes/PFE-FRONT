import axios from "axios";
const SERVER = "http://localhost:3001/"

const axiosInstance = axios.create({
    baseURL: SERVER,
});

export default axiosInstance