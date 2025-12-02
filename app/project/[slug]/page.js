import Link from 'next/link';
import Image from 'next/image';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import styles from './Project.module.scss';
import Layout from '../../../components/Layout/Layout';
import { videoAssetFor } from '../../../utils/videoAssetFor';
import Loading from '../../../components/Loading/Loading';
import { ProjectMedia } from '../../../components/ProjectMedia/ProjectMedia';
import ProjectClientWrapper from './ProjectClientWrapper';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
};

const client = createClient(config);
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getProject(slug) {
  const title = slug.toLowerCase().replace(/-/g, ' ');
  const projects = await client.fetch(`*[_type == "project"]`);
  const publishedProjects = projects.filter(project => {
    return project._id.substring(0, 7) !== 'drafts.';
  });

  const currentProject = publishedProjects.find(project => {
    return project.title.toLowerCase() === title;
  });

  return { project: currentProject, projects: publishedProjects };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { project } = await getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found - david latimore ii: a digital portfolio',
    };
  }

  const title = project.title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} - david latimore ii: a digital portfolio`,
    description: project.description
      ? project.description[0]?.children[0]?.text || 'Selected works'
      : 'Selected works',
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const { project, projects } = await getProject(slug);

  if (!project) {
    return (
      <Layout>
        <div className={styles.Project}>
          <h1>Project not found</h1>
          <Link href="/">Back to home</Link>
        </div>
      </Layout>
    );
  }

  const { description, date, media, mobileMedia, title } = project;

  // Pre-compute URLs for both mobile and desktop
  const mobileUrl = mobileMedia?.[0]?.asset?._ref
    ? urlFor(mobileMedia[0].asset._ref).url()
    : null;
  const desktopUrl =
    media[0]._type === 'file'
      ? videoAssetFor(media[0].asset._ref).url
      : urlFor(media[0].asset._ref).url();

  return (
    <Layout>
      <ProjectClientWrapper
        project={project}
        projects={projects}
        mobileUrl={mobileUrl}
        desktopUrl={desktopUrl}
      />
    </Layout>
  );
}
