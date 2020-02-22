import React from "react";
import Blog from "./Blog";

const BlogsList = ({ blogs }) => {
  if (blogs.length === 0) {
    return (
      <article class="message">
        <div class="message-body">
          к сожалению цветов с такими параметрами нет
        </div>
      </article>
    );
  }

  return (
    <section className="featured-flowers">
      <div className="columns featured-flowers-center is-multiline">
        {blogs.map(item => {
          return <Blog key={item.id} blog={item} />;
        })}
      </div>
    </section>
  );
};

export default BlogsList;
