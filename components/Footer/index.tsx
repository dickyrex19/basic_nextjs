import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <p className={styles.title}>
        Made with
        <span className={styles.love}> &hearts; </span>
        @Indonesia
      </p>
    </div>
  );
}
