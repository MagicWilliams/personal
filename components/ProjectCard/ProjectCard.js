import React, { useState } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectMedia } from '../ProjectMedia/ProjectMedia';
import Link from 'next/link';

export default function ProjectCard(props) {
  const { name, media, mobileMedia } = props.data.fields;
  const { url } = media.fields.file;
  const mobileMediaUrl = mobileMedia.fields.file;
  const slug = '/project/' + name.replace(/\s+/g, '-').toLowerCase();
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <Link href={slug} passHref>
        <div className={styles.ProjectCard}>
          <ProjectMedia url={url} name={name} mobileMediaUrl={mobileMediaUrl} />
          <h3 className={styles.title}>{name}</h3>
        </div>
      </Link>
    </div>
  );
}
