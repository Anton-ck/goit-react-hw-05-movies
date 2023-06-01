import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovieDetails } from 'API/API';
import { Loader } from 'components/Loader/Loader';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieDetailsWrapper,
  TextInfoAboutMovie,
  GenresList,
  ButtonGoBack,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const previousPage = useRef(location.state?.from ?? '/');

  console.log(location);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);

        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails.data);
        console.log(movieDetails.data);
      } catch (error) {
        setError(error);
        console.log(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { poster_path, title, name, vote_average, genres, overview } =
    movieDetails;

  return (
    <>
      {Error ? (
        <div>
          {Error.response.data.status_message}
          <ButtonGoBack to={previousPage.current}>GoBack</ButtonGoBack>
        </div>
      ) : isLoading ? (
        <Loader></Loader>
 
      ) : (
        <div>
          <MovieDetailsWrapper>
            <ButtonGoBack to={previousPage.current}>GoBack</ButtonGoBack>

            <img
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w300/' + poster_path
                  : 'https://via.placeholder.com/300x450'
              }
              alt={title}
            />
            <TextInfoAboutMovie>
              <h1>{title ?? name}</h1>
              <p>
                User Score: <span>{vote_average}</span>
              </p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres:</h2>
              <GenresList>
                {genres &&
                  genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
              </GenresList>
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </TextInfoAboutMovie>
          </MovieDetailsWrapper>

                          <Suspense>

            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
