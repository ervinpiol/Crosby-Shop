import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Header from "./layout/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Footer from "./layout/Footer";
import ChosenPlant from "./pages/ChosenPlant";
import ChosenJournal from "./pages/ChosenJournal";
import Cart from "./pages/Cart";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <CartProvider>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="contact" element={<Contact />} />
        <Route path="journal" element={<Journal />} />
        <Route path="/shop/:plantName" element={<ChosenPlant />} />
        <Route path="/journal/:journalName" element={<ChosenJournal />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
