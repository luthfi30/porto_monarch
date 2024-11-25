import React from "react";

import { Link } from "react-router-dom";
import WomanImg from "../img/model2.jpg";
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-1 bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[60px] leading-[1.1] font-light mb-4">
            MORE THAN JUST <br /> FASHION, IT'S <br />
            <span className="font-semibold">A STATEMENT </span>
          </h1>
          <br />
          <Link to="/" className="self-start uppercase font-semibold border-b-2 border-primary">
            Explore Our Exclusive Collection
          </Link>
        </div>
        <div className="hidden lg:block  ">
          <img src={WomanImg} alt="" className="h-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
