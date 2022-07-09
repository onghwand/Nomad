import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, img, title, summary, genres}) {
    return <div key={id}>
    <img src={img} alt=".." />
    <h2>
      <Link to={`/detail/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    {genres.map((genre,idx) => <li key={idx}>{genre}</li>)}
    
  </div>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    img : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;