import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onModal}) => {
  // console.log(images);
  return (
    <ul>
      <ImageGalleryItem
        images={images}
        onModal={onModal}
       />
    </ul>
  );
};
