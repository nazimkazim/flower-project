import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Flower({ flower }) {
  const { name, slug, images, price } = flower;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>₸{price}</h6>
        </div>
        <Link to={`/flowers/${slug}`} className="btn-primary room-link">
          подробнее
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Flower.propTypes = {
  flower: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired
  })
};
