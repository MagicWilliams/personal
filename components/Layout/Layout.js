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
  const shortPageTtitle = "david latimore ii: a digital portfolio";
  const longPageTitle = trueTitle + " - david latimore ii: a digital portfolio";
  const pageTitle = trueTitle.length > 1 ? longPageTitle : shortPageTtitle;
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Built with love." />
        <link rel="icon" href="favicon.ico" />
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
      <NextSeo
        title={pageTitle}
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
