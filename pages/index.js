import React, { useEffect, useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import ProjectCarousel, {
  ProjectColumn,
  ProjectList,
} from "../components/ProjectCarousel/ProjectCarousel";
import Layout from "../components/Layout/Layout";
import Loading from "../components/Loading/Loading";
import useWindowSize from "../utils/useWindowSize";
import ReactGA from "react-ga";

const Home = inject("store")(
  observer((props) => {
    const { getProjects, projects, links } = props.store.contentfulStore;

    const [loading, setLoading] = useState(true);
    const [view, setView] = useState("gallery");

    const flipView = () => {
      if (view === "gallery") {
        setView("list");
      } else {
        setView("gallery");
      }
    };

    const variants = {
      hidden: { opacity: 0, x: -200, y: 0 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: -100 },
    };

    useEffect(() => {
      async function fetchData() {
        await getProjects().then(() => setLoading(false));
      }

      fetchData();
    });

    const isDesktop = useWindowSize().width > 900;
    const isMobile = useWindowSize().width < 500;
    useEffect(() => {
      ReactGA.initialize("UA-151714597-2");
      ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return !loading ? (
      <Layout view={view} flipView={flipView} isMobile={isMobile}>
        {isDesktop && view === "gallery" && (
          <ProjectCarousel projects={projects} links={links} />
        )}
        {!isDesktop && view === "gallery" && (
          <ProjectColumn projects={projects} links={links} />
        )}
        {view === "list" && <ProjectList projects={projects} links={links} />}
      </Layout>
    ) : (
      <Loading />
    );
  })
);

export default Home;
