import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
