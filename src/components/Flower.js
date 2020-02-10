import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Flower({ flower }) {
  const { name, slug, images, price, available } = flower;
  return (
    <div className="column is-one-quarter">
      <div className="card feature-flower-card">
        <div class="card-image">
          {available ? (
            <span className="tag tag-available">в наличии</span>
          ) : (
            <span className="tag tag-available">нет в наличии</span>
          )}
          <figure class="image is-4by3">
            <img src={(images && images[0]) || defaultImg} alt="single room" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="price-top">
              <h6>₸{price}</h6>
            </div>
            <p className="room-info">{name}</p>
            <Link to={`/flowers/${slug}`} className="button is-link">
              подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
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
