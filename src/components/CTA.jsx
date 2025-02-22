import React from "react";
import ButtonComponent from "./ButtonComponent";

const CTA = () => (
  <section className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col ">
      <h2 className="heading2">Lets try our service now! </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Everything you need to accept the card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <ButtonComponent>Get started</ButtonComponent>
    </div>
  </section>
);

export default CTA;
