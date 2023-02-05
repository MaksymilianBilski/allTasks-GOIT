const ImageItem = ({ src, tags, handleClick }) => {
  return (
    <li>
      <img onClick={handleClick} alt={tags} src={src} />
    </li>
  );
};

export default ImageItem;
