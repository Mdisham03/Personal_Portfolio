import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../MyServices/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Popup />
    </div>
  );
}

export default Home;
