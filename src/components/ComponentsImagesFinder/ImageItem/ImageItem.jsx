import { Component } from 'react';

class ImageItem extends Component {
  render() {
    const { src, tags, handleClick } = this.props;
    return (
      <li>
        <img onClick={handleClick} alt={tags} src={src} />
      </li>
    );
  }
}

export default ImageItem;
