import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FlowersContainer from "../components/FlowersContainer";

const Flowers = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="наши цветы">
          <Link to="/" className="btn-primary">
            <button className="button is-link">на главную страницу</button>
          </Link>
        </Banner>
      </Hero>
      <FlowersContainer />
    </>
  );
};

export default Flowers;
