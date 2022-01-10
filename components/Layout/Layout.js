import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

export default function Layout(props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const [color, setColor] = useState("#00145c");
  const router = useRouter();
  const { slug } = useRouter().query;
  console.log(slug);

  let trueTitle = "";

  if (slug) {
    let words = slug.replace(/-/g, " ").split(" ");
    for (var a = 0; a < words.length; a++) {
      trueTitle +=
        words[a].substring(0, 1).toUpperCase() +
        words[a].substring(1, words[a].length) +
        " ";
    }
  }

  trueTitle = trueTitle.substring(0, trueTitle.length - 1);
  console.log(trueTitle);

  return (
    <div>
      <Head>
        <title>{trueTitle + " - david latimore ii: a digital portfolio"}</title>
        <meta name="description" content="Built with love." />
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <NextSeo
        title="david latimore ii: a digital archive"
        description="a digital archive of selected websites, mobile applications, music, photos, and (soon) more by david."
        canonical="https://davidlatimore.me"
        openGraph={{
          url: "https://davidlatimore.me",
          title: "david's portfolio",
          description:
            "a digital archive of selected websites, mobile applications, music, photos, and (soon) more by david.",
          images: [
            {
              url: "https://davidlatimore.me/img/open_graph.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          site_name: "david latimore ii: a digital archive",
        }}
        twitter={{
          handle: "@magic_zip",
          site: "https://davidlatimore.me",
          cardType: "summary_large_image",
        }}
      />
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
