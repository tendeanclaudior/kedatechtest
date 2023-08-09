import React from "react";
import Navbar from "../../Components/Navbar";
import About from "../../Components/About";
import Pricing from "../../Components/Pricing";
import Contact from "../../Components/Contact";

// saya menggunakan tailwind css agar mempermudah saya untuk mengatur responsivnya dan memperbagus tampilan pada website
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
