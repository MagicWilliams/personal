import React, { useState } from 'react';
import styles from './ProjectCarousel.module.scss';
import Marquee from 'react-fast-marquee';
import ProjectCard from '../ProjectCard/ProjectCard';
import Link from 'next/link';
import useWindowSize from '../../utils/useWindowSize';
import { videoAssetFor } from '../../utils/videoAssetFor';
import { createClient } from 'next-sanity';

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-07-22',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);

export default function ProjectCarousel(props) {
  const { projects, links, urlFor } = props;
  return projects ? (
    <div className={styles.ProjectCarousel}>
      <Marquee className="carousel" speed={40}>
        {projects
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .map((project, i) => {
            return (
              <ProjectCard
                data={project}
                urlFor={urlFor}
                links={links}
                key={i}
              />
            );
          })}
      </Marquee>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export function ProjectColumn(props) {
  const { projects, links, urlFor } = props;

  return projects ? (
    <div className={styles.ProjectColumn}>
      {projects.map((project, i) => {
        return (
          <ProjectCard urlFor={urlFor} data={project} links={links} key={i} />
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export function ProjectList(props) {
  const { projects, urlFor } = props;
  const [project, setProject] = useState(null);
  const { width } = useWindowSize();

  return projects ? (
    <div className={styles.ProjectList}>
      {projects.map((currProject, i) => {
        const { title, media } = currProject;
        const slug = '/project/' + title.replace(/\s+/g, '-').toLowerCase();
        const coverUrl =
          media[0]._type === 'file'
            ? videoAssetFor(media[0].asset._ref).url
            : urlFor(media[0].asset._ref).url();

        const thumbStyles =
          width > 768 && project && project.title === title
            ? {
                display: 'block',
                zIndex: 3,
                position: 'absolute',
                right: '10vw',
                top: '250px',
                width: '50vw',
              }
            : {
                display: 'none',
              };

        return (
          <div key={i}>
            {project && (
              <video
                style={thumbStyles}
                className="Projects--listItem-thumbnail"
                src={coverUrl}
                autoPlay
                loop
                muted
              />
            )}

            <div
              className={styles.link}
              key={i}
              onMouseOver={() => setProject(currProject)}
            >
              <Link href={slug}>{title}</Link>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
