import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";
import styles from "./Layout.module.scss";

export default function Layout(props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const [color, setColor] = useState("#00145c");

  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <motion.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="Layout"
      >
        <Header color={color} />
        {props.children}
        <Footer handleColorChange={setColor} />
      </motion.div>
    </div>
  );
}
