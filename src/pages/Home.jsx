import React from "react";
import Hero from "../common/Hero";
import FanFavorites from "../components/Home/FanFavorites";
import TheJournal from "../components/Home/TheJournal";
import Newsletter from "../components/Home/Newsletter";
import GiftCard from "../components/Home/GiftCard";

import HomeHero from "../assets/Hero/hero_img.jpg";

const Home = () => {
  return (
    <>
      <Hero image={HomeHero} />
      <FanFavorites />
      <TheJournal />
      <Newsletter />
      <GiftCard />
    </>
  );
};

export default Home;
