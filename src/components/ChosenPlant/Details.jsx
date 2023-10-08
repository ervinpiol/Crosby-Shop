import React from "react";
import { Link, useParams } from "react-router-dom";
import RightDetails from "./RightDetails";
import ImageSlider from "./ImageSlider";
import { shopItems } from "../../data/shopItems";

const Details = () => {
  const { plantName } = useParams();

  const plant = shopItems.find(
    (p) =>
      p.name.toLowerCase().replace(/\s+/g, "-").replace(/\?/g, "") === plantName
  );

  const { image, name, price, hoverImage, isSale, isSoldOut } = plant;

  const bigName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <div className="flex gap-3">
        <Link to="/shop">Shop</Link>
        <p className="before:content-['\203A'] before:pr-3">{bigName}</p>
      </div>
      <div className="flex flex-col pt-8 xl:pt-20 xl:gap-32 lg:flex-row">
        <ImageSlider
          plantName={name}
          plantImage={image}
          hoverImage={hoverImage}
        />
        <RightDetails
          plantName={name}
          plantPrice={price}
          plantImage={image}
          isSale={isSale}
          isSoldOut={isSoldOut}
        />
      </div>
    </>
  );
};

export default Details;
