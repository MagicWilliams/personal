import React, { useEffect, useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import Image from "next/image";
import styles from "./Project.module.scss";
import Layout from "../../components/Layout/Layout";
import Loading from "../../components/Loading/Loading";
import { ProjectMedia } from "../../components/ProjectMedia/ProjectMedia";
import useWindowSize from "../../utils/useWindowSize";
import ReactGA from "react-ga";

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

    const { name, media, description, when, references, mobileMedia } =
      project.fields;
    const { url } = media.fields.file;
    const mobileMediaUrl = mobileMedia.fields.file;
    const projectLink = references[0].fields;

    useEffect(() => {
      ReactGA.initialize("UA-151714597-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return isDesktop ? (
      <Layout>
        <div className={styles.Project}>
          <div style={widthStyles} className={styles.info}>
            <div>
              <Link href="/">
                <div className={styles.link}>
                  <Image
                    src="/img/arrow.svg"
                    width={20}
                    height={20}
                    alt="back"
                  />
                  <p className={styles.iconText}>back</p>
                </div>
              </Link>
              <h1 className={styles.projectTitle}>{name}</h1>
              <p className={styles.projectWhen}>{when}</p>
              <p className={styles.projectDescription}>{description}</p>
            </div>
            {references.map((ref, i) => {
              const { name, link } = ref.fields;
              return (
                <Link href={link} key={i}>
                  <div className={styles.link}>
                    <Image
                      src="/img/link.svg"
                      width={16}
                      height={16}
                      alt={name}
                    />
                    <p className={styles.projectLink}>{name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={widthStyles} className={styles.mediaContainer}>
            <ProjectMedia
              url={url}
              name={name}
              mobileMediaUrl={mobileMediaUrl}
            />
          </div>
        </div>
      </Layout>
    ) : (
      <Layout>
        <div className={styles.Project}>
          <div style={widthStyles} className={styles.info}>
            <div>
              <Link href="/">
                <div className={styles.link}>
                  <Image
                    src="/img/arrow.svg"
                    width={20}
                    height={20}
                    alt="back"
                  />
                  <p className={styles.iconText}>back</p>
                </div>
              </Link>
              <h1 className={styles.projectTitle}>{name}</h1>
              <p className={styles.projectWhen}>{when}</p>
              <ProjectMedia
                url={url}
                name={name}
                mobileMediaUrl={mobileMediaUrl}
              />
              <p className={styles.projectDescription}>{description}</p>
            </div>
            {references.map((ref, i) => {
              const { name, link } = ref.fields;
              return (
                <Link href={link} key={i}>
                  <div className={styles.link}>
                    <Image
                      src="/img/link.svg"
                      width={16}
                      height={16}
                      alt={name}
                    />
                    <p className={styles.projectLink}>{name}</p>
                  </div>
                </Link>
              );
            })}
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
