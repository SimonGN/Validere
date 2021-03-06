import React from "react";
import App, { Container } from "next/app";
import { appWithTranslation, i18n } from "../i18n";

class MyApp extends App {
  render() {
    i18n.language ? (i18n.language = i18n.language) : "es";
    const { Component, pageProps } = this.props;
    return (
     
        <Container>
          <Component {...pageProps} />
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=fetch"></script>
        </Container>
  
    );
  }
}

export default appWithTranslation(MyApp);
