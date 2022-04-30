import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

export function Loader() {
  return (
    <div className={styles.loader_container}>
      <RotatingLines width="100" strokeColor="#FF5733" />
    </div>
  );
}
