import React, { useState, useEffect } from "react";
import { moviesApi } from "utils/Api/Api";
import Card from "components/Card/Card";
import './Movies.scss';

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
      {movies && movies.map(movie => {
        return <Card {...movie} />
      })}
    </div>
  );
};

export default Movies;
