import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import GiftCard from "./GiftCard";
import OrderDetails from "./OrderDetails";

const RightDetails = ({
  plantName,
  plantPrice,
  plantImage,
  isSale,
  isSoldOut,
}) => {
  const [selectedSize, setSelectedSize] = useState("Select Size");
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const price =
    selectedSize === "Small"
      ? plantPrice.small
      : selectedSize === "Medium"
      ? plantPrice.medium
      : selectedSize === "Large"
      ? plantPrice.large
      : plantPrice.small;

  const priceText =
    selectedSize === "Select Size" ? `from $${price}.00` : `$${price}.00`;

  const handleChange = (e) => {
    if (e.target.value === "") {
      setSelectedSize("Select Size");
    } else {
      setSelectedSize(e.target.value);
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === "Select Size") {
      alert("Please select a size");
      return;
    }

    setIsAdding(true);
    setTimeout(() => {
      const item = {
        name: plantName,
        price: price,
        image: plantImage,
        size: selectedSize,
        quantity: selectedQuantity,
      };

      addToCart(item);
      setSelectedSize("Select Size");
      setSelectedQuantity(1);
      setIsAdding(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center pt-10 xl:pt-20 lg:w-1/2">
      <h3 className="text-[40px]">{plantName}</h3>
      <div className="flex gap-2 pt-6 text-lg">
        <span>{priceText}</span>
        {isSale && selectedSize === "Large" && (
          <span className="line-through text-Gray">$50.00</span>
        )}
      </div>
      <p className="w-4/5 pt-8 text-center">
        {plantName === "Gift Card"
          ? "Purchasing this digital gift card creates a unique code. The gift card recipient can enter this code at checkout to subtract the gift card value from their order total."
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
      {plantName === "Gift Card" && (
        <p className="pt-6">This gift card never expired</p>
      )}
      {plantName === "Gift Card" ? (
        <GiftCard selectedSize={selectedSize} handleChange={handleChange} />
      ) : (
        <OrderDetails
          selectedSize={selectedSize}
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
          isSoldOut={isSoldOut}
          isAdding={isAdding}
          handleAddToCart={handleAddToCart}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default RightDetails;
