import { useState, useEffect } from 'react';
import ImagesList from './ImagesList/ImagesList';
import Modal from './Modal/Modal';
import { fetchImages } from './operations/imagesFinderOperation';
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

const ImagesFinder = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormatSrc, setModalFormatSrc] = useState();

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
    <div>
      {isLoading === true && <Loader />}
      {isModalOpen ? (
        <Modal handleClose={onModalClose} src={modalFormatSrc} />
      ) : (
        <></>
      )}
      <Searchbar handleSubmit={fetchByQuery} />
      {images !== undefined ? (
        <ImagesList handleClick={openModal} images={images} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ImagesFinder;
