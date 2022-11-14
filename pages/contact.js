import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Ansof Habibunnadjar</title>
      </Head>
      <Navbar />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default contact
