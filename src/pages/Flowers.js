import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FlowersContainer from "../components/FlowersContainer";

const Flowers = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="наши цветы">на главную страницу</Banner>
      </Hero>
      <FlowersContainer />
    </>
  );
};

export default Flowers;
