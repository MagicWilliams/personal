import React from 'react';
import styles from '../../styles/Landing.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="mailto:hello@example.com">Email</a>
        <a href="#">Twitter</a>
        <a href="#">Github</a>
      </div>
      <div className={styles.studio}>
        Practice: <a href="#">Delight</a>
      </div>
    </footer>
  );
};

export default Footer;
