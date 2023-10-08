import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import MessageModal from "../common/MessageModal";
import MinusIcon from "../assets/icons/minus-icon.svg";
import PlusIcon from "../assets/icons/plus-icon.svg";
import CrossIcon from "../assets/icons/cross-icon.svg";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCart,
    checkout,
    isCheckingOut,
    handleCheckout,
    setCheckout,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full pt-32 md:pt-40 md:pb-20 lg:pb-0 xl:pt-60 bg-DarkGray">
      <div className="px-4 mx-auto xl:w-2/3 md:px-8 lg:px-12 xl:px-0">
        <h3 className="lg:text-[32px] text-[26px] pb-6 xl:pb-10">
          Shopping Cart
        </h3>
        {cartItems.length === 0 ? (
          <div className="pb-72">
            <p>You have nothing in your shopping cart.</p>
            <Link to="/shop">
              <span className="flex items-center justify-center h-16 mt-6 xl:mt-10 bg-Gray w-60 xl:w-80">
                Continue Shopping
              </span>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start justify-between pb-6 mb-6 border-b border-Gray md:flex-row"
              >
                <div className="flex w-full gap-5">
                  <img
                    src={item.image}
                    alt="image"
                    className="object-cover w-24 md:w-[132px] h-16 md:h-[132px]"
                  />
                  <div className="flex flex-col items-start justify-between w-full gap-8 md:flex-row">
                    <div>
                      <p>{item.name}</p>
                      <p className="pt-2 text-sm text-Gray">
                        Size: <span>{item.size}</span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-1/2">
                      <div className="flex items-center gap-1.5 md:gap-4">
                        <button onClick={() => updateCart(item, -1)}>
                          <img src={MinusIcon} alt="MinusIcon" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateCart(item, 1, index)}>
                          <img src={PlusIcon} alt="PlusIcon" />
                        </button>
                      </div>
                      <span className="text-right md:pr-24 w-28">
                        ${item.price * item.quantity}.00
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item, index)}
                  className="absolute right-0"
                >
                  <img src={CrossIcon} alt="CrossIcon" />
                </button>
              </div>
            ))}
            <div className="pb-20 ml-auto md:pt-6 md:w-2/5">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-xl w-28 text-end">${total}.00</span>
              </div>
              <button
                className="w-full h-16 mt-4 md:mt-10 px-14 bg-Gray"
                onClick={handleCheckout}
              >
                {isCheckingOut ? "Checking out..." : "Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
      {checkout && <MessageModal setCheckout={setCheckout} />}
    </div>
  );
};

export default Cart;
