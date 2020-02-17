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
        info: ""
      },
      {
        icon: van,
        title: "быстрая доставка по г. Алматы",
        info: ""
      },
      {
        icon: flower,
        title: "свежие цветы",
        info: ""
      },
      {
        icon: centerAlignment,
        title: "широкий выбор",
        info: ""
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
                <span className="title services-title">{item.title}</span>
                <div>{item.info}</div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
