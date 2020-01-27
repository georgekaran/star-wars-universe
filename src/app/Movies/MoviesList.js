import React, { useState, useEffect } from "react";
import "./MoviesList.scss";

import { moviesApi } from "utils/Api/Api";
import Card from "components/Card/MovieCard/Card";
import Loading from 'components/Loading/Loading'

const MoviesList = () => {
  const [movies, setMovies] = useState(null);

  async function fetchMovies() {
    await moviesApi
      .getMovies()
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="Movies__Wrapper">
      <div className="Movies__Inner__Wrapper">
        {movies ?
          movies.map(movie => {
            return <Card key={movie.episode_id} {...movie} />;
          }) : 
            <Loading />
          }
      </div>
    </div>
  );
};

export default MoviesList;
