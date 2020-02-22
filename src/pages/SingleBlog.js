import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { BlogContext } from "../contextBlog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = BlogContext;

  componentDidMount() {}
  render() {
    const { getBlog } = this.context;
    const blog = getBlog(this.state.slug);
    if (!blog) {
      return (
        <div className="error">
          <h3>no such room can be found...</h3>
          <Link to="/blogs" className="btn-primary">
            вернуться к блогам
          </Link>
        </div>
      );
    }

    const { header, description, date, extraPictures } = blog;
    return (
      <div className="columns">
        <div className="column carousel-column">
          <div className="carousel-container">
            <Carousel swipeable={true} showArrows={true}>
              {extraPictures &&
                extraPictures.map((item, index) => {
                  return <img key={index} src={item} alt="" />;
                })}
            </Carousel>
          </div>
        </div>
        <div className="column info-column">
          <div className="single-flower-info-container card">
            <div className="card-content">
              <p className="has-text-centered is-size-3 is-capitalized">
                {header}
              </p>
              <p className="has-text-centered">{description}</p>
              <hr></hr>
              <div className="tags are-medium"></div>
              <hr></hr>
              <h6 className="has-text-weight-semibold has-text-success is-size-4">
                ₸{date}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
