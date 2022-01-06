import React, { useEffect, useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Link from "next/Link";
import styles from "./Project.module.scss";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import useWindowSize from "../../utils/useWindowSize";

const Project = inject("store")(
  observer((props) => {
    const { project } = props;
    const { width } = useWindowSize();
    const isTablet = width <= 900 && width >= 500;
    const isMobile = width < 500;
    const isDesktop = !isTablet && !isMobile;

    if (!project || width === -1) {
      return <Loading />;
    }

    const widthStyles = isDesktop
      ? {
          width: "50%",
          paddingRight: "5vw",
        }
      : {
          width: "100%",
          paddingRight: "0",
        };

    const { name, media, description, when, references } = project.fields;
    const { url } = media.fields.file;
    const projectLink = references[0].fields;
    return isDesktop ? (
      <Layout>
        <div class={styles.Project}>
          <div style={widthStyles} class={styles.info}>
            <div>
              <Link href="/">
                <div class={styles.link}>
                  <img class={styles.icon} src="/img/arrow.svg" />
                  <p>back</p>
                </div>
              </Link>
              <h1 class={styles.projectTitle}>{name}</h1>
              <p class={styles.projectWhen}>{when}</p>
              <p class={styles.projectDescription}>{description}</p>
            </div>
            <Link href={projectLink.link}>
              <div class={styles.link}>
                <img class={styles.linkIcon} src="/img/link.svg" />
                <p class={styles.projectLink}>{projectLink.name}</p>
              </div>
            </Link>
          </div>
          <div style={widthStyles} class={styles.mediaContainer}>
            <img class={styles.projectImg} src={url} />
          </div>
        </div>
      </Layout>
    ) : (
      <Layout>
        <div class={styles.Project}>
          <div style={widthStyles} class={styles.info}>
            <div>
              <Link href="/">
                <div class={styles.link}>
                  <img class={styles.icon} src="/img/arrow.svg" />
                  <p>back</p>
                </div>
              </Link>
              <h1 class={styles.projectTitle}>{name}</h1>
              <p class={styles.projectWhen}>{when}</p>
              <img class={styles.projectImg} src={url} />
              <p class={styles.projectDescription}>{description}</p>
            </div>
            <Link href={projectLink.link}>
              <div class={styles.link}>
                <img class={styles.linkIcon} src="/img/link.svg" />
                <p class={styles.projectLink}>{projectLink.name}</p>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    );
  })
);

export async function getStaticProps({ params }) {
  let prevSlug;
  let nextSlug;
  let project;

  console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  await client
    .getEntries({
      content_type: "project",
    })
    .then((res) => {
      for (var item in res.items) {
        let trueTitle = "";

        const { slug } = params;
        let words = slug.replace(/-/g, " ").split(" ");
        for (var a = 0; a < words.length; a++) {
          trueTitle +=
            words[a].substring(0, 1).toUpperCase() +
            words[a].substring(1, words[a].length) +
            " ";
        }
        trueTitle = trueTitle.substring(0, trueTitle.length - 1);

        if (
          res.items[item].fields.name
            .toLowerCase()
            .replace(":", "")
            .replace(/-/g, " ") ===
          trueTitle.toLowerCase().replace(":", "").replace(/-/g, " ")
        ) {
          project = res.items[item];
          if (res.items[parseInt(item) + 1]) {
            nextSlug = res.items[parseInt(item) + 1].fields.name
              .replace(/\s+/g, "-")
              .replace(":", "")
              .toLowerCase();
          } else {
            nextSlug = res.items[0].fields.name
              .replace(/\s+/g, "-")
              .replace(":", "")
              .toLowerCase();
          }

          if (res.items[parseInt(item) - 1]) {
            prevSlug = res.items[parseInt(item) - 1].fields.name
              .replace(/\s+/g, "-")
              .replace(":", "")
              .toLowerCase();
          } else {
            prevSlug = res.items[res.items.length - 1].fields.name
              .replace(/\s+/g, "-")
              .replace(":", "")
              .toLowerCase();
          }
        }
      }
    });

  return {
    props: {
      nextSlug,
      prevSlug,
      project,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/project/grow-room",
    ],
    fallback: true,
  };
}

export default Project;
