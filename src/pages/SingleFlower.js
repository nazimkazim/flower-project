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
            <Carousel swipeable={true} showArrows={true}>
              {images &&
                images.map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })}
            </Carousel>
          </div>
        </div>
        <div className="column info-column">
          <div className="single-flower-info-container card">
            <div className="card-content">
              <p className="has-text-centered is-size-3 is-capitalized">
                {name}
              </p>
              <p className="has-text-centered">{description}</p>
              <hr></hr>
              <div className="tags are-medium">
                {extras.map((item, index) => {
                  return (
                    <span className="tag is-primary" key={index}>
                      {item}mm
                    </span>
                  );
                })}
              </div>
              <hr></hr>
              <h6 className="has-text-weight-semibold has-text-success is-size-4">
                ₸{price}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
