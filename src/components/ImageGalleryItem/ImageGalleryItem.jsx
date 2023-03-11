export const ImageGalleryItem = ({ images }) => {
    console.log(images)
    
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} width="300"/>
        </li>
      ))}
    </>
  );
};


