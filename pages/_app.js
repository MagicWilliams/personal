import React from 'react';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
