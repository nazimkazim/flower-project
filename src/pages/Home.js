import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedFlowers from "../components/FeaturedFlowers";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="обаятельные цветы"
          subtitle="великолепные цветы от 3000 тенге"
        >
          <Link to="/flowers" className="btn-primary">
            <button className="button is-link">Наши цветы</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedFlowers />
    </>
  );
};

export default Home;
