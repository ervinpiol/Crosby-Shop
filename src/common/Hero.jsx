import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ image, isContact, setOpenContactModal }) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Hero Img"
        className="object-cover w-screen h-screen"
      />
      <div className="absolute w-full px-6 text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:px-0">
        <h2 className="mt-6 text-[40px] font-light leading-tight lg:text-6xl">
          {isContact ? (
            "Contact Us"
          ) : (
            <>
              Plants and Pots <br /> For Your Home
            </>
          )}
        </h2>
        {isContact && (
          <p className="mt-8 md:w-1/2 lg:w-[650px] mx-auto">
            The following text is placeholder known as “lorem ipsum,” which is
            scrambled Latin used by designers to mimic real copy. Lorem ipsum
            dolor sit amet nullam.
          </p>
        )}
        {isContact ? (
          <button
            className="flex items-center justify-center h-16 px-10 mx-auto mt-10 md:w-60 bg-Gray"
            onClick={() => setOpenContactModal(true)}
          >
            Get in Touch
          </button>
        ) : (
          <Link to="/shop">
            <span className="flex items-center justify-center h-16 mx-auto mt-10 w-44 md:w-60 bg-Gray">
              Shop Now
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
