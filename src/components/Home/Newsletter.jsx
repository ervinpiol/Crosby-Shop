import React from "react";
import Hero from "../../assets/Hero/newsletter_hero.jpg";

const Newsletter = () => {
  return (
    <div className="relative">
      <img src={Hero} alt="Hero" className="h-[600px] w-screen object-cover" />
      <div className="absolute flex flex-col items-center w-4/5 gap-10 px-4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:px-0">
        <h3 className="lg:text-[32px] text-[26px]">They grow up so fast.</h3>
        <p className="text-center">
          Don’t miss a thing. Sign up to receive news and updates.
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="h-16 px-6 text-black"
        />
        <button className="h-16 px-8 bg-Gray">Sign Up</button>
      </div>
    </div>
  );
};

export default Newsletter;
