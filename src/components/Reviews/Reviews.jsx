import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from 'API/API';
import {
  ReviewsCardWrapper,
  ReviewCard,
  ReviewCardItem,
  ReviewAuthor,
  Review,
} from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const movieReviews = await getMoviesReviews(movieId);
        setMovieReviews(movieReviews.data);
        console.log(movieReviews.data.results);

        if (movieReviews.data.results.length === 0) {
          setError('Sorry, we do not found review for this movie');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);
  const { results } = movieReviews;
  return (
    <ReviewsCardWrapper>
      {isLoading ? (
        <Loader></Loader>
      ) : error ? (
        <p
          style={{
            color: 'red',
            fontSize: '20px',
            fontWeight: '700',
            marginTop: '50px',
          }}
        >
          {error}
        </p>
      ) : (
        <ReviewCard>
          {results &&
            results.map(result => (
              <ReviewCardItem key={result.id}>
                <ReviewAuthor>
                  Author: <span> {result.author}</span>
                </ReviewAuthor>
                <Review>
                  Review:
                  <span> {result.content}</span>
                </Review>
              </ReviewCardItem>
            ))}
        </ReviewCard>
      )}
    </ReviewsCardWrapper>
  );
};

export default MovieReviews;
