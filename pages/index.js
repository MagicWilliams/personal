import React, { useEffect } from 'react';
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Head from 'next/head'
import Header from '../components/Header/Header'
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel'
import Footer from '../components/Footer/Footer'

const Home = inject("store")(
  observer((props) => {
    useEffect(() => {
      props.store.contentfulStore.getProjects();
    });

    return (
      <div class="portfolio">
        <Head>
          <title>david latimore ii: a digital portfolio</title>
          <meta name="description" content="Built with love." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Header />
          <ProjectCarousel />
          <Footer />
        </main>
  
        <footer>
          Put something here
        </footer>
      </div>
    )
  })
);

export default Home;
