import React from "react";
import { Provider } from "mobx-react";
import { AnimatePresence } from "framer-motion";
import RootStore from "../stores/RootStore";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Provider store={RootStore}>
          <Component {...pageProps} />
        </Provider>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
