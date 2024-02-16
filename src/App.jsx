import React from "react";
import './App.css'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="paddingX flexCenter">
        <Navbar/>
      </div>

      <div className="bg-primary flexStart">
        <div className="boxWidth">
          <Hero/>
        </div>
      </div>

      <div className="bg-primary paddingX flexStart">
        <div className="boxWidth">
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
