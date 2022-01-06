import React, { useEffect, useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import ProjectCarousel, {
  ProjectColumn,
} from "../components/ProjectCarousel/ProjectCarousel";
import Layout from "../components/Layout/Layout";
import Loading from "../components/Loading/Loading";
import useWindowSize from "../utils/useWindowSize";
import { NextSeo } from "next-seo";

const Home = inject("store")(
  observer((props) => {
    const { getProjects, projects, links } = props.store.contentfulStore;
    const [loading, setLoading] = useState(true);
    const variants = {
      hidden: { opacity: 0, x: -200, y: 0 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: -100 },
    };

    useEffect(async () => {
      async function fetchData() {
        await getProjects().then(() => setLoading(false));
      }

      fetchData();
    });

    const isDesktop = useWindowSize().width > 900;

    return !loading ? (
      <div className="portfolio">
        <Head>
          <title>david latimore ii: a digital portfolio</title>
          <meta name="description" content="Built with love." />
          <link rel="icon" href="img/favicon.ico" />
        </Head>
        <NextSeo
          title="david latimore ii: a digital archive"
          description="a digital archive of selected websites, mobile applications, music, photos, and (soon) more by david."
          canonical="https://www.canonical.ie/"
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

        <Layout>
          {isDesktop && <ProjectCarousel projects={projects} links={links} />}
          {!isDesktop && <ProjectColumn projects={projects} links={links} />}
        </Layout>
      </div>
    ) : (
      <Loading />
    );
  })
);

export default Home;
