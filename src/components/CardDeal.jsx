import React from "react";
import { card } from "../assets";
import { layout } from "../style";
import ButtonComponent from "./ButtonComponent";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="heading2">
        Find a better deal <br className="md:block hidden" /> in few easy steps.
      </h2>
      <p className="paragraph max-w-[480px] mt-5 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit incidunt
        laborum adipisci tempore omnis sequi, molestias magnam eveniet. Quam
        nisi, officia ea amet velit possimus reprehenderit iusto pariatur a
        molestiae!
      </p>
      <ButtonComponent styles="mt-10">Get Started</ButtonComponent>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
  </section>
);

export default CardDeal;
