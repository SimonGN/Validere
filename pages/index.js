import Meta from "../components/Meta";
import React, { createRef } from "react";
import PropTypes from "prop-types";



import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

import AOS from "aos";
import "aos/dist/aos.css";

import { withTranslation } from "../i18n";

import router from 'next/router'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.ref = createRef()
  }
  componentDidMount() {
    this.runAOS();
    if(router.query && router.query.scroll) {
      setTimeout(() => {
        this.handleScroll()
      }, 100);
    }
      
  }
  runAOS = () => {
    if (!AOS.refresh()) {
      AOS.init({
        disable: false,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: "ease",
        once: false,
        mirror: false,
        anchorPlacement: "top-bottom",
        ssr: true
      });
    }
  };

  handleScroll = () => {
    this.ref.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    return (
      <React.Fragment>
        <Meta/>
        <Nav/>
        <Footer />
      </React.Fragment>
    );
  }
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["Home"]
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("Home")(Home);
