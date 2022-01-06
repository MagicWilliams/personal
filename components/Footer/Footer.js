import React from "react";
import Link from "next/Link";
import styles from "./Footer.module.scss";
import ReactTooltip from "react-tooltip";

export default function Footer(props) {
  return (
    <div className={styles.Footer}>
      <div className={styles.links}>
        <Link href="/files/resume.pdf">
          <p className={styles.link}>résumé</p>
        </Link>
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

const Swatch = (props) => {
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
