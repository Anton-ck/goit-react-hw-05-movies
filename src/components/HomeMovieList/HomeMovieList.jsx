import React from 'react';
import { HomeMovieListStyled } from './HomeMovieList.styled';
import MovieDetails from 'components/HomeMovieItem/HomeMovieItem';
import PropTypes from 'prop-types';

const HomeMovieList = ({ trendingMovies }) => {
  return (
    <HomeMovieListStyled>
      {trendingMovies.map(trendingMovie => (
        <MovieDetails
          key={trendingMovie.id}
          id={trendingMovie.id}
          name={trendingMovie.name ?? trendingMovie.title}
        />
      ))}
    </HomeMovieListStyled>
  );
};

export default HomeMovieList;

HomeMovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
