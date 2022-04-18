// import React, { Component } from 'react'
import styles from './ImageGalleryItem.module.css'
// import { PropTypes } from 'prop-types'

export const ImageGalleryItem = ({pictures, modal}) => {

    // static propTypes = {
    //     picture: PropTypes.shape({
    //         id: PropTypes.string.isRequired,
    //         webformatURL: PropTypes.string.isRequired,
    //         largeImageURL: PropTypes.string.isRequired,
    //     }),
    //     modal: PropTypes.func.isRequired,
    // };

    return (
        <>
            {pictures.map(({id, webformatURL, largeImageURL}) => (
                 <li className={styles.ImageGalleryItem} key={id} onClick={() => modal(id)}>
                    {/* <a className='gallery_item_link' href={largeImageURL}> */}
                        <img className={styles.ImageGalleryItem_image} src={webformatURL} alt={id} />
                    {/* </a> */}
                </li>
              )
             )
            } 
        </>
    )

}

