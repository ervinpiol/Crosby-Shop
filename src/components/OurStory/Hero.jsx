import React from "react";
import Img from "../../assets/Hero/ourStory_hero.jpg";

const Hero = () => {
  return (
    <div className="h-[550px] md:h-[700px] lg:h-[600px] relative">
      <img src={Img} alt="Hero" className="object-cover w-full h-full" />
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h2 className="mt-6 text-[40px] lg:text-6xl font-light leading-tight">
          Our Story
        </h2>
      </div>
    </div>
  );
};

export default Hero;
