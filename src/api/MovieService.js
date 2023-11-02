import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3e074b6d14a7158d77bae02b97da066e";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    /*O STATIC serve para eu só conseguir usar esses métodos mediante a chamada do MovieService.
    Quando for chamar, eu terei que fazer MovieService().getMovies(). Isso é importante para evitar confusão, porque eu outros lugares
    também usaremos algo com o nome getMovies e isso pode gerar confusão se usarmos apenas "getMovies()" ao invés de  MovieService().getMovies()

    isso torna mais legível
    */


    static getMovies(){
        return axios(withBaseUrl("movie/popular"))
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie")+ `&query=${movie}`)
    }
}
