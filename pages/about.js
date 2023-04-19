import Head from "next/head";
import React from "react";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AnimationNavbar from "../components/AnimationNavbar";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Ansof Habibunnadjar</title>
      </Head>
      <AnimationNavbar />
      <Callback />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default about;
