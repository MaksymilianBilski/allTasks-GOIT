import css from './ImageItem.module.css';

const ImageItem = ({ src, tags, handleClick }) => {
  return (
    <li className={css.imageWrapper}>
      <img className={css.image} onClick={handleClick} alt={tags} src={src} />
    </li>
  );
};

export default ImageItem;
