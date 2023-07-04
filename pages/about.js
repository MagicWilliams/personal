import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../styles/About.module.scss';

export const About = () => {
  return (
    <Layout>
      <div className={styles.About}>
        <h1>About</h1>
        <p className={styles.AboutBody}>
          compulsively.online is a digital archive of creative works by david
          latimore ii, a technologist, musician, and designer. his work is
          inspired by performance art, the readymade, and the internet and often
          points to the importance of art and design in our lives. many of the
          works below leverage his background in interface design, musical and
          vocal performance, modeling, software engineering and artificial
          intelligence, sport, and other areas to produce works that are
          personal, informed, and multi-disciplinary.
        </p>
      </div>
    </Layout>
  );
};

export default About;
