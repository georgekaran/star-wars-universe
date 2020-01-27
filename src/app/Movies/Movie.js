import React, { useEffect, useState, useCallback } from "react";
import { useParams, withRouter } from "react-router-dom";
import styled from 'styled-components'
import PropTypes from "prop-types";
import "./Movie.scss";

import { moviesApi } from "utils/Api/Api";
import Title from "components/Typography/Title";
import Loading from "components/Loading/Loading";

const SectionFlex = styled.section`
  display: flex
`

function Movie({ location, ...props }) {
  const [movieState, setMovieState] = useState({});
  const { movie } = location.state;
  const { id } = useParams();

  useEffect(() => {
    console.log(movie)
    if (!movie) {
      fetchMovieIfNeeded(id);
    } else {
      setMovieState(movie);
    }
  }, [movie]);

  async function fetchMovieIfNeeded(id) {
    await moviesApi
      .getMovies(id)
      .then(res => {
        setMovieState(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const loadImage = useCallback(() => {
    if (movieState && movieState.episode_id) {
      return require(`assets/images/movies/${movieState.episode_id}.jpg`);
    }
    return "";
  }, [movieState]);

  return (
    <div className="Movie__Container">
      {movieState.title ? (
        <div className="Movie__Wrapper">
          <div>
            <Title title={movieState.title} fontSize="30px" />
          </div>
          <div className="Movie__Info__Wrapper">
            <div className="Movie__Image">
              <img
                className="Image"
                src={loadImage()}
                alt={`Poster do episódio ${movieState.episode_id}`}
              />
            </div>
            <div className="Movie__Info">
              <SectionFlex>
                <Title title="Data de estreia:" fontSize="18px" />
                <Title title={movieState.release_date} fontSize="15px" />
              </SectionFlex>
              <SectionFlex>
                <Title title="Director:" fontSize="18px" />
                <Title title={movieState.director} fontSize="15px" />
              </SectionFlex>
              <SectionFlex>
                <Title title="Producer(s):" fontSize="18px" />
                <Title title={movieState.producer} fontSize="15px" />
              </SectionFlex>
              <SectionFlex>
                <Title title="Opening: " fontSize="18px" />
                <Title title={movieState.opening_crawl} fontSize="15px" />
              </SectionFlex>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object
};

export default withRouter(Movie);
