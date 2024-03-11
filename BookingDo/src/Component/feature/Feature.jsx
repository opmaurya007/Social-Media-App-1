import React from "react";
import "./feature.css";
import FeatureCard from "../card/FeatureCard.jsx";
import FeatureData from "../data/FeatureData.jsx";

const feature = () => {
  return (
    <>
      <div className="feature">
        <div className="feature-r">
          <div className="feature-head">
            <h2>Premium Features</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div class="card-group ">
            {FeatureData.map((card, index) => (
              <FeatureCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default feature;
