import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartIcon from "../assets/icons/shopping-bag-icon.svg";

const Header = () => {
  const { totalQty } = useCart();

  return (
    <div className="absolute top-0 z-10 w-full">
      <div className="flex items-center justify-between px-6 py-10 lg:px-20">
        <div className="flex items-end">
          <Link to="/" className="text-3xl font-bold leading-5">
            Crosby
          </Link>
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <ul className="hidden gap-10 text-sm font-light lg:flex">
          <li>
            <NavLink to="shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="our-story">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="journal">Journal</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <Link to="cart" className="flex items-center">
          <img src={CartIcon} alt="CartIcon" />
          <span className="w-8">{totalQty}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
