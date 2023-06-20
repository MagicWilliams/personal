import React, { useState } from 'react';
import styles from './ProjectCarousel.module.scss';
import Marquee from 'react-fast-marquee';
import ProjectCard from '../ProjectCard/ProjectCard';
import Link from 'next/link';
import useWindowSize from '../../utils/useWindowSize';

export default function ProjectCarousel(props) {
  const { projects, links } = props;
  return projects ? (
    <div className={styles.ProjectCarousel}>
      <Marquee className="carousel" speed={40}>
        {projects
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .map((project, i) => {
            return <ProjectCard data={project} links={links} key={i} />;
          })}
      </Marquee>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export function ProjectColumn(props) {
  const { projects, links } = props;

  return projects ? (
    <div className={styles.ProjectColumn}>
      {projects.map((project, i) => {
        return <ProjectCard data={project} links={links} key={i} />;
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export function ProjectList(props) {
  const { projects } = props;
  const [project, setProject] = useState(null);
  const { width } = useWindowSize();

  return projects ? (
    <div className={styles.ProjectList}>
      {projects.map((currProject, i) => {
        const { name } = currProject.fields;
        const slug = '/project/' + name.replace(/\s+/g, '-').toLowerCase();
        console.log(width > 768 && project && project.fields.name === name);
        const thumbStyles =
          width > 768 && project && project.fields.name === name
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
          <div>
            <video
              style={thumbStyles}
              className="Projects--listItem-thumbnail"
              src={project.fields.media.fields.file.url}
              autoPlay
              loop
              muted
            />
            <div
              className={styles.link}
              key={i}
              onMouseOver={() => setProject(currProject)}
            >
              <Link href={slug}>{name}</Link>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
