import React from "react";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";

export default function ProjectCard(props) {
  const { name, when, references, media, description } = props.data.fields;
  const { url } = media.fields.file;
  const slug = "/project/" + name.replace(/\s+/g, "-").toLowerCase();

  return (
    <Link href={slug} scroll={false}>
      <div className={styles.ProjectCard}>
        <img src={url} alt={name} />
        <h3 className={styles.title}>{name}</h3>
      </div>
    </Link>
  );
}
