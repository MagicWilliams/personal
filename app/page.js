import styles from '../styles/Landing.module.scss';
import Narrative from '../components/Landing/Narrative';

export const metadata = {
  title: 'Portfolio - D. Latimore II',
  description: 'Creative technologist and software artist.',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>DLII</span>
        <nav className={styles.nav}>
          <a href="mailto:hello@example.com">Email</a>
          <a
            href="https://github.com/magicwilliams"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://instagram.com/magic.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/dlatimore2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <Narrative />
      </main>
    </div>
  );
}
