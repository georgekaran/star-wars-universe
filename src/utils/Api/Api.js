import Axios from './BaseAxios';

export const moviesApi = {
    getMovies: (id) => Axios.get(`films/${id ? id : ''}`)
}