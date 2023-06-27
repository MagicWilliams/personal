import React, { useState, useRef, useEffect } from 'react';
import styles from './ProjectMedia.module.scss';
import Image from 'next/image';
import useWindowSize from '../../utils/useWindowSize';

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

export const ProjectMedia = props => {
  const { url, name, media, isMobile } = props;

  if (!media && !url) {
    return null;
  }

  return media._type === 'image' || isMobile ? (
    <div className={styles.mobileMediaContainer}>
      <Image
        src={url}
        placeholder="blur"
        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        className={styles.ProjectMedia}
        layout="fill"
        alt={name}
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
        playsinline
        preload="metadata"
      >
      <source src="${url}" type="video/mp4" alt="${name}" />
      </video>`,
      }}
    />
  );
};
