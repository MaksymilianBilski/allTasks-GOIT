import { Component } from 'react';
import ImagesList from './ImagesList/ImagesList';
import Modal from './Modal/Modal';
import { fetchImages } from './operations/imagesFinderOperation';
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

class ImagesFinder extends Component {
  state = {
    images: [],
    isLoading: false,
    isModalOpen: false,
    modalFormatSrc: '',
  };

  openModal = evt => {
    const src = evt.target.src;
    const clickedImage = this.state.images.find(el => el.webformatURL === src);
    this.setState(() => {
      return { isModalOpen: true, modalFormatSrc: clickedImage.largeImageURL };
    });
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const imagesData = await fetchImages('');
      this.setState({ images: imagesData.hits, isLoading: false });
    } catch (e) {
      this.setState({ isLoading: false });
      return e;
    }
  }

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  fetchByQuery = async evt => {
    evt.preventDefault();
    const form = evt.target;
    const queryValue = form.elements.search.value;
    try {
      this.setState({ isLoading: true });
      const imagesData = await fetchImages(queryValue);
      this.setState(() => {
        return { images: imagesData.hits, isLoading: false };
      });
    } catch (e) {
      this.setState({ isLoading: false });
      return;
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading === true && <Loader />}
        {this.state.isModalOpen ? (
          <Modal
            handleClose={this.onModalClose}
            src={this.state.modalFormatSrc}
          />
        ) : (
          <></>
        )}
        <Searchbar handleSubmit={this.fetchByQuery} />
        {this.state.images !== undefined ? (
          <ImagesList handleClick={this.openModal} images={this.state.images} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ImagesFinder;
