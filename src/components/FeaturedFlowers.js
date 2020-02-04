import React, { Component } from "react";
import { FlowerContext } from "../context";
import Loading from "./Loading";
import Flower from "./Flower";
import Title from "./Title";

export default class FeaturedFlowers extends Component {
  static contextType = FlowerContext;
  render() {
    let { loading, featuredFlowers: flowers } = this.context;
    flowers = flowers.map(flower => {
      return <Flower key={flower.id} flower={flower} />;
    });

    return (
      <section className="featured-flowers">
        <Title title="Самые популярные цветы" />
        <div className="columns featured-flowers-center is-multiline">
          {loading ? <Loading /> : flowers}
        </div>
      </section>
    );
  }
}
