import React from 'react';
import styles from '../../styles/Landing.module.scss';

const Bio = () => {
  return (
    <section className={styles.bio}>
      <p>
        I’m <strong>David</strong> — a software engineer and artist who studies
        the hidden mechanics of everyday life and turns them into tools,
        systems, and stories. My work sits at the intersection of civic data,
        financial logic, and creative technology, using code as a way to expose
        how infrastructure shapes behavior, opportunity, and power.
      </p>
      <p>
        I build projects that are both conceptual and operational. The Sunset
        Index is a speculative futures exchange built on Los Angeles
        parking-meter data — part civic mirror, part financial satire, part
        functioning app. &ldquo;Some Wall Art for the Crib&rdquo; (2020) transforms code,
        sensors, and ambient light into a living installation that makes
        software feel architectural.
      </p>
      <p>
        Across React Native, embedded hardware, data pipelines, and custom
        interfaces, I use engineering as a medium: a way to prototype
        alternative realities, challenge default assumptions, and create work
        that’s culturally attuned, technically rigorous, and built to ship — not
        just theorize.
      </p>
    </section>
  );
};

export default Bio;
