import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { shopItems } from "../data/shopItems";

const Plants = ({ isChosen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const location = useLocation();
  const plantName = location.state?.plantName ?? "";

  useEffect(() => {
    if (isChosen) {
      const shuffledItems = [...shopItems]
        .filter((item) => item.name !== plantName)
        .sort(() => 0.5 - Math.random());
      const selectedItems = shuffledItems.slice(0, 5);
      setDisplayedItems(selectedItems);
    } else {
      setDisplayedItems(shopItems);
    }
  }, [isChosen]);

  return (
    <div className="grid md:grid-cols-4 gap-x-10 md:gap-x-4 gap-y-8 md:gap-y-14 xl:gap-y-24">
      {displayedItems.map((item, index) => (
        <Link
          to={`/shop/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
          key={index}
          className="transition-all duration-1000 ease-in-out"
        >
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={item.image}
              alt={item.name}
              className={`object-cover w-full ${
                isChosen ? "h-[380px]" : "md:h-64 lg:h-96 xl:h-[640px]"
              }`}
            />
            <AnimatePresence>
              {item.hoverImage && hoveredItem === index && (
                <motion.img
                  src={item.hoverImage}
                  alt={item.name}
                  className={`object-cover w-full absolute ${
                    isChosen ? "h-[380px]" : "h-[640px]"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
            <div className="w-full text-center">
              <p className="pt-4 text-lg">{item.name}</p>
              <p className="pt-1">from ${item.price.small}.00</p>
              {item.isSale && <p className="text-Gray">SALE</p>}
              {item.isSoldOut && <p className="text-Gray">SOLD OUT</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Plants;
