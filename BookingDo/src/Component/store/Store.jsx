import React from "react";
// import "../feature/feature.css";
import "./store.css";
// import FeatureCard from "../card/FeatureCard.jsx";
// import FeatureData from "../data/FeatureData.jsx";
import StoreData from "../data/StoreData.jsx";
import StoreCard from "../card/StoreCard.jsx";

const store = () => {
  return (
    <>
      <div className="store">
        <div className="store-r">
          <div className="store-head">
            <h2>Our Store Partners</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="card-group ">
            {StoreData.map((card, index) => (
              <StoreCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default store;
