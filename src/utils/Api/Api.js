import Axios from './BaseAxios';

export const moviesApi = {
    getMovies: () => Axios.get("films/")
}