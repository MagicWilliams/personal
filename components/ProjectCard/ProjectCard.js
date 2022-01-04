import React from "react";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard(props) {
  return (
    <div class={styles.ProjectCard}>
        <h3 class={styles.title}>Project Title</h3>
    </div>
  );
}
