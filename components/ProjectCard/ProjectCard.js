// lib
import React, { useState } from 'react';
import Link from 'next/link';

// components
import { ProjectMedia } from '../ProjectMedia/ProjectMedia';
import { videoAssetFor } from '../../utils/videoAssetFor';
import { createClient } from 'next-sanity';
import styles from './ProjectCard.module.scss';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-07-22',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export default function ProjectCard(props) {
  const { urlFor, data } = props;
  const { title, media } = data;
  const coverUrl =
    media[0]._type === 'file'
      ? videoAssetFor(media[0].asset._ref).url
      : urlFor(media[0].asset._ref).url();
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
