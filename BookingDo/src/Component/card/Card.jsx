import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="title">
        <div className="title-r">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button>Get Started</button>
        </div>
        <div className="title-image" id="i1">
          <img src={props.image} alt={props.title} />
        </div>
      </div>
    </>
  );
};

export default Card;

// // const StoreCard = ({ image, title, content }) => (
// //   <>
// //     <div className="store-card">
// //       <div className="store-image">{image}</div>
// //     </div>
// //     <div className="store-title">{title}</div>
// //     <div className="store-desc">{content}</div>
// //   </>
// // );
