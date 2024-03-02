import React from "react";
import "./store.css";

const Card = ({ imageUrl, title, content }) => (
  <>
    <div className="feature-r">
      <div className="feature-box">
        <div className="card-icon">{imageUrl}</div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{content}</p>
      </div>
    </div>
  </>
);

const store = ({ store1 }) => {
  return (
    <>
      <div className="store">
        <div className="feature-r">
          <div className="feature-head">
            <h2>Our Store Partners</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div class="card-group text-center">
            {store1.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default store;
