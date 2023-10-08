import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (i) => i.name === item.name && i.size === item.size
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      setCartItems([...cartItems, { ...item, quantity: item.quantity }]);
    }

    setTotalQty((prevTotal) => prevTotal + item.quantity);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCart);
    setTotalQty((prevTotal) => prevTotal - item.quantity);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalQty(0);
  };

  const updateCart = (item, quantity) => {
    const itemToUpdate = cartItems.find((i) => i.name === item.name);

    if (itemToUpdate.quantity <= 1 && quantity === -1) {
      return;
    }

    itemToUpdate.quantity += quantity;

    setCartItems([...cartItems]);
    setTotalQty((prevTotal) => prevTotal + quantity);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setCheckout(true);
      setIsCheckingOut(false);
      clearCart();
    }, 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCart,
        totalQty,
        checkout,
        isCheckingOut,
        handleCheckout,
        setCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
