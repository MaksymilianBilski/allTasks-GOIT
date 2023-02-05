import Movie from '../Movie/Movie';

const TrendingList = ({ moviesList }) => {


  return (
    <ul>
      {moviesList.map(el => (
        <Movie data={el} />
      ))}
    </ul>
  );
};

export default TrendingList;
