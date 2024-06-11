import styles from './index.module.css';

export default function Spinner () {
  return (
    <div className={styles.spinner} data-testid="spinner">
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
    </div>
  );
}