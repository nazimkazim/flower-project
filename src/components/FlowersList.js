import React from "react";
import Flower from "./Flower";

const FlowersList = ({ flowers }) => {
  if (flowers.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no flowers matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="featured-flowers">
      <div className="columns featured-flowers-center is-multiline">
        {flowers.map(item => {
          return <Flower key={item.id} flower={item} />;
        })}
      </div>
    </section>
  );
};

export default FlowersList;
