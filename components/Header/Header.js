import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header(props) {
  let cursorOptions = {
    show: false,
  };

  const colorStyles = {
    color: props.color,
  };

  return (
    <div className={styles.Header}>
      <div
        style={colorStyles}
        className={styles.text}
        onClick={() => (window.location.href = '/')}
      >
        <span className={styles.title}>dlii</span>
        <p className={styles.subtitle}>
          i make websites & apps when i'm not making music
        </p>
      </div>
      <div className={styles.links}>
        <Image
          src="/img/github.svg"
          width={20}
          height={20}
          onClick={() =>
            (window.location.href = 'https://github.com/MagicWilliams')
          }
          alt="Peep my github lol"
        />
        <Image
          src="/img/ig.svg"
          width={20}
          height={20}
          alt="Follow me on the gram you know the vibes"
          onClick={() =>
            (window.location.href = 'https://instagram.com/magic.zip')
          }
        />
        <Image
          src="/img/mail.svg"
          width={20}
          height={20}
          onClick={() =>
            (window.location.href =
              'mailto:david.latimore@me.com?subject=Ayyyy')
          }
          alt="Let's talk"
        />
      </div>
    </div>
  );
}
