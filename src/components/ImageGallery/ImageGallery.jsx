import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgList } from './ImageGallery.styled';

export const ImageGallery = ({ imgCollection }) => {
  return (
    <ImgList>
      {imgCollection.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            smallImg={img.webformatURL}
            bigImg={img.largeImageURL}
            alt={img.tags}
          />
        );
      })}
    </ImgList>
  );
};
