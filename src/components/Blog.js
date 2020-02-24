import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import moment from "moment";
export default function Blog({ blog }) {
  const { header, slub, extraPictures, date, description } = blog;
  return (
    <div className="column is-full">
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img
              src={(extraPictures && extraPictures[0]) || defaultImg}
              alt=""
            />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                <Link to={`/blogs/${slub}`}>{header}</Link>
              </strong>
              <br />
              <small>{moment(date).format("MMM Do YY")}</small>
              <br />
              {description.slice(0, 300) + "..."}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <span class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-retweet"></i>
                </span>
              </span>
              <span class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </span>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

Blog.propTypes = {
  blogs: PropTypes.shape({
    header: PropTypes.string.isRequired,
    slub: PropTypes.string.isRequired,
    extraPictures: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.number.isRequired
  })
};
