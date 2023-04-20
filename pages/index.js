import React from "react";
import Head from "next/head";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";
import ScrollToTop from "../components/ScrollToTop";
import AnimationNavbar from "../components/AnimationNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ansof Habibunnadjar</title>
      </Head>
      <AnimationNavbar />
      <Hero />
      <Project />
      <Callback />
      <Footer />
      <ScrollToTop />
    </>
  );
}
