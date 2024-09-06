'use client';

import Header from "../components/Layout/Header";
import Hero from "../components/Hero";
import Access from '../components/Access'
import Footer from "../components/Layout/Footer";
import FAQS from "../components/Layout/FAQS";
// import {ReactLenis, useLenis } from "lenis/react";

 const Home = () => {
  //  const lenisOptions = {
  //     lerp: 0.05,
  //     // duration: .5,
  //     // smoothTouch: false, //smooth scroll for touch devices
  //     // smooth: true,
  //     infinte: true
  //   };

  //   // const lenis = useLenis(({ scroll }) => {
  //   //   // called every scroll
  //   //   console.log({scroll});
      
  //   // })

   

    return (
     <main className="bg-white">
        <Header />
        <Hero />
        <Access />
        <FAQS />
        <Footer />
      </main>
    )
 }

 export default Home;