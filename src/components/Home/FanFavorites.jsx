import React from "react";
import { Link } from "react-router-dom";

import Img1 from "../../assets/plants/pencil_plant.jpg";
import Img2 from "../../assets/plants/alocasia.jpg";
import Img3 from "../../assets/plants/lily.jpg";

const FanFavorites = () => {
  const favorites = [
    {
      image: Img1,
      h3Text: "Lil' Guys",
      link: "/shop/pencil-plant",
    },
    {
      image: Img2,
      h3Text: "Bigger Statements",
      link: "/shop/alocasia",
    },
    {
      image: Img3,
      h3Text: "Low Maintenance",
      link: "/shop/lily",
    },
  ];

  return (
    <div className="w-full bg-DarkGray">
      <div className="flex flex-col items-center w-full gap-16 px-4 py-16 mx-auto lg:pb-32 md:gap-20 xl:w-2/3 lg:pt-24 xl:pt-36 md:px-8 lg:px-12">
        <h2 className="lg:text-[44px] text-[32px]">Fan Favorites</h2>
        <div className="grid w-full grid-cols-1 gap-10 md:gap-5 md:grid-cols-3">
          {favorites.map((favorite, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full gap-6 md:gap-8"
            >
              <img
                src={favorite.image}
                alt={`Image${i + 1}`}
                className="lg:h-[515px] w-full object-cover"
              />
              <h3 className="text-[26px] lg:text-[32px]">{favorite.h3Text}</h3>
              <Link to={favorite.link}>
                <span className="flex items-center justify-center h-16 px-8 bg-Gray">
                  Buy Now
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanFavorites;
