import { Component } from 'react';

import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={styles.loader_container}>
        <RotatingLines width="100" strokeColor="#FF5733" />
      </div>
    );
  }
}
