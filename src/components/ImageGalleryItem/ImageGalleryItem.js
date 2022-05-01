// import React, { Component } from 'react'
import styles from './ImageGalleryItem.module.css';
import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, id, openModal }) => {
  return (
    <>
      <li
        key={id}
        className={styles.ImageGalleryItem}
        onClick={() => openModal(id)}
      >
        <img
          className={styles.ImageGalleryItem_image}
          src={webformatURL}
          alt="gallery-item"
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
