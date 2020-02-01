import React, { Component } from "react";
import time from "../images/time.svg";
import van from "../images/van.svg";
import flower from "../images/flower.svg";
import centerAlignment from "../images/center-alignment.svg";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: time,
        title: "круглосуточно",
        info: "Dolor irure id exercitation et irure voluptate aliquip quis."
      },
      {
        icon: van,
        title: "быстрая доставка",
        info:
          "Duis cillum laboris quis mollit adipisicing pariatur cupidatat et."
      },
      {
        icon: flower,
        title: "свежие цветы",
        info:
          "Velit nulla nulla ea aliqua velit minim nulla est adipisicing adipisicing amet aliqua."
      },
      {
        icon: centerAlignment,
        title: "широкий выбор",
        info: "Dolor occaecat quis in culpa ut adipisicing qui est."
      }
    ]
  };
  render() {
    return (
      <section className="hero">
        <div className="columns service-columns">
          {this.state.services.map((item, i) => {
            return (
              <div className="column has-text-centered" key={i}>
                <span className="heading">
                  <img src={item.icon} alt={item.title} />
                </span>
                <span className="title">{item.title}</span>
                <div>{item.info}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
