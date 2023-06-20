import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer(props) {
  const { view, flipView, isMobile } = props;
  let viewTxt = view === 'gallery' ? 'list view' : 'gallery view';
  return (
    <div className={styles.Footer}>
      <div className={styles.links}>
        <Link href="/files/resume.pdf" passHref>
          <p className={styles.link}>résume</p>
        </Link>
        {!isMobile && (
          <p className={styles.view} onClick={flipView}>
            {viewTxt}
          </p>
        )}
      </div>
      {/* <div className={styles.swatches}>
        <Swatch
          color="#ffb9a3"
          name="Coral Velour"
          handleColorChange={props.handleColorChange}
        />
      </div> */}
    </div>
  );
}

const Swatch = props => {
  const { color, handleColorChange } = props;
  const swatchStyles = {
    backgroundColor: color,
  };
  return (
    <div
      onClick={() => handleColorChange(color)}
      style={swatchStyles}
      className={styles.Swatch}
    />
  );
};
