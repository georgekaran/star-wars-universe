import React, { useState, useEffect } from "react";
import { moviesApi } from "utils/Api/Api";
import Card from "components/Card/MovieCard/Card";
import "./Movies.scss";

const Movies = () => {
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
        {movies &&
          movies.map(movie => {
            return <Card key={movie.episode_id} {...movie} />;
          })}
      </div>
    </div>
  );
};

export default Movies;
