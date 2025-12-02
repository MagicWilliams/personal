import React from 'react';
import styles from '../../styles/Landing.module.scss';

const Bio = () => {
  return (
    <section className={styles.bio}>
      <p>
        I've always been obsessed with how things work—from the invisible data flows of a city to the quiet atmosphere of a living room.
      </p>
      <p>
        My practice is about <strong>bridging the gap</strong> between complex systems and human experience. I use code not just to build apps, but to tell stories and ask questions.
      </p>
      
      <div className={styles.techStack}>
        <span>React Native</span>
        <span>Next.js</span>
        <span>Custom APIs</span>
        <span>Data Pipelines</span>
        <span>Embedded Hardware</span>
      </div>
    </section>
  );
};

export default Bio;
