import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
    // console.log(images)
    
  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} width="300"/>
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
