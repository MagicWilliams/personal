import React from "react";
import styles from "./ProjectCarousel.module.scss";
import Marquee from "react-fast-marquee";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectCarousel(props) {
  const { projects, links } = props;

  return projects ? (
    <div class={styles.ProjectCarousel}>
      <Marquee className="carousel" speed={40}>
        {projects.map((project, i) => {
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
    <div class={styles.ProjectColumn}>
      {projects.map((project, i) => {
        return <ProjectCard data={project} links={links} key={i} />;
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
