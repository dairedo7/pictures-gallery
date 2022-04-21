import styles from './ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return (
    <div className={styles.gallery_container}>
      <ul className={styles.gallery}>{children}</ul>
    </div>
  );
};
