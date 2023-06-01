import { getMovies } from 'API/API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import SearchForm from 'components/MoviesSearch/MoviesSearch';
const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') ?? '';
  const [movieQuery, setMovieQuery] = useState(query);

  const location = useLocation();
  console.log(location);
  console.log(query);

  const handleChange = e => {
    if (e.target.value !== '') {
      return setSearchParams({ query: e.target.value });
    }
    setSearchParams({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error('Please, input your query', {
        autoClose: 2000,
        theme: 'colored',
      });
    }

    setMovieQuery(query);
  };

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    const movieSearch = async () => {
      try {
        setIsLoading(true);

        const getMovie = await getMovies(movieQuery);
        setMovie(getMovie.data);

        if (getMovie.data.results.length === 0) {
          toast.error('Your query do not found', {
            position: 'top-right',
            autoClose: 1000,
            theme: 'dark',
          });
        }
      } catch (error) {
        setError(error);
        console.log(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };
    movieSearch();
  }, [movieQuery]);

  const { results } = movie;
  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        handleInputSubmit={handleChange}
        query={query}
      />
      {Error ? (
        <div> {Error.response.data.status_message}</div>
      ) : isLoading ? (
        <Loader></Loader>
      ) : (
        <ul
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
                gap: '10px',
            alignItems: 'center',
          }}
        >
          {results &&
            results.map(result => (
              <li key={result.id}>
                <Link to={`${result.id}`} state={{ from: location }}>
                  {result.title || result.name}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
