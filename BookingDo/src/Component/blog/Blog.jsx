import React from "react";
import "./Blog.css";
import BlogCard from "../card/BlogCard.jsx";
import BlogData from "../data/BlogData.jsx";

const blog = () => {
  return (
    <>
      <div className="store">
        <div className="store-r">
          <div className="store-head">
            <h2>Latest Blogs</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div class="card-group ">
            {BlogData.map((card, index) => (
              <BlogCard
                key={index}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
