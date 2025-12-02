import React from 'react';
import styles from './ProjectMedia.module.scss';
import Image from 'next/image';

export const ProjectMedia = props => {
  const { url, name, media, isMobile } = props;

  if (!media && !url) {
    return null;
  }

  return isMobile ? (
    <div className={styles.mobileMediaContainer}>
      <Image
        src={url}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        className={styles.ProjectMedia}
        fill
        alt={name}
        sizes="100vw"
      />
    </div>
  ) : (
    <div
      className={styles.ProjectMedia}
      dangerouslySetInnerHTML={{
        __html: `
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
      >
      <source src="${url}" type="video/mp4" alt="${name}" />
      </video>`,
      }}
    />
  );
};
