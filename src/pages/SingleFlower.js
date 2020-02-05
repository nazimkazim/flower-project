import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { FlowerContext } from "../context";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class SingleFlower extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = FlowerContext;

  componentDidMount() {}
  render() {
    const { getFlower } = this.context;
    const flower = getFlower(this.state.slug);
    if (!flower) {
      return (
        <div className="error">
          <h3>no such room can be found...</h3>
          <Link to="/flowers" className="btn-primary">
            вернуться к цветам
          </Link>
        </div>
      );
    }

    const { name, description, price, extras, images } = flower;
    return (
      <div className="columns">
        <div className="column carousel-column">
          <div className="carousel-container">
            <Carousel swipeable="true" showArrows="true">
              {images &&
                images.map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })}
            </Carousel>
          </div>
        </div>
        <div className="column">
          <article className="info">
            <p>{name}</p>
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ${price}</h6>
          </article>

          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
