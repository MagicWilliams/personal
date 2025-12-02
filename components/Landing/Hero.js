import React from 'react';
import styles from '../../styles/Landing.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.visual}></div>
      <div className={styles.heroContent}>
        <h1>
          <span>I explore the hidden</span>
          <span>logic of everyday systems.</span>
        </h1>
        <div className={styles.statement}>
          <p>
            Hi, I'm a <strong>Creative Technologist & Artist</strong>. I build digital tools and physical installations that help us see the world a little differently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
