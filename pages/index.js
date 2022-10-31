import React from "react";
import Head from "next/head";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ansof Habibunnadjar</title>
      </Head>
      <Navbar />
      <Hero />
      <Project />
      <Callback />
      <Footer />
    </>
  );
}
