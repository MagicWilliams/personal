import React from "react";
import Typist from "react-typist";
import Link from "next/Link";
import styles from "./Header.module.scss";

export default function Header(props) {
  let cursorOptions = {
    show: false,
  };

  const colorStyles = {
    color: props.color,
  };

  return (
    <div class={styles.Header}>
      <div style={colorStyles} class={styles.text}>
        <a href="/">
          <Typist cursor={cursorOptions}>
            <span class={styles.title}>david latimore ii</span>
            <Typist.Backspace count={16} delay={1600} />
            <span class={styles.title}>dlii</span>
          </Typist>
        </a>
        <p class={styles.subtitle}>a digital archive of selected works</p>
      </div>
      <div class={styles.links}>
        <img class={styles.icon} src="/img/github.svg" />
        <img class={styles.icon} src="/img/ig.svg" />
        <img class={styles.icon} src="/img/mail.svg" />
      </div>
    </div>
  );
}
