import React from 'react';
import styles from '../../styles/Landing.module.scss';

const Philosophy = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.content}>
        <h2>Notes</h2>
        <ul>
          <li>
            <strong>Code as Medium</strong>
            Software isn't just a utility; it's a material we can shape to express ideas.
          </li>
          <li>
            <strong>Systems as Subject</strong>
            I'm interested in the rules that govern our lives, from municipal codes to algorithms.
          </li>
          <li>
            <strong>Small Tools</strong>
            Sometimes the most powerful software is a simple, single-purpose tool that does one thing beautifully.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Philosophy;
