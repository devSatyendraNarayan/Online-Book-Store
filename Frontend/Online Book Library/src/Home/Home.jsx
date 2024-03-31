/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FreeBook from '../components/FreeBook';
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home;
