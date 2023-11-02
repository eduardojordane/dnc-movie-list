import React, { useEffect, useState } from "react";
import {MovieService} from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({searchValueProp}) => {
  const [movies, setMovies] = useState([]);
  
  //o await serve para dizer ao código para esperar receber os dados para aí sim pular para a próxima linha de código
  //{ data } é a desestruturação da propriedade data que vem do objeto "enviado" por getMovies; é a propriedade que traz a lista de filmes
  //{ data: {results} } é a desestruturação em duas camadas
  //o getMovies da function é diferente de MovieService.getMovies; tem o mesmo nome, mas é coisa diferente (vídeo 370)
  async function getMovies(){
   const { data: {results} } = await MovieService.getMovies();
   setMovies(results);
  }

  async function getMoviesSearch(movieString){
    const {
      data: { results}, 
    } = await MovieService.searchMovies(movieString);

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, [])

  //quando botamos apenas uma variável dentro de um IF, significa que se essa variável estiver com string vazia, null ou undefined, é considerado FALSO
  useEffect(() =>{
    if (searchValueProp) {
      getMoviesSearch(searchValueProp);
    }
    if (searchValueProp === ""){
      getMovies();
    }
  }, [searchValueProp]);

  return (
    /*movies.map((movie =>... pode ser desestruturado também (vídeo 372)

      <section className="Home">
        {movies.map(({id, title, vote_average}) => (
          <div key={id}>
           <h1>{title}</h1>
           <h1>{vote_average}</h1>
         </div>))}
     </section>
    */

     //movieProp é uma propriedade que foi criada aqui mesmo para o component MovieCard, e essa propriedade está recebendo o dado de 'movie'
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieProp={movie}/>
        </div>
        ))}
    </section>
  );
};

export default Home;
