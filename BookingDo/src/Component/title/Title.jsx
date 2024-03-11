import React from "react";
import "./title.css";
import Card from "../card/Card.jsx";
import cardsData from "../data/CardData.jsx";

const title = () => {
  return (
    <>
      <div className="title-heading">
        <h2>How does it work?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry dummy text of the printing
          and typesetting industry dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          content={card.content}
        />
      ))}
    </>
  );
};

export default title;
