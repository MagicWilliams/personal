import React, { useState } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectMedia } from '../ProjectMedia/ProjectMedia';
import Link from 'next/link';

export default function ProjectCard(props) {
  const { urlFor, data } = props;
  const { title, media } = data;
  const coverUrl = urlFor(media[0].asset._ref).url();
  const slug = '/project/' + title.replace(/\s+/g, '-').toLowerCase();
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <Link href={slug} passHref>
        <div className={styles.ProjectCard}>
          <ProjectMedia url={coverUrl} media={media[0]} title={title} />
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
