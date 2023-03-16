export const ImageGalleryItem = ({ images, onModal }) => {
  // console.log(images)

  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li key={id} onClick={() => {
          console.log('click')
          console.log( largeImageURL)
          onModal(largeImageURL)
        }}>
          <img src={webformatURL} alt={tags} width="300" />
        </li>
      ))}
    </>
  );
};
