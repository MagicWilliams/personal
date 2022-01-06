import React from "react";
import Link from "next/Link";
import styles from "./Footer.module.scss";
import ReactTooltip from "react-tooltip";

export default function Footer(props) {
  return (
    <div class={styles.Footer}>
      <div class={styles.links}>
        <Link href="https://instagram.com/magic.zip">
          <p class={styles.link}>photos</p>
        </Link>
        <Link href="/files/resume.pdf">
          <p class={styles.link}>résumé</p>
        </Link>
      </div>
      {/* <div class={styles.swatches}>
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
      class={styles.Swatch}
    />
  );
};
