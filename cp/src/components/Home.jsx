// src/pages/Home.jsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}
