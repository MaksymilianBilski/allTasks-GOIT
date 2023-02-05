import { nanoid } from 'nanoid';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ images, handleClick }) => {
  return (
    <ul>
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
