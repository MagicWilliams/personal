import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Landing.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Narrative = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Track cursor position for the floating visual
  useEffect(() => {
    const handleMouseMove = e => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHover = item => {
    setHoveredItem(item);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className={styles.narrative}>
        Hi, I’m <span className={styles.highlight}>David</span> — a&nbsp;
        <span className={styles.keyword}>software engineer</span> and{' '}
        <span className={styles.keyword}>artist</span> who studies the hidden
        mechanics of everyday life and turns them into tools, systems, and
        stories. My work sits at the intersection of{' '}
        <span className={styles.keyword}>civic data</span>,{' '}
        <span className={styles.keyword}>financial logic</span>, and{' '}
        <span className={styles.keyword}>creative technology</span>, using code
        as a way to expose how infrastructure shapes behavior, opportunity, and
        power.
        <br />
        <br />I build projects that are both conceptual and operational.{' '}
        <Link
          href="https://sunsetindex.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => handleHover('sunset')}
          onMouseLeave={handleLeave}
        >
          Sunset Index
        </Link>{' '}
        is a speculative futures exchange built on Los Angeles parking-meter
        data — part civic mirror, part financial satire, part functioning app.{' '}
        <a
          href="#"
          onMouseEnter={() => handleHover('wallart')}
          onMouseLeave={handleLeave}
        >
          Wall Art for the Crib
        </a>{' '}
        transforms code, sensors, and ambient light into a living installation
        that makes software feel architectural.
        <br />
        <br />
        Across <span className={styles.keyword}>React Native</span>,{' '}
        <span className={styles.keyword}>embedded hardware</span>,{' '}
        <span className={styles.keyword}>data pipelines</span>, and{' '}
        <span className={styles.keyword}>custom interfaces</span>, I use
        engineering as a medium: a way to prototype alternative realities,
        challenge default assumptions, and create work that’s culturally
        attuned, technically rigorous, and built for real people.
      </div>

      {/* Floating Visuals */}
      <div
        className={`${styles.floatingVisual} ${
          hoveredItem === 'sunset' ? styles.active : ''
        }`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div
          className={styles.sunsetPlaceholder}
          style={{ position: 'relative' }}
        >
          <Image
            src="/img/sunset-index.png"
            alt="Sunset Index"
            fill
            sizes="300px"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <div
        className={`${styles.floatingVisual} ${
          hoveredItem === 'wallart' ? styles.active : ''
        }`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div
          className={styles.wallartPlaceholder}
          style={{ position: 'relative' }}
        >
          <Image
            src="/img/swaftc.jpg"
            alt="Wall Art for the Crib"
            fill
            sizes="300px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </>
  );
};

export default Narrative;
