import React from "react";
import Img from "../../assets/giftcard/giftcard.jpg";
import { Link } from "react-router-dom";

const GiftCard = () => {
  return (
    <div className="w-full bg-Gray">
      <div className="flex flex-col items-center px-4 py-16 mx-auto gap-14 lg:gap-24 xl:gap-32 md:py-24 lg:py-32 xl:w-2/3 md:flex-row md:px-8 lg:px-12 xl:px-0">
        <div>
          <img src={Img} alt="Img" className="object-cover lg:h-[700px]" />
        </div>
        <div className="flex flex-col items-center gap-6 md:items-start">
          <h3 className="lg:text-[44px] text-[32px] font-light leading-tight">
            Give the Gift of Greenery
          </h3>
          <p className="lg:w-[520px]">
            Plants are as thoughtful a gift as flowers and last much longer.
            With a gift card, you can brighten up someone’s home, office or dorm
            room with a potted plant of their choice. They’re available in any
            denomination and we’ll mail it for free!
          </p>
          <Link to="/shop/gift-card">
            <span className="flex items-center justify-center h-16 bg-white px-14 text-Gray">
              Purchase a Gift Card
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
