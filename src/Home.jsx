import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero';
import Support from './component/Support';
import Platform from './component/Platform';
import Pricing from './component/Pricing';
import Footer from './component/Footer';
import About from './component/About';
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Support/>
    <Platform/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default Home