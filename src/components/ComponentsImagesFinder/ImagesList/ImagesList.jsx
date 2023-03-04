import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Notify } from 'notiflix';
import { fetchImages } from '../operations/imagesFinderOperation';
import Button from 'componentsFeedback/Button/Button';
import css from './ImagesList.module.css';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ query, images, handleClick }) => {
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  const handleLoadMore = async (query, page) => {
    try {
      const response = await fetchImages(query, page);
      const newImages = response.hits;
      images.push(...newImages);
      addPage();
      if (response.hits.length === 0) {
        Notify.warning(
          'Sorry! There is no more images to load for this query!'
        );
      }
      return response.hits;
    } catch (e) {
      return e;
    }
  };

  return (
    <>
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
      <Button
        handleClick={() => {
          handleLoadMore(query, page);
        }}
        name="load more"
      />
    </>
  );
};

export default ImagesList;
