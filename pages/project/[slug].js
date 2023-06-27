import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import styles from './Project.module.scss';
import Layout from '../../components/Layout/Layout';
import { videoAssetFor } from '../../utils/videoAssetFor';
import Loading from '../../components/Loading/Loading';
import { ProjectMedia } from '../../components/ProjectMedia/ProjectMedia';
import useWindowSize from '../../utils/useWindowSize';
import ReactGA from 'react-ga';

const Project = props => {
  const { project, projects } = props;
  const { width } = useWindowSize();
  const isTablet = width <= 900 && width >= 500;
  const isMobile = width < 500;
  const isDesktop = !isTablet && !isMobile;

  useEffect(() => {
    ReactGA.initialize('UA-151714597-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  if (!project || width === -1) {
    return <Loading />;
  }

  const { description, date, media, mobileMedia, title } = project;
  const url = isMobile
    ? urlFor(mobileMedia[0].asset._ref).url()
    : media[0]._type === 'file' && !isMobile
    ? videoAssetFor(media[0].asset._ref).url
    : urlFor(media[0].asset._ref).url();

  return (
    <Layout>
      <div className={styles.Project}>
        <div className={styles.info}>
          <div>
            <Link href="/">
              <div className={styles.backLink}>
                <Image src="/img/arrow.svg" width={20} height={20} alt="back" />
                <p className={styles.iconText}>back</p>
              </div>
            </Link>
            <h1 className={styles.projectTitle}>{title}</h1>
            <p className={styles.projectWhen}>{date}</p>

            <div className={styles.projectDescription}>
              <PortableText value={description} />
            </div>
          </div>
        </div>
        <div className={styles.mediaContainer}>
          <ProjectMedia url={url} media={media[0]} title={title} />
        </div>
      </div>
    </Layout>
  );
};

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2022-07-22',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let title = slug.toLowerCase().replace(/-/g, ' ');

  const projects = await client.fetch(`*[_type == "project"]`);
  const publishedProjects = projects.filter((project, i) => {
    return project._id.substring(0, 7) !== 'drafts.';
  });

  const currentProject = publishedProjects.filter((project, i) => {
    return project.title.toLowerCase() === title;
  })[0];

  return {
    props: {
      project: currentProject,
      projects: publishedProjects,
    },
  };
}

export default Project;
