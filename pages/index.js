import React from "react";
import Callback from "../components/Callback";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Callback />
      <Footer />
    </>
  );
}
