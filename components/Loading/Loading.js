import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <Head>
        <title>david latimore ii: a digital archive</title>
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
        <meta
          name="twitter:image"
          content="https://davidlatimore.me/img/d.png"
        />
      </Head>
      <NextSeo
        title="david latimore ii: a digital archive"
        description="selected works"
        canonical="https://davidlatimore.me"
        openGraph={{
          url: "https://davidlatimore.me",
          title: "david's portfolio",
          description: "selected works",
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
          cardType: "summary",
        }}
      />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
