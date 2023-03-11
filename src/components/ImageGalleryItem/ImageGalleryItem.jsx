export const ImageGalleryItem = ({ images }) => {
    console.log(images)
    
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <image src={webformatURL} alt={tags} width="300"/>
        </li>
      ))}
    </>
  );
};


