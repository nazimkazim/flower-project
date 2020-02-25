import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { BlogContext } from "../contextBlog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from "moment";

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

    const { header, description, date, extraPictures, mainPicture } = blog;
    return (
      <section>
        <div className="columns">
          <div class="column is-half is-offset-one-quarter">
            <h1 className="has-text-centered is-bold is-size-3 has-text-weight-semibold">
              {header}
            </h1>
            <div className="columns">
              <div class="column is-one-fifth">
                <figure class="image is-32x32">
                  <img
                    class="is-rounded"
                    src="https://avatars.io/twitter/naz"
                    alt=""
                  />
                </figure>
                <span>Альбина</span>
                <span>{moment(date).format("MMM Do YY")}</span>
              </div>
              <div class="column"></div>
              <div class="column"></div>
              <div class="column"></div>
            </div>
            <div className="has-text-centered">
              <figure className="image is-16by9">
                <img alt="" src={mainPicture} />
              </figure>
            </div>
            <div>{description}</div>
          </div>
        </div>
      </section>
    );
  }
}
