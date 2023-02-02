import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  // console.log(images);

  return (
    <ImageList>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </ImageList>
  );
};

export default ImageGallery;
