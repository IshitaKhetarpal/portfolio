import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/about";
import Carousel from './components/Carousel';
import Contact from "./components/contact";
import Footer from "./components/footer";
import "jquery/src/jquery";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
