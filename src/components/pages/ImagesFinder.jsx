import { useState, useEffect } from 'react';
import ImagesList from '../ComponentsImagesFinder/ImagesList/ImagesList';
import Modal from '../ComponentsImagesFinder/Modal/Modal';
import { fetchImages } from '../ComponentsImagesFinder/operations/imagesFinderOperation';
import Searchbar from '../ComponentsImagesFinder/Searchbar/Searchbar';
import { Loader } from '../ComponentsImagesFinder/Loader/Loader';
import ReturnHomepage from 'components/Navigation/ReturnHomepage';
import css from './pagesStyles/ImagesFinderWrapper.module.css';

const ImagesFinder = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormatSrc, setModalFormatSrc] = useState();
  const [query, setQuery] = useState('');

  const openModal = evt => {
    const src = evt.target.src;
    const clickedImage = images.find(el => el.webformatURL === src);

    setIsModalOpen(true);
    setModalFormatSrc(clickedImage.largeImageURL);
  };

  const loadGallery = async () => {
    try {
      setIsLoading(true);
      const imagesData = await fetchImages('');
      setIsLoading(false);
      setImages(imagesData.hits);
    } catch (e) {
      setIsLoading(false);
      return e;
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const fetchByQuery = async evt => {
    evt.preventDefault();
    const form = evt.target;
    const queryValue = form.elements.search.value;
    setQuery(queryValue);
    try {
      setIsLoading(true);
      const imagesData = await fetchImages(queryValue);
      setIsLoading(false);
      setImages(imagesData.hits);
    } catch (e) {
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className={css.ImagesFinderWrapper}>
      <ReturnHomepage text="back homepage" />
      {isLoading === true && <Loader />}
      {isModalOpen ? (
        <Modal handleClose={onModalClose} src={modalFormatSrc} />
      ) : (
        <></>
      )}
      <Searchbar handleSubmit={fetchByQuery} />
      {images !== undefined ? (
        <ImagesList query={query} handleClick={openModal} images={images} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImagesFinder;
