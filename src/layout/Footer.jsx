import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "../assets/icons/instagram-icon.svg";
import FacebookIcon from "../assets/icons/facebook-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";

const Footer = () => {
  return (
    <footer className="relative w-full bg-DarkGray">
      <div className="flex flex-col justify-between px-4 pt-16 pb-32 mx-auto md:px-8 lg:px-12 xl:px-0 xl:w-2/3 md:flex-row md:py-40 lg:py-28">
        <div className="pb-12 md:pb-0">
          <div className="flex items-end">
            <h1 className="text-3xl font-bold leading-6">Crosby</h1>
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>

          <div className="absolute flex items-center gap-3 pt-10 bottom-16 md:static">
            <img src={InstagramIcon} alt="InstagramIcon" className="w-6" />
            <img src={FacebookIcon} alt="FacebookIcon" className="w-6" />
            <img src={TwitterIcon} alt="TwitterIcon" className="w-6" />
          </div>
        </div>
        <div className="flex gap-32">
          <div className="flex flex-col gap-2 underline text-Gray">
            <Link to="shop">Shop</Link>
            <Link to="our-story">Our Story</Link>
          </div>
          <div className="flex flex-col gap-2 underline text-Gray">
            <Link to="journal">Journal</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
