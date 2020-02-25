import React from "react";

export default function HeroBlog(props) {
  const { primaryTitle } = props;
  const { secondaryTitle } = props;
  return (
    <section className="hero is-medium is-bold hero-blog-bck-img">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{primaryTitle}</h1>
          <h2 className="subtitle">{secondaryTitle}</h2>
        </div>
      </div>
    </section>
  );
}
