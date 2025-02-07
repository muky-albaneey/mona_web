// import React from "react";
import Navbar from "../Header";
import './home.css';
import Home_about from "./Home_about";
import HomeServices from "./Home_service";
import ProtectionPlans from "./Home_plan";
import FaqAccordion from "../accordion/Accordion";
import Footer from "../footer/Foo";

const Home = () => {
  return (
    <div className="w-full font-sans" id="homeCon">
     <div className="homeTop">
          <header className="w-full ">
              <Navbar />
            </header>
          <section className="hero">
            <h2 className="text-white">
            Delivering smart repair solutions for your device
            </h2>
            <p className="text-white">
            Your reliable solution to connect with authorized service providers near you.
            </p>
           <div id="btnHeroCon">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 text-base sm:p-2 sm:text-sm">
  Download App
</button>

<button className="bg-white hover:bg-blue-700 text-blue-900 p-3 text-base sm:p-2 sm:text-sm">
  Find an Authorized Partner Near You
</button>


           </div>
          </section>
     </div>
     <section className="homeAbout">
        <Home_about />
     </section>
     <section className="homeServices">
        <HomeServices />
     </section>
    {/* <div className="conWork"> */}
      <section className="homeWork"></section>
    {/* </div> */}
    <section className="homePlan">
      <ProtectionPlans />
    </section>
    <section className="foo">
    <FaqAccordion />
    <Footer />
    </section>
    </div>
  );
};

export default Home;
