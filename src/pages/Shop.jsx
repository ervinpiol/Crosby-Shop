import React from "react";
import Plants from "../common/Plants";

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 px-4 pb-10 md:pb-0 lg:gap-40 pt-36 md:pt-40 md:px-8 lg:px-12 bg-DarkGray">
      <div className="flex flex-col items-center">
        <h2 className="lg:text-[44px] text-[32px]">Our Plants</h2>
        <p className="md:w-[400px] lg:w-[600px] text-center pt-8">
          Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt
          arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan
          justo.
        </p>
      </div>
      <Plants />
    </div>
  );
};

export default Shop;
