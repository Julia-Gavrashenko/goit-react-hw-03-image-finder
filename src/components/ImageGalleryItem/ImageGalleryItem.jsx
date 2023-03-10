export const ImageGalleryItem = ({ image: { id, webformatURL, largeImageURL, tag } }) => { 

    <>
        
        <image src={webformatURL} alt={tag} width="250" />
    </>
}
