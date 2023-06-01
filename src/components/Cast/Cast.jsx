import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesCast } from 'API/API';
import {
  ActorsCardWrapper,
  ActorsCard,
  ActorsCardItem,
  ActorsCardImg,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const movieCast = await getMoviesCast(movieId);
        setMovieCast(movieCast.data);
        console.log(movieCast.data);

        if (movieCast.data.cast.length === 0) { 
          setError('Sorry, we do not found cast for this movie');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  const { cast } = movieCast;
  return (
    <ActorsCardWrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : error ? (
          <ActorsCardItem style={{
            color: "red",
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "50px",

          }}>{ error}</ActorsCardItem>
      ) : (
        <ActorsCard>
          {cast &&
            cast.map(castItem => (
              <ActorsCardItem key={castItem.id}>
                <ActorsCardImg
                  src={
                    castItem.profile_path
                      ? 'https://image.tmdb.org/t/p/w300/' +
                        castItem.profile_path
                      : 'https://via.placeholder.com/300x450'
                  }
                  alt=""
                />
                <p>
                  Actor: <span> {castItem.name}</span>
                </p>
                <p>
                  Character:
                  <span> {castItem.character}</span>
                </p>
              </ActorsCardItem>
            ))}
        </ActorsCard>
      )}
    </ActorsCardWrapper>
  );




    
};

export default Cast;
