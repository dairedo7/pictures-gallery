// import React, { Component } from 'react'
import styles from './ImageGalleryItem.module.css';
// import { PropTypes } from 'prop-types'

export const ImageGalleryItem = ({ pictures, modal }) => {
  return (
    <>
      {pictures.map(({ id, webformatURL }) => (
        <li
          className={styles.ImageGalleryItem}
          key={id}
          onClick={() => modal(id)}
        >
          <img
            className={styles.ImageGalleryItem_image}
            src={webformatURL}
            alt={id}
          />
        </li>
      ))}
    </>
  );
};
