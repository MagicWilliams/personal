import React from "react";
import styles from "./ProjectCarousel.module.scss";
import Marquee from "react-fast-marquee";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";

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

  return projects ? (
    <div className={styles.ProjectList}>
      {projects.map((project, i) => {
        const { name } = project.fields;
        const slug = "/project/" + name.replace(/\s+/g, "-").toLowerCase();

        return (
          <div className={styles.link}>
            <Link href={slug}>{name}</Link>
          </div>
        );
      })}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
