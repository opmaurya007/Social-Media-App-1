import React from "react";
import "./title.css";
const Card = ({ title, content, imageUrl }) => (
  <>
    <div className="title">
      <div className="content-container">
        <h2>{title}</h2>
        <p>{content}</p>
        <button>Get Started</button>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  </>
);

const title = ({ cardsData }) => {
  return (
    <>
      <div className="how-work">
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
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </>
  );
};

export default title;
