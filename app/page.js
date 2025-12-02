import styles from '../styles/Landing.module.scss';
import Narrative from '../components/Landing/Narrative';
import Link from 'next/link';

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
          <Link href="mailto:hello@delight.studio">Email</Link>
          <Link href="https://github.com/magicwilliams">Github</Link>
          <Link href="https://instagram.com/magic.zip">Instagram</Link>
          <Link href="https://linkedin.com/in/dlatimore2">LinkedIn</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Narrative />
      </main>
    </div>
  );
}
