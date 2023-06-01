import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'API/API';
import HomeMovieList from '../../components/HomeMovieList/HomeMovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {isLoading && <Loader></Loader>}

      <HomeMovieList
        trendingMovies={trendingMovies}
        isLoading={isLoading}
      ></HomeMovieList>
    </>
  );
};

export default Home;
