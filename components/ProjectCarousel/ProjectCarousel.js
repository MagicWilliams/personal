import React from "react";
import styles from "./ProjectCarousel.module.scss";
import Marquee from "react-fast-marquee";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectCarousel(props) {
  const { projects, links } = props;
  const shuffledProjects = projects.sort((a, b) => 0.5 - Math.random());
  return projects ? (
    <div className={styles.ProjectCarousel}>
      <Marquee className="carousel" speed={40}>
        {shuffledProjects.map((project, i) => {
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
  const shuffledProjects = projects.sort((a, b) => 0.5 - Math.random());

  return shuffledProjects ? (
    <div className={styles.ProjectColumn}>
      {shuffledProjects.map((project, i) => {
        return <ProjectCard data={project} links={links} key={i} />;
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
