import React, { Component } from 'react';

import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal__root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImage: PropTypes.string.isRequired,
    }),
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { id, largeImage } = this.props.onOpen;

    return createPortal(
      <div className={styles.overlay} onClick={this.handleClick}>
        <div className={styles.modal}>
          <img className={styles.img} src={largeImage} alt={id} />
        </div>
      </div>,
      modalRoot
    );
  }
}
