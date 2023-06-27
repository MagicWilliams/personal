// lib
import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from 'next-sanity';

// components
import { ProjectMedia } from '../ProjectMedia/ProjectMedia';
import { videoAssetFor } from '../../utils/videoAssetFor';
import { useWindowSize } from '../../utils/useWindowSize';

import styles from './ProjectCard.module.scss';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-07-22',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export default function ProjectCard(props) {
  const { urlFor, data, isMobile } = props;
  const { title, media, mobileMedia } = data;
  console.log(isMobile);
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
      <Link href={slug} passHref>
        <div className={styles.ProjectCard}>
          <ProjectMedia
            url={coverUrl}
            isMobile={isMobile}
            media={media[0]}
            title={title}
          />
          <h3 className={styles.title}>{title}</h3>
        </div>
      </Link>
    </div>
  );
}
