import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onModal }) => {
  // console.log(images);
  return (
    <ImageList>
      <ImageGalleryItem images={images} onModal={onModal} />
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onModal: PropTypes.func.isRequired,
};
