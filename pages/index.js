import React, { useEffect, useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import ProjectCarousel, {
  ProjectColumn,
} from "../components/ProjectCarousel/ProjectCarousel";
import Layout from "../components/Layout/Layout";
import Loading from "../components/Loading/Loading";
import useWindowSize from "../utils/useWindowSize";

const Home = inject("store")(
  observer((props) => {
    const { getProjects, projects, links } = props.store.contentfulStore;
    const [loading, setLoading] = useState(true);
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

    return !loading ? (
      <Layout>
        {isDesktop && <ProjectCarousel projects={projects} links={links} />}
        {!isDesktop && <ProjectColumn projects={projects} links={links} />}
      </Layout>
    ) : (
      <Loading />
    );
  })
);

export default Home;
