import React from "react";
export default function Banner({ children, title, subtitle }) {
  return (
    <section className="hero is-primary is-medium hero-c">
      <div className="hero-body">
        <div className="has-text-centered">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
