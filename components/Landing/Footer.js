import React from 'react';
import styles from '../../styles/Landing.module.scss';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="mailto:hello@delight.studio">Email</Link>
        <Link href="https://github.com/MagicWilliams">Github</Link>
      </div>
      <div className={styles.studio}>
        Practice: <Link href="https://delight.studio">Delight</Link>
      </div>
    </footer>
  );
};

export default Footer;
