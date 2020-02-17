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
          title="Авторские букеты по вашему желанию"
          subtitle="Живые цветы, композиции и оформление вашего мероприятия"
        >
          <Link to="/flowers" className="btn-primary">
            <button className="button is-link">Наш ассортимент</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedFlowers />
    </>
  );
};

export default Home;
