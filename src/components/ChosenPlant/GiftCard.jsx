import React from "react";
import { useCart } from "../../context/CartContext";
import MessageModal from "../../common/MessageModal";

const GiftCard = ({ selectedSize, handleChange }) => {
  const { checkout, isCheckingOut, handleCheckout, setCheckout } = useCart();

  const handlePurchase = () => {
    if (selectedSize === "Select Size") {
      alert("Please select a size");
      return;
    }

    handleCheckout();
  };

  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 pt-10">
        <label>Value:</label>
        <div className="relative select-arrow">
          <select
            name="value"
            id="value"
            className="p-6 bg-transparent border w-72"
            value={selectedSize}
            onChange={handleChange}
          >
            {["Select Value", "$25.00", "$50.00", "$75.00", "$100.00"].map(
              (value, i) => (
                <option
                  key={i}
                  value={i === 0 ? "" : value}
                  className="text-sm text-black"
                >
                  {value}
                </option>
              )
            )}
          </select>
        </div>
        <button
          className="h-16 px-24 mt-10 w-72 bg-Gray"
          disabled={isCheckingOut}
          onClick={handlePurchase}
        >
          {isCheckingOut ? "Purchasing..." : "Purchase"}
        </button>
      </div>
      {checkout && <MessageModal setCheckout={setCheckout} />}
    </div>
  );
};

export default GiftCard;
