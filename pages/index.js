import React from 'react';
import Head from 'next/head';
import styles from '../styles/Landing.module.scss';
import Narrative from '../components/Landing/Narrative';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Software as Medium</title>
        <meta name="description" content="Creative technologist and software artist." />
      </Head>

      <header className={styles.header}>
        <span className={styles.logo}>DLII</span>
        <nav className={styles.nav}>
          <a href="mailto:hello@example.com">Email</a>
          <a href="https://github.com/magicwilliams" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://instagram.com/magic.zip" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/in/dlatimore2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </header>

      <main className={styles.main}>
        <Narrative />
      </main>
    </div>
  );
};

export default Home;
