import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import ProjectCarousel, {
  ProjectColumn,
  ProjectList,
} from '../components/ProjectCarousel/ProjectCarousel';
import Layout from '../components/Layout/Layout';
import Loading from '../components/Loading/Loading';
import useWindowSize from '../utils/useWindowSize';

const Home = props => {
  const { projects } = props;
  const links = null;
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('gallery');

  const flipView = () => {
    if (view === 'gallery') {
      setView('list');
    } else {
      setView('gallery');
    }
  };

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
    }

    fetchData();
  });

  const isDesktop = useWindowSize().width > 900;
  const isMobile = useWindowSize().width < 500;

  useEffect(() => {
    ReactGA.initialize('UA-151714597-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return !loading ? (
    <Layout view={view} page="index" flipView={flipView} isMobile={isMobile}>
      {isDesktop && view === 'gallery' && (
        <ProjectCarousel
          isMobile={isMobile}
          urlFor={urlFor}
          projects={projects}
          links={links}
        />
      )}
      {!isDesktop && view === 'gallery' && (
        <ProjectColumn
          isMobile={isMobile}
          urlFor={urlFor}
          projects={projects}
          links={links}
        />
      )}
      {view === 'list' && (
        <ProjectList urlFor={urlFor} projects={projects} links={links} />
      )}
    </Layout>
  ) : (
    <Loading />
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

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "project"]`);
  const publishedProjects = projects.filter((project, i) => {
    return project._id.substring(0, 7) !== 'drafts.' && project.show === true;
  });
  return {
    props: {
      projects: publishedProjects,
    },
  };
}

export default Home;
