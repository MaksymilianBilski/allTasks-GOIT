import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../operations/operationsMovies';

const photoURL = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  const createReviewsData = async id => {
    try {
      const response = await fetchCast(id);
      setCast(response.cast);
      return response.cast;
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    createReviewsData(movieId);
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast !== undefined &&
          cast.map(el => (
            <li>
              <img alt="" src={photoURL + el.profile_path} />
              <h3>Actor: {el.name}</h3>
              <p>Character{el.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
