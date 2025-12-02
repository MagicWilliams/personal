import React from 'react';
import styles from './PinnedWorks.module.scss';

export default function PinnedWorks() {
  const links = [
    { label: 'Sunset Index', href: 'https://sunsetindex.com' },
    { label: 'Hammer & Hope', href: 'https://hammerandhope.org' },
    { label: 'SOULS Journal', href: 'https://soulsjournal.org' },
  ];

  return (
    <>
      <nav className={styles.fixedList} aria-label="Selected works">
        <div className={styles.label}>Selected Works</div>
        <ul>
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.mobileBar} aria-label="Selected works">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileLink}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
