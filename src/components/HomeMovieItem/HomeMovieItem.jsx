import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeMovieItem = ({ id, name }) => {
  const location = useLocation();
  return (
    <>
      <li>
        <Link key={id} to={`movies/${id}`} state={{ from: location }}>
          {name}
        </Link>
      </li>
    </>
  );
};

export default HomeMovieItem;

HomeMovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
