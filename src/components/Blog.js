import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Blog({ blog }) {
  const { header, slub, extraPictures, date } = blog;
  return (
    <div className="column is-one-quarter">
      <div className="card feature-flower-card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={(extraPictures && extraPictures[0]) || defaultImg}
              alt="single room"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="price-top">
              <h6>₸{date}</h6>
            </div>
            <p className="room-info">{header}</p>
            <Link to={`/blogs/${slub}`} className="button is-link is-small">
              подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blogs: PropTypes.shape({
    header: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    extraPictures: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.number.isRequired
  })
};
