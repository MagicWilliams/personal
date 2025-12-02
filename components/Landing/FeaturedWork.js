import React from 'react';
import styles from '../../styles/Landing.module.scss';

const FeaturedWork = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.sectionHeader}>
        <span>Selected Works 2023—2024</span>
      </div>
      
      <div className={styles.projectList}>
        {/* Project 1 */}
        <div className={styles.project}>
          <div className={`${styles.projectVisual} ${styles.sunset}`}>
            {/* Placeholder for abstract visual */}
          </div>
          <div className={styles.projectContent}>
            <span className={styles.meta}>01 / Civic Tech / 2024</span>
            <h3>Sunset Index</h3>
            <p>A speculative futures market built on top of LA street parking data. A civic-satire Bloomberg terminal for the public curb.</p>
            <a href="#" className={styles.cta}>Explore System</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className={styles.project}>
          <div className={`${styles.projectVisual} ${styles.wallart}`}>
            {/* Placeholder for abstract visual */}
          </div>
          <div className={styles.projectContent}>
            <span className={styles.meta}>02 / Hardware / 2023</span>
            <h3>Wall Art for the Crib</h3>
            <p>A temporal light installation for the home. Arduino-driven gradients, ambient computing, software as atmosphere.</p>
            <a href="#" className={styles.cta}>View Installation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
