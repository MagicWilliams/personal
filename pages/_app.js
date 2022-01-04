import React from "react";
import { Provider } from "mobx-react";
import "../styles/globals.scss";
import RootStore from "../stores/RootStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={RootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
