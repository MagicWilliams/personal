'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import styles from './Project.module.scss';
import { ProjectMedia } from '../../../components/ProjectMedia/ProjectMedia';
import useWindowSize from '../../../utils/useWindowSize';
import Loading from '../../../components/Loading/Loading';

export default function ProjectClientWrapper({ project, projects, mobileUrl, desktopUrl }) {
  const { width } = useWindowSize();
  const isMobile = width < 500;

  useEffect(() => {
    // Analytics tracking moved to @vercel/analytics in layout
  }, []);

  if (!project || width === -1) {
    return <Loading />;
  }

  const { description, date, media, title } = project;
  const url = isMobile && mobileUrl ? mobileUrl : desktopUrl;

  return (
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
          {isMobile && (
            <div className={styles.mediaContainer}>
              <ProjectMedia
                isMobile={isMobile}
                url={url}
                media={media[0]}
                name={title}
              />
            </div>
          )}
          <div className={styles.projectDescription}>
            <PortableText value={description} />
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className={styles.mediaContainer}>
          <ProjectMedia
            isMobile={isMobile}
            url={url}
            media={media[0]}
            name={title}
          />
        </div>
      )}
    </div>
  );
}

