import axios from "axios";

// this used so that we dont have to write the same base url everytime we request
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;