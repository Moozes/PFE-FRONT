import axios from "axios";
// used to construct the full url of images
export const SERVER_NO_SLASH = "http://localhost:3001" 

export const SERVER = "http://localhost:3001/"

const axiosInstance = axios.create({
    baseURL: SERVER,
});

export default axiosInstance