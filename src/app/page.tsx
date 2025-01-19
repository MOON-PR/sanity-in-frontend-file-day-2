"use client";

import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TopHeader from "@/components/Top_Header";
import NavBar from "@/components/Navber";

const Home = () => {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
