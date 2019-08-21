import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "10923b261ba94d897ac6b81148314a3f",
        language: "en-US"
    }
});

export const tvApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/")
}

export const moviesApi = {

}