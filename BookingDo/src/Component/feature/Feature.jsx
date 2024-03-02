import React from "react";
import "./feature.css";
import Icon from "./Icon.jsx";

const Card = ({ iconName, title, description }) => (
  <>
    <div className="feature-r">
      <div className="feature-box">
        <div className="card-icon">
          <Icon name={iconName} />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  </>
);

const feature = ({ feature1 }) => {
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
          <div class="card-group text-center">
            {feature1.map((card, index) => (
              <Card
                key={index}
                icon={card.iconName}
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

export default feature;
