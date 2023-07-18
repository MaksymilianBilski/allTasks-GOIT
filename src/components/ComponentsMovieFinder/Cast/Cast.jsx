import { useState, useEffect, useRef } from 'react';
import { useOutletContext, useParams, Outlet } from 'react-router-dom';
import { fetchCast } from '../operations/operationsMovies';
import noPhoto from '../../../images/noPhoto.png';
import css from './Cast.module.css';

const photoURL = 'https://image.tmdb.org/t/p/w500/';

const GetPhoto = () => {
  const castContext = <Outlet context={useOutletContext()} />;
  return castContext.props.context;
};

const Cast = () => {
  const [height, setHeight] = useState(0);
  const [cast, setCast] = useState();
  const ref = useRef(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (ref.current) {
      console.log(height);
      setHeight(ref.current === null ? 0 : ref.current.clientHeight);
    }
  }, [height, cast]);

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
    <div className={css.castWrapper}>
      <div
        className={css.backImage}
        style={{
          backgroundImage: `url(${GetPhoto()})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: `${height}px`,
        }}
      ></div>
      <ul ref={ref} className={css.castList}>
        {cast !== undefined &&
          cast.map(el => (
            <li className={css.castElement}>
              <img
                alt=""
                src={el.profile_path ? photoURL + el.profile_path : noPhoto}
              />
              <div>
                <h3>
                  Actor: <span>{el.name}</span>
                </h3>
                <p>
                  Character: <span>{el.character}</span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
