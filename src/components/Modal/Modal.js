import React, { Component } from "react";

import {createPortal} from 'react-dom';
import styles from "./Modal.module.css";


const modalRoot = document.querySelector("#modal__root")
console.log(modalRoot)
export class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = (evt) => {
        if (evt.code === "Escape"){
            console.log("modal esc close")
            this.props.onClose()
        }
    };

    handleClick = (evt) => {
        if (evt.currentTarget === evt.target) {
            console.log("modal close")
            this.props.onClose()
        }
    };

    render() {
        const { id, largeImageURL } = this.props.onOpen;

        return createPortal(
            <div className={styles.overlay} onClick={this.handleClick}>
                <div className={styles.modal}>
                    <img className={styles.img} src={largeImageURL} alt={id} />
                </div>
            </div>,
            modalRoot
        );
    };
};

