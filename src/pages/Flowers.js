import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FlowersContainer from "../components/FlowersContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link className="btn-primary" to="/">
            return home
          </Link>
        </Banner>
      </Hero>
      <FlowersContainer />
    </>
  );
};

export default Rooms;
