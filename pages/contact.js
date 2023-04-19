import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "../components/Contact";
import AnimationNavbar from "../components/AnimationNavbar";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Ansof Habibunnadjar</title>
      </Head>
      <AnimationNavbar />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default contact;
