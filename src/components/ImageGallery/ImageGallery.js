import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export const ImageGallery = ({ pictures, onOpenModal }) => {
  return (
    <div className={styles.gallery_container}>
      <ul className={styles.gallery}>
        {pictures.map(({ webformatURL, id }, index) => {
          return (
            <ImageGalleryItem
              key={index}
              id={id}
              webformatURL={webformatURL}
              openModal={onOpenModal}
            />
          );
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.exact({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ),
  onOpenModal: PropTypes.func.isRequired,
};
