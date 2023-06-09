import { Routes, Route} from 'react-router-dom';
import SharedLayot from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieReviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayot />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} replace />
      </Route>
    </Routes>
  );
};
