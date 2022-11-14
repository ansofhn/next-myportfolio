import Head from "next/head";
import React from "react";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Ansof Habibunnadjar</title>
      </Head>
      <Navbar />
      <Callback />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default about;
