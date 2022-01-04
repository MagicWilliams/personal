import React from "react";
import styles from "./ProjectCarousel.module.scss";
import Marquee from "react-fast-marquee";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectCarousel(props) {
  return (
    <div class={styles.ProjectCarousel}>
      <Marquee className="carousel">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Marquee>
    </div>
  );
}
