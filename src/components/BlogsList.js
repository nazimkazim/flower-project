import React from "react";
import Blog from "./Blog";

const BlogsList = ({ blogs }) => {
  return (
    <section className="featured-flowers">
      {blogs.map(item => {
        return <Blog key={item.id} blog={item} />;
      })}
    </section>
  );
};

export default BlogsList;
