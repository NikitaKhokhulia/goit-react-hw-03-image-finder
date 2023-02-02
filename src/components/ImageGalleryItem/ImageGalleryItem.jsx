import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({image}) => {
  const { id, webformatURL, largeImageUR } = image;
  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
