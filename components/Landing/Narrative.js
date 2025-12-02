'use client';

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
        power on projects that are both conceptual and operational.
      </div>

      <div className={styles.projectsGrid}>
        <div className={styles.projectItem}>
          <Link
            href="https://sunsetindex.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHover('sunset')}
            onMouseLeave={handleLeave}
            className={styles.projectLink}
          >
            The Sunset Index (2025)
          </Link>
          <p className={styles.projectDescription}>
            is a speculative futures exchange built on Los Angeles parking-meter
            data. Part civic mirror, part financial satire, part functioning
            app.
          </p>
        </div>

        <div className={styles.projectItem}>
          <Link
            href="#"
            onMouseEnter={() => handleHover('wallart')}
            onMouseLeave={handleLeave}
            className={styles.projectLink}
          >
            &ldquo;Some Wall Art for the Crib&rdquo;
          </Link>
          <p className={styles.projectDescription}>
            transforms code, sensors, and ambient light into a living
            installation that makes software feel architectural.
          </p>
        </div>

        <div className={styles.projectItem}>
          <Link
            href="https://hammerandhope.org"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleHover('h&h')}
            onMouseLeave={handleLeave}
            className={styles.projectLink}
          >
            Hammer & Hope
          </Link>
          <p className={styles.projectDescription}>
            is an expressive, experimental online space for discussion around
            Black politics and culture.
          </p>
        </div>
      </div>

      <div className={styles.narrative}>
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

      <div
        className={`${styles.floatingVisual} ${
          hoveredItem === 'h&h' ? styles.active : ''
        }`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        <div
          className={styles.hammerAndHopePlaceholder}
          style={{ position: 'relative' }}
        >
          <Image
            src="/img/h&h.jpg"
            alt="Hammer & Hope"
            fill
            sizes="300px"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </>
  );
};

export default Narrative;
