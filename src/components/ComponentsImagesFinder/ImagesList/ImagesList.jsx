import { nanoid } from 'nanoid';
import css from './ImagesList.module.css';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ images, handleClick }) => {
  return (
    <ul className={css.imagesList}>
      {images.map(el => (
        <ImageItem
          handleClick={handleClick}
          key={nanoid()}
          alt={el.tags}
          src={el.webformatURL}
        />
      ))}
    </ul>
  );
};

export default ImagesList;
