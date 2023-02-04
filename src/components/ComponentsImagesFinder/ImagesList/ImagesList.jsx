import { Component } from 'react';
import { nanoid } from 'nanoid';
import ImageItem from '../ImageItem/ImageItem';

class ImagesList extends Component {
  render() {
    const { images, handleClick } = this.props;
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
  }
}

export default ImagesList;
