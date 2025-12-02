'use client';

// lib
import React, { useState } from 'react';
import Link from 'next/link';

// components
import { ProjectMedia } from '../ProjectMedia/ProjectMedia';
import { videoAssetFor } from '../../utils/videoAssetFor';

import styles from './ProjectCard.module.scss';

export default function ProjectCard(props) {
  const { urlFor, data, isMobile } = props;
  const { title, media, mobileMedia } = data;
  const coverUrl = isMobile
    ? urlFor(mobileMedia[0].asset._ref).url()
    : media[0]._type === 'image'
    ? urlFor(media[0].asset._ref).url()
    : videoAssetFor(media[0].asset._ref).url;
  const slug = '/project/' + title.replace(/\s+/g, '-').toLowerCase();

  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <Link href={slug}>
        <div className={styles.ProjectCard}>
          <ProjectMedia
            url={coverUrl}
            isMobile={isMobile}
            media={media[0]}
            name={title}
          />
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
