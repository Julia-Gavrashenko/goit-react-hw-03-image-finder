export const ImageGalleryItem = ({ images }) => {
    console.log(images.hits)
    
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <image src={webformatURL} alt={tags} />
        </li>
      ))}
    </>
  );
};
