import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const ImageSlider = ({ plantName, plantImage, hoverImage }) => {
  const images = [plantImage, hoverImage];
  const slider = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative lg:w-1/2 xl:h-[900px] flex items-center overflow-hidden">
      <AnimatePresence>
        <Slider ref={slider} {...settings} className="w-full h-full">
          {images.map((image, i) => (
            <div key={i} className="h-full">
              <motion.img
                src={image}
                alt={plantName}
                className="object-cover h-full"
              />
            </div>
          ))}
        </Slider>
      </AnimatePresence>
      {plantName !== "Gift Card" && (
        <>
          <button
            className="absolute -translate-y-1/2 left-5 top-1/2"
            onClick={() => slider.current.slickPrev()}
          >
            <img
              src={ArrowLeft}
              alt="ArrowLeft"
              className="w-4 md:w-10 lg:w-8"
            />
          </button>
          <button
            className="absolute -translate-y-1/2 right-5 top-1/2"
            onClick={() => slider.current.slickNext()}
          >
            <img src={ArrowRight} alt="ArrowRight" className="w-4 md:w-8" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
