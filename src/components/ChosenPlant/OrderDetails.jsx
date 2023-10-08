import React from "react";

const OrderDetails = ({
  selectedSize,
  selectedQuantity,
  setSelectedQuantity,
  isSoldOut,
  isAdding,
  handleAddToCart,
  handleChange,
}) => {
  return (
    <>
      <div
        className={`flex flex-col items-center gap-2 pt-10 ${
          isSoldOut && "text-Gray"
        }`}
      >
        <label>Size:</label>
        <div className="relative select-arrow">
          <select
            name="size"
            id="size"
            className={`p-6 bg-transparent border w-72  ${
              isSoldOut && "border-Gray"
            }`}
            value={selectedSize}
            onChange={handleChange}
          >
            {["Select Size", "Small", "Medium", "Large"].map((size, i) => (
              <option
                key={i}
                value={i === 0 ? "" : size}
                className="text-sm text-black"
              >
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!isSoldOut && (
        <div className="flex flex-col items-center gap-2 pt-10">
          <label>Quantity:</label>
          <input
            type="number"
            size="4"
            max="9999"
            min="1"
            step="1"
            placeholder="1"
            className="p-6 bg-transparent border placeholder:text-white"
            onChange={(e) => {
              setSelectedQuantity(parseInt(e.target.value, 10));
            }}
            value={selectedQuantity}
          />
        </div>
      )}
      <button
        className={`h-16 px-24 mt-10 w-72 bg-Gray ${
          isSoldOut && "line-through"
        }`}
        disabled={isSoldOut || isAdding}
        onClick={handleAddToCart}
      >
        {isSoldOut ? "Sold Out" : isAdding ? "Adding..." : "Add to Cart"}
      </button>
    </>
  );
};

export default OrderDetails;
